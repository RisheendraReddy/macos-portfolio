import { useState, useRef } from 'react'

export default function TestDrag() {
  const [pos, setPos] = useState({ x: 100, y: 100 })
  const ref = useRef<HTMLDivElement>(null)
  const offset = useRef({ x: 0, y: 0 })
  const dragging = useRef(false)

  return (
    <div
      ref={ref}
      className="fixed bg-gray-800 text-white p-4 rounded-lg cursor-grab active:cursor-grabbing select-none"
      style={{ left: pos.x, top: pos.y, width: 300 }}
      onPointerDown={(e) => {
        dragging.current = true
        offset.current = { x: e.clientX - pos.x, y: e.clientY - pos.y }
        ref.current?.setPointerCapture(e.pointerId)
      }}
      onPointerMove={(e) => {
        if (!dragging.current) return
        setPos({
          x: e.clientX - offset.current.x,
          y: e.clientY - offset.current.y,
        })
      }}
      onPointerUp={(e) => {
        dragging.current = false
        ref.current?.releasePointerCapture(e.pointerId)
      }}
    >
      DRAG ME
    </div>
  )
}




