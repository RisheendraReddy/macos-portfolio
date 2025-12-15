import React, { useRef, useEffect, useState } from 'react'
import { X, Minus, Square } from 'lucide-react'
import { WindowState } from '../types'

interface WindowProps {
  window: WindowState
  onClose: () => void
  onMinimize: () => void
  onMaximize: () => void
  onFocus: () => void
  onPositionChange: (x: number, y: number) => void
  children: React.ReactNode
}

const Window = ({
  window: windowState,
  onClose,
  onMinimize,
  onMaximize,
  onFocus,
  onPositionChange,
  children,
}: WindowProps) => {
  const windowRef = useRef<HTMLDivElement>(null)
  const titleBarRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  
  // Local drag state - no global state needed
  const isDraggingRef = useRef(false)
  const dragOffsetRef = useRef({ x: 0, y: 0 })

  // Fade in on mount
  useEffect(() => {
    if (!windowState.isMinimized) {
      setIsVisible(true)
    }
  }, [windowState.isMinimized])

  // Handle pointer down on title bar - start dragging immediately
  const handleTitleBarPointerDown = (e: React.PointerEvent) => {
    console.log('DRAG START')
    // Don't start drag if clicking directly on buttons
    const target = e.target as HTMLElement
    if (target.tagName === 'BUTTON' || target.closest('button')) {
      return
    }

    // Don't start drag if window is maximized
    if (windowState.isMaximized) {
      return
    }

    // Focus this window when starting to drag (brings it to front)
    onFocus()

    // Calculate offset: distance from cursor to window's stored position
    // offsetX = cursorX - windowX
    // This keeps the cursor "anchored" to the same point on the window
    dragOffsetRef.current = {
      x: e.clientX - windowState.x,
      y: e.clientY - windowState.y,
    }

    // Start dragging immediately
    isDraggingRef.current = true
    
    // Capture pointer for smooth dragging
    e.preventDefault()
    e.stopPropagation()
    e.currentTarget.setPointerCapture(e.pointerId)

    // Disable text selection while dragging
    document.body.style.userSelect = 'none'
    document.body.style.cursor = 'grabbing'
  }

  const handleTitleBarPointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return

    const newX = e.clientX - dragOffsetRef.current.x
    const newY = e.clientY - dragOffsetRef.current.y

    const viewportWidth = window.innerWidth
    const viewportHeight = window.innerHeight
    const menuBarHeight = 28
    const dockHeight = 80

    const minX = 0
    const minY = menuBarHeight
    const maxX = Math.max(0, viewportWidth - windowState.width)
    const maxY = Math.max(menuBarHeight, viewportHeight - windowState.height - dockHeight)

    const clampedX = Math.max(minX, Math.min(newX, maxX))
    const clampedY = Math.max(minY, Math.min(newY, maxY))

    onPositionChange(clampedX, clampedY)
  }

  const handleTitleBarPointerUp = (e: React.PointerEvent) => {
    if (!isDraggingRef.current) return

    isDraggingRef.current = false

    try {
      titleBarRef.current?.releasePointerCapture(e.pointerId)
    } catch {
      // ignore
    }

    document.body.style.userSelect = ''
    document.body.style.cursor = ''
  }

  const handleMaximize = () => {
    if (windowState.isMaximized) {
      onPositionChange(100, 100)
    } else {
      onPositionChange(0, 28)
    }
    onMaximize()
  }

  const handleWindowPointerDownCapture = () => {
    // Focus window when clicking anywhere on it (capture phase, before drag)
    onFocus()
  }

  const getViewportSize = () => {
    if (typeof window !== 'undefined') {
      return { width: window.innerWidth, height: window.innerHeight }
    }
    return { width: windowState.width, height: windowState.height }
  }

  const viewport = getViewportSize()
  
  // Use fixed positioning with left/top - NO transforms that break drag math
  const windowPosition = windowState.isMaximized
    ? {
        left: 0,
        top: 28,
        width: viewport.width,
        height: viewport.height - 28 - 80,
      }
    : {
        left: windowState.x,
        top: windowState.y,
        width: windowState.width,
        height: windowState.height,
      }

  if (windowState.isMinimized) return null

  return (
    <div
      ref={windowRef}
      className="fixed pointer-events-auto transition-opacity duration-200"
      style={{
        zIndex: windowState.zIndex,
        left: windowPosition.left,
        top: windowPosition.top,
        width: windowPosition.width,
        height: windowPosition.height,
        opacity: isVisible ? 1 : 0,
      }}
      onPointerDownCapture={handleWindowPointerDownCapture}
    >
      <div className="w-full h-full bg-gray-800/80 backdrop-blur-2xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden flex flex-col">
        <div
          ref={titleBarRef}
          data-drag-handle
          className="h-10 bg-gray-900/50 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-4 cursor-grab select-none"
          style={{ pointerEvents: 'auto', zIndex: 9999 }}
          onPointerDown={handleTitleBarPointerDown}
          onPointerMove={handleTitleBarPointerMove}
          onPointerUp={handleTitleBarPointerUp}
          onDoubleClick={handleMaximize}
        >
          <div className="flex items-center gap-2" onPointerDown={(e) => e.stopPropagation()}>
            <button
              onClick={(e) => {
                e.stopPropagation()
                onClose()
              }}
              onPointerDown={(e) => e.stopPropagation()}
              className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-600 transition-colors flex items-center justify-center group"
            >
              <X size={8} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                onMinimize()
              }}
              onPointerDown={(e) => e.stopPropagation()}
              className="w-3 h-3 rounded-full bg-yellow-500 hover:bg-yellow-600 transition-colors flex items-center justify-center group"
            >
              <Minus size={8} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleMaximize()
              }}
              onPointerDown={(e) => e.stopPropagation()}
              className="w-3 h-3 rounded-full bg-green-500 hover:bg-green-600 transition-colors flex items-center justify-center group"
            >
              <Square size={8} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
          <div className="text-sm text-white/80 font-medium flex-1 text-center">{windowState.title}</div>
          <div className="w-20" />
        </div>
        <div className="flex-1 overflow-auto p-6">{children}</div>
      </div>
    </div>
  )
}

export default Window

