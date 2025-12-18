import React, { useEffect } from 'react'
import MenuBar from './MenuBar'
import Dock from './Dock'
import Window from './Window'
import Finder from './apps/Finder'
import VideoWallpaper from './VideoWallpaper'
import { useWindowManager } from '../hooks/useWindowManager'

const Desktop = () => {
  const { windows, openWindow, closeWindow, minimizeWindow, maximizeWindow, focusWindow, updateWindowPosition } = useWindowManager()

  const handleOpenFinder = () => {
    const finderWindow = windows.find((w) => w.id === 'finder')
    if (finderWindow) {
      if (finderWindow.isMinimized) {
        openWindow({ ...finderWindow, isMinimized: false })
      }
      focusWindow('finder')
    } else {
      openWindow({
        id: 'finder',
        title: 'Finder',
        app: 'finder',
        x: window.innerWidth / 2 - 400,
        y: 100,
        width: 800,
        height: 600,
        isMinimized: false,
        isMaximized: false,
        content: <Finder onOpenApp={openWindow} />,
      })
    }
  }

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'w') {
        e.preventDefault()
        const topWindow = [...windows].sort((a, b) => b.zIndex - a.zIndex)[0]
        if (topWindow) closeWindow(topWindow.id)
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'a') {
        e.preventDefault()
        window.getSelection()?.selectAllChildren(document.body)
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'n') {
        e.preventDefault()
        handleOpenFinder()
      }
      if ((e.metaKey || e.ctrlKey) && (e.key === '=' || e.key === '+')) {
        e.preventDefault()
        document.body.style.zoom = String((parseFloat(document.body.style.zoom) || 1) + 0.1)
      }
      if ((e.metaKey || e.ctrlKey) && e.key === '-') {
        e.preventDefault()
        document.body.style.zoom = String(Math.max(0.5, (parseFloat(document.body.style.zoom) || 1) - 0.1))
      }
      if ((e.metaKey || e.ctrlKey) && e.key === '0') {
        e.preventDefault()
        document.body.style.zoom = '1'
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [windows, closeWindow])

  const handleMinimizeAll = () => {
    windows.forEach((w) => {
      if (!w.isMinimized) minimizeWindow(w.id)
    })
  }

  const handleCloseAll = () => {
    if (confirm('Close all windows?')) {
      windows.forEach((w) => closeWindow(w.id))
    }
  }

  const handleBringAllToFront = () => {
    windows.forEach((w) => focusWindow(w.id))
  }

  const handleShowKeyboardShortcuts = () => {
    alert(`Keyboard Shortcuts:

⌘N - New Finder Window
⌘W - Close Window
⌘A - Select All
⌘C - Copy
⌘+ - Zoom In
⌘- - Zoom Out
⌘0 - Actual Size
⌘Q - Quit Portfolio`)
  }

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Video Wallpaper */}
      <VideoWallpaper />

      {/* Menu Bar */}
      <MenuBar
        onOpenFinder={handleOpenFinder}
        onMinimizeAll={handleMinimizeAll}
        onCloseAll={handleCloseAll}
        onCloseWindow={() => {
          const topWindow = [...windows].sort((a, b) => b.zIndex - a.zIndex)[0]
          if (topWindow) closeWindow(topWindow.id)
        }}
        onBringAllToFront={handleBringAllToFront}
        onShowKeyboardShortcuts={handleShowKeyboardShortcuts}
      />

      {/* Windows Container - fixed positioning, pointer events enabled */}
      <div className="fixed inset-0">
        {windows
          .filter((w) => !w.isMinimized)
          .sort((a, b) => a.zIndex - b.zIndex)
          .map((window) => {
            // Ensure Terminal and Finder always have onOpenApp prop
            let content = window.content
            if ((window.id === 'terminal' || window.id === 'finder') && window.content) {
              // Clone the element and add onOpenApp prop
              const element = window.content as React.ReactElement
              content = React.cloneElement(element, { onOpenApp: openWindow })
            }
            
            return (
              <Window
                key={window.id}
                window={window}
                onClose={() => closeWindow(window.id)}
                onMinimize={() => minimizeWindow(window.id)}
                onMaximize={() => maximizeWindow(window.id)}
                onFocus={() => focusWindow(window.id)}
                onPositionChange={(x, y) => updateWindowPosition(window.id, x, y)}
              >
                {content}
              </Window>
            )
          })}
      </div>

      {/* Dock */}
      <Dock onOpenApp={openWindow} windows={windows} />
    </div>
  )
}

export default Desktop

