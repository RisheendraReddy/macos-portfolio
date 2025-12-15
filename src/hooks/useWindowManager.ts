import { useState, useCallback } from 'react'
import { WindowState } from '../types'

const DEFAULT_Z_INDEX = 99
const Z_INDEX_INCREMENT = 1

/**
 * Helper function to get the next z-index value
 * Ensures the new z-index is always higher than all existing windows
 */
const getNextZIndex = (windows: WindowState[]): number => {
  if (windows.length === 0) {
    return DEFAULT_Z_INDEX + Z_INDEX_INCREMENT
  }
  
  const validZIndices = windows
    .map(w => w.zIndex)
    .filter(z => typeof z === 'number' && !isNaN(z) && isFinite(z))
  
  if (validZIndices.length === 0) {
    return DEFAULT_Z_INDEX + Z_INDEX_INCREMENT
  }
  
  return Math.max(...validZIndices) + Z_INDEX_INCREMENT
}

export const useWindowManager = () => {
  const [windows, setWindows] = useState<WindowState[]>([])

  const openWindow = useCallback((window: Omit<WindowState, 'zIndex'>) => {
    setWindows((prev) => {
      const existing = prev.find((w) => w.id === window.id)
      const newZIndex = getNextZIndex(prev)
      
      if (existing) {
        // Window exists: restore it and bring to front
        return prev.map((w) =>
          w.id === window.id
            ? { ...w, ...window, isMinimized: false, zIndex: newZIndex }
            : w
        )
      }
      // New window: add it with the new z-index
      return [...prev, { ...window, zIndex: newZIndex }]
    })
  }, [])

  const closeWindow = useCallback((id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id))
  }, [])

  const minimizeWindow = useCallback((id: string) => {
    setWindows((prev) => {
      const windowExists = prev.some((w) => w.id === id)
      if (!windowExists) return prev
      
      return prev.map((w) =>
        w.id === id ? { ...w, isMinimized: true } : w
      )
    })
  }, [])

  const maximizeWindow = useCallback((id: string) => {
    setWindows((prev) => {
      const windowExists = prev.some((w) => w.id === id)
      if (!windowExists) return prev
      
      const newZIndex = getNextZIndex(prev)
      return prev.map((w) =>
        w.id === id
          ? { ...w, isMaximized: !w.isMaximized, zIndex: newZIndex }
          : w
      )
    })
  }, [])

  const focusWindow = useCallback((id: string) => {
    setWindows((prev) => {
      const windowExists = prev.some((w) => w.id === id)
      if (!windowExists) return prev
      
      const newZIndex = getNextZIndex(prev)
      return prev.map((w) =>
        w.id === id ? { ...w, zIndex: newZIndex } : w
      )
    })
  }, [])

  const updateWindowPosition = useCallback((id: string, x: number, y: number) => {
    setWindows((prev) => {
      const windowExists = prev.some((w) => w.id === id)
      if (!windowExists) return prev
      
      return prev.map((w) =>
        w.id === id ? { ...w, x, y } : w
      )
    })
  }, [])

  return {
    windows,
    openWindow,
    closeWindow,
    minimizeWindow,
    maximizeWindow,
    focusWindow,
    updateWindowPosition,
  }
}

