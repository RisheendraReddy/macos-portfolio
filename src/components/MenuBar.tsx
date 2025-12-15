import { useState, useEffect, useRef } from 'react'
import { Wifi } from 'lucide-react'
import { PORTFOLIO_NAME } from '../utils/constants'

interface MenuBarProps {
  onOpenFinder?: () => void
  onMinimizeAll?: () => void
  onCloseAll?: () => void
  onCloseWindow?: () => void
  onBringAllToFront?: () => void
  onShowKeyboardShortcuts?: () => void
}

const MenuBar = ({
  onOpenFinder,
  onMinimizeAll,
  onCloseAll,
  onCloseWindow,
  onBringAllToFront,
  onShowKeyboardShortcuts,
}: MenuBarProps) => {
  const [time, setTime] = useState(new Date())
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const menuRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeMenu) {
        const menuElement = menuRefs.current[activeMenu]
        if (menuElement && !menuElement.contains(event.target as Node)) {
          setActiveMenu(null)
        }
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [activeMenu])

  const formatTime = (date: Date) => {
    const local = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })

    // Show fixed UTC-6 label only (no time)
    return `${local} (UTC-6)`
  }

  const toggleMenu = (menu: string) => {
    setActiveMenu(activeMenu === menu ? null : menu)
  }

  const handleMenuAction = (action: () => void) => {
    action()
    setActiveMenu(null)
  }

  const handleAboutPortfolio = () => {
    alert('macOS-Inspired Portfolio\nBuilt with React, TypeScript, and Tailwind CSS\n\nA modern, interactive portfolio website that mimics the macOS desktop experience.')
    setActiveMenu(null)
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      alert('URL copied to clipboard!')
    } catch (err) {
      console.error('Failed to copy:', err)
    }
    setActiveMenu(null)
  }

  const handleSelectAll = () => {
    window.getSelection()?.selectAllChildren(document.body)
    setActiveMenu(null)
  }

  const handleZoomIn = () => {
    document.body.style.zoom = String((parseFloat(document.body.style.zoom) || 1) + 0.1)
    setActiveMenu(null)
  }

  const handleZoomOut = () => {
    document.body.style.zoom = String(Math.max(0.5, (parseFloat(document.body.style.zoom) || 1) - 0.1))
    setActiveMenu(null)
  }

  const handleActualSize = () => {
    document.body.style.zoom = '1'
    setActiveMenu(null)
  }

  const MenuDropdown = ({ menu, items }: { menu: string; items: Array<{ label?: string; action?: () => void; shortcut?: string; divider?: boolean }> }) => {
    if (activeMenu !== menu) return null

    return (
      <div
        ref={(el) => (menuRefs.current[menu] = el)}
        className="absolute top-7 left-0 bg-gray-800/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl py-2 min-w-[200px] z-50"
        style={{ left: menu === 'Portfolio' ? '0' : undefined }}
      >
        {items.map((item, index) => {
          if (item.divider) {
            return <div key={index} className="h-px bg-white/10 my-1" />
          }
          return (
            <div
              key={index}
              onClick={() => item.action && handleMenuAction(item.action)}
              className="px-4 py-2 hover:bg-blue-500/30 cursor-pointer flex items-center justify-between text-xs"
            >
              <span>{item.label}</span>
              {item.shortcut && <span className="text-white/40 ml-4">{item.shortcut}</span>}
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="absolute top-0 left-0 right-0 h-7 bg-black/30 backdrop-blur-xl border-b border-white/10 z-50 flex items-center justify-between px-4 text-xs text-white/90">
      <div className="flex items-center gap-4 relative">
        <span className="font-semibold">{PORTFOLIO_NAME}</span>
        <div className="flex gap-3 relative">
          {/* Portfolio Menu */}
          <div className="relative">
            <span
              className="hover:text-white cursor-pointer"
              onClick={() => toggleMenu('Portfolio')}
            >
              Portfolio
            </span>
            <MenuDropdown
              menu="Portfolio"
              items={[
                { label: 'About This Portfolio', action: handleAboutPortfolio },
                { divider: true },
                { label: 'Quit Portfolio', action: () => window.close(), shortcut: '⌘Q' },
              ]}
            />
          </div>

          {/* File Menu */}
          <div className="relative">
            <span
              className="hover:text-white cursor-pointer"
              onClick={() => toggleMenu('File')}
            >
              File
            </span>
            <MenuDropdown
              menu="File"
              items={[
                { label: 'New Finder Window', action: onOpenFinder || (() => {}), shortcut: '⌘N' },
                { divider: true },
                { label: 'Copy URL', action: handleCopy, shortcut: '⌘C' },
              ]}
            />
          </div>

          {/* Edit Menu */}
          <div className="relative">
            <span
              className="hover:text-white cursor-pointer"
              onClick={() => toggleMenu('Edit')}
            >
              Edit
            </span>
            <MenuDropdown
              menu="Edit"
              items={[
                { label: 'Copy', action: handleCopy, shortcut: '⌘C' },
                { label: 'Select All', action: handleSelectAll, shortcut: '⌘A' },
              ]}
            />
          </div>

          {/* View Menu */}
          <div className="relative">
            <span
              className="hover:text-white cursor-pointer"
              onClick={() => toggleMenu('View')}
            >
              View
            </span>
            <MenuDropdown
              menu="View"
              items={[
                { label: 'Zoom In', action: handleZoomIn, shortcut: '⌘+' },
                { label: 'Zoom Out', action: handleZoomOut, shortcut: '⌘-' },
                { label: 'Actual Size', action: handleActualSize, shortcut: '⌘0' },
              ]}
            />
          </div>

          {/* Window Menu */}
          <div className="relative">
            <span
              className="hover:text-white cursor-pointer"
              onClick={() => toggleMenu('Window')}
            >
              Window
            </span>
            <MenuDropdown
              menu="Window"
              items={[
                { label: 'Minimize All', action: onMinimizeAll || (() => {}) },
                { label: 'Close All', action: onCloseAll || (() => {}) },
                { label: 'Bring All to Front', action: onBringAllToFront || (() => {}) },
                { divider: true },
                { label: 'Close Window', action: onCloseWindow || (() => {}), shortcut: '⌘W' },
              ]}
            />
          </div>

          {/* Help Menu */}
          <div className="relative">
            <span
              className="hover:text-white cursor-pointer"
              onClick={() => toggleMenu('Help')}
            >
              Help
            </span>
            <MenuDropdown
              menu="Help"
              items={[
                { label: 'Keyboard Shortcuts', action: onShowKeyboardShortcuts || (() => {}) },
                { divider: true },
                { label: 'About Portfolio', action: handleAboutPortfolio },
              ]}
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Wifi size={14} className="opacity-70" />

        {/* Custom battery icon ~95% full */}
        <div className="flex items-center gap-1 opacity-80">
          <div className="flex items-center">
            {/* Battery body */}
            <div className="w-6 h-3 border border-white/70 rounded-[3px] overflow-hidden flex items-center">
              <div
                className="h-full bg-white"
                style={{ width: '95%' }}
              />
            </div>
            {/* Battery nub */}
            <div className="w-[3px] h-2 bg-white/70 rounded-r-sm ml-[2px]" />
          </div>
          <span className="text-[10px] leading-none">95%</span>
        </div>

        <span>{formatTime(time)}</span>
      </div>
    </div>
  )
}

export default MenuBar

