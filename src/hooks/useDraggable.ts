import { useRef, useEffect } from 'react'

/**
 * Hook for making elements draggable using pointer events and pointer capture.
 * 
 * @example
 * ```tsx
 * const { ref, bind } = useDraggable(onMove)
 * 
 * // ✅ CORRECT USAGE (copy-paste this exactly):
 * return (
 *   <div ref={ref} className="fixed">
 *     <div
 *       data-drag-handle
 *       {...bind}
 *       className="cursor-grab select-none"
 *       style={{ pointerEvents: 'auto', zIndex: 9999 }}
 *     >
 *       Title Bar
 *     </div>
 * 
 *     <div>
 *       Window content
 *     </div>
 *   </div>
 * )
 * 
 * // 🔑 The bind MUST be spread on the drag handle element.
 * ```
 */
export const useDraggable = (
  onDrag: (x: number, y: number) => void,
  enabled: boolean = true
) => {
  const ref = useRef<HTMLDivElement>(null)
  const draggingRef = useRef(false)
  const offsetRef = useRef({ x: 0, y: 0 })
  const capturedPointerIdRef = useRef<number | null>(null)

  const onPointerDown = (e: React.PointerEvent) => {
    if (!enabled || e.button !== 0) return

    const target = e.target as HTMLElement
    const dragHandle = target.closest('[data-drag-handle]')
    
    if (!dragHandle || !ref.current?.contains(dragHandle)) {
      return
    }

    const rect = ref.current.getBoundingClientRect()

    draggingRef.current = true
    offsetRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
    capturedPointerIdRef.current = e.pointerId

    // Capture pointer for smooth dragging
    ref.current.setPointerCapture(e.pointerId)

    e.preventDefault()
  }

  // Use native event listeners for move/up to work correctly with pointer capture
  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      if (!draggingRef.current) return

      const newX = e.clientX - offsetRef.current.x
      const newY = e.clientY - offsetRef.current.y

      onDrag(newX, newY)
    }

    const handlePointerUp = () => {
      if (!draggingRef.current) return

      draggingRef.current = false

      try {
        if (capturedPointerIdRef.current !== null && ref.current) {
          ref.current.releasePointerCapture(capturedPointerIdRef.current)
        }
        capturedPointerIdRef.current = null
      } catch {
        // Ignore errors if pointer capture was already released
      }
    }

    const handlePointerCancel = () => {
      if (!draggingRef.current) return

      draggingRef.current = false

      try {
        if (capturedPointerIdRef.current !== null && ref.current) {
          ref.current.releasePointerCapture(capturedPointerIdRef.current)
        }
        capturedPointerIdRef.current = null
      } catch {
        // Ignore errors
      }
    }

    // Always attach listeners - they check draggingRef internally
    document.addEventListener('pointermove', handlePointerMove)
    document.addEventListener('pointerup', handlePointerUp)
    document.addEventListener('pointercancel', handlePointerCancel)

    return () => {
      document.removeEventListener('pointermove', handlePointerMove)
      document.removeEventListener('pointerup', handlePointerUp)
      document.removeEventListener('pointercancel', handlePointerCancel)
      // Cleanup: reset dragging state if component unmounts while dragging
      if (draggingRef.current) {
        draggingRef.current = false
        capturedPointerIdRef.current = null
      }
    }
  }, [onDrag])

  return {
    ref, // Attach to the draggable container
    bind: enabled
      ? {
          onPointerDown, // Spread {...bind} on the element with data-drag-handle
        }
      : {},
  }
}
