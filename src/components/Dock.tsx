import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { WindowState } from '../types'
import Finder from './apps/Finder'
import About from './apps/About'
import Projects from './apps/Projects'
import Experience from './apps/Experience'
import Skills from './apps/Skills'
import TerminalApp from './apps/Terminal'
import Resume from './apps/Resume'
import Contact from './apps/Contact'
import {
  FinderIcon,
  AboutIcon,
  ProjectsIcon,
  ExperienceIcon,
  SkillsIcon,
  TerminalIcon,
  ResumeIcon,
  ContactIcon,
} from './icons/MacOSIcons'

interface DockProps {
  onOpenApp: (window: Omit<WindowState, 'zIndex'>) => void
  windows: WindowState[]
}

const apps = [
  { id: 'finder', name: 'Finder', icon: FinderIcon, component: Finder, defaultSize: { width: 800, height: 600 } },
  { id: 'about', name: 'About', icon: AboutIcon, component: About, defaultSize: { width: 700, height: 500 } },
  { id: 'projects', name: 'Projects', icon: ProjectsIcon, component: Projects, defaultSize: { width: 900, height: 700 } },
  { id: 'experience', name: 'Experience', icon: ExperienceIcon, component: Experience, defaultSize: { width: 800, height: 600 } },
  { id: 'skills', name: 'Skills', icon: SkillsIcon, component: Skills, defaultSize: { width: 750, height: 600 } },
  { id: 'terminal', name: 'Terminal', icon: TerminalIcon, component: TerminalApp, defaultSize: { width: 700, height: 500 } },
  { id: 'resume', name: 'Resume', icon: ResumeIcon, component: Resume, defaultSize: { width: 800, height: 600 } },
  { id: 'contact', name: 'Contact', icon: ContactIcon, component: Contact, defaultSize: { width: 600, height: 500 } },
]

const Dock = ({ onOpenApp, windows }: DockProps) => {
  const [hoveredApp, setHoveredApp] = useState<string | null>(null)

  const handleAppClick = (app: typeof apps[0]) => {
    const existingWindow = windows.find((w) => w.id === app.id)
    
    if (existingWindow) {
      if (existingWindow.isMinimized) {
        onOpenApp({
          ...existingWindow,
          isMinimized: false,
          // Update content for Finder and Terminal to ensure they have onOpenApp prop
          content: (app.id === 'finder' || app.id === 'terminal')
            ? <app.component onOpenApp={onOpenApp} />
            : existingWindow.content,
        })
      }
    } else {
      onOpenApp({
        id: app.id,
        title: app.name,
        app: app.id,
        x: window.innerWidth / 2 - (app.defaultSize?.width || 600) / 2,
        y: 100,
        width: app.defaultSize?.width || 600,
        height: app.defaultSize?.height || 500,
        isMinimized: false,
        isMaximized: false,
        content: (app.id === 'finder' || app.id === 'terminal')
          ? <app.component onOpenApp={onOpenApp} />
          : <app.component />,
      })
    }
  }

  const isAppOpen = (appId: string) => {
    return windows.some((w) => w.id === appId && !w.isMinimized)
  }

  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-40">
      <motion.div
        className="flex items-end gap-2 px-4 py-3 bg-black/40 backdrop-blur-2xl rounded-2xl border border-white/10"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {apps.map((app) => {
          const Icon = app.icon
          const open = isAppOpen(app.id)
          const isHovered = hoveredApp === app.id
          
          return (
            <motion.div
              key={app.id}
              className="relative flex flex-col items-center cursor-pointer"
              onClick={() => handleAppClick(app)}
              onMouseEnter={() => setHoveredApp(app.id)}
              onMouseLeave={() => setHoveredApp(null)}
              whileHover={{ scale: 1.2, y: -10 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                <Icon size={56} />
              </div>
              {open && (
                <div className="absolute -bottom-1 w-1 h-1 bg-white rounded-full" />
              )}
              
              {/* macOS-style tooltip label */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    className="absolute -top-12 pointer-events-none"
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.2, ease: 'easeOut' }}
                  >
                    <div className="px-3 py-1.5 bg-black/80 backdrop-blur-md rounded-md border border-white/10 shadow-lg">
                      <span className="text-white text-xs font-medium whitespace-nowrap">
                        {app.name}
                      </span>
                    </div>
                    {/* Tooltip arrow */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-1">
                      <div className="w-2 h-2 bg-black/80 backdrop-blur-md border-r border-b border-white/10 transform rotate-45" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </motion.div>
    </div>
  )
}

export default Dock

