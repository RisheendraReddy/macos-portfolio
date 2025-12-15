import React from 'react'
import { Folder, FileText, Code, Mail } from 'lucide-react'
import { WindowState } from '../../types'
import About from './About'
import Projects from './Projects'
import Experience from './Experience'
import Contact from './Contact'

interface FinderProps {
  onOpenApp?: (window: Omit<WindowState, 'zIndex'>) => void
}

const Finder = ({ onOpenApp }: FinderProps) => {
  const handleOpenApp = (e: React.MouseEvent, appId: string, appName: string, component: React.ComponentType, width: number, height: number) => {
    e.stopPropagation() // Prevent the click from bubbling up to the window
    if (!onOpenApp) return

    onOpenApp({
      id: appId,
      title: appName,
      app: appId,
      x: window.innerWidth / 2 - width / 2,
      y: 100,
      width: width,
      height: height,
      isMinimized: false,
      isMaximized: false,
      content: React.createElement(component),
    })
  }

  return (
    <div className="h-full flex flex-col">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Welcome</h1>
        <p className="text-white/70">Software Engineer & Developer</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4 flex-1">
        <div 
          onClick={(e) => handleOpenApp(e, 'about', 'About', About, 700, 500)}
          className="bg-gray-700/30 rounded-xl p-6 border border-white/10 hover:bg-gray-700/50 transition-colors cursor-pointer active:scale-95"
        >
          <Folder className="mb-3 text-blue-400" size={32} />
          <h3 className="font-semibold mb-1">About</h3>
          <p className="text-sm text-white/60">Learn more about me</p>
        </div>
        
        <div 
          onClick={(e) => handleOpenApp(e, 'projects', 'Projects', Projects, 900, 700)}
          className="bg-gray-700/30 rounded-xl p-6 border border-white/10 hover:bg-gray-700/50 transition-colors cursor-pointer active:scale-95"
        >
          <Code className="mb-3 text-green-400" size={32} />
          <h3 className="font-semibold mb-1">Projects</h3>
          <p className="text-sm text-white/60">View my work</p>
        </div>
        
        <div 
          onClick={(e) => handleOpenApp(e, 'experience', 'Experience', Experience, 800, 600)}
          className="bg-gray-700/30 rounded-xl p-6 border border-white/10 hover:bg-gray-700/50 transition-colors cursor-pointer active:scale-95"
        >
          <FileText className="mb-3 text-purple-400" size={32} />
          <h3 className="font-semibold mb-1">Experience</h3>
          <p className="text-sm text-white/60">My career journey</p>
        </div>
        
        <div 
          onClick={(e) => handleOpenApp(e, 'contact', 'Contact', Contact, 600, 500)}
          className="bg-gray-700/30 rounded-xl p-6 border border-white/10 hover:bg-gray-700/50 transition-colors cursor-pointer active:scale-95"
        >
          <Mail className="mb-3 text-yellow-400" size={32} />
          <h3 className="font-semibold mb-1">Contact</h3>
          <p className="text-sm text-white/60">Get in touch</p>
        </div>
      </div>
    </div>
  )
}

export default Finder

