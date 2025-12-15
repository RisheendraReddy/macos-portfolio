import React, { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import { WindowState } from '../../types'
import About from './About'
import Projects from './Projects'
import Experience from './Experience'
import Skills from './Skills'
import Contact from './Contact'
import Resume from './Resume'
import Finder from './Finder'

interface TerminalProps {
  onOpenApp?: (window: Omit<WindowState, 'zIndex'>) => void
}

const Terminal = ({ onOpenApp }: TerminalProps) => {
  const [history, setHistory] = useState<Array<{ type: 'input' | 'output'; text: string }>>([
    { type: 'output', text: 'Welcome to Terminal. Type "help" for available commands.' },
  ])
  const [input, setInput] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const endRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const handleOpenApp = useCallback((appId: string, appName: string, component: React.ComponentType<any>, width: number, height: number) => {
    if (!onOpenApp) {
      return
    }

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
  }, [onOpenApp])

  const commands: Record<string, () => string> = useMemo(() => ({
    help: () => 'Available commands:\n  help - Show this help message\n  about - Open About app\n  projects - Open Projects app\n  experience - Open Experience app\n  skills - Open Skills app\n  contact - Open Contact app\n  resume - Open Resume app\n  finder - Open Finder app\n  clear - Clear terminal',
    about: () => {
      handleOpenApp('about', 'About', About, 700, 500)
      return 'Opening About app...'
    },
    projects: () => {
      handleOpenApp('projects', 'Projects', Projects, 900, 700)
      return 'Opening Projects app...'
    },
    experience: () => {
      handleOpenApp('experience', 'Experience', Experience, 800, 600)
      return 'Opening Experience app...'
    },
    skills: () => {
      handleOpenApp('skills', 'Skills', Skills, 750, 600)
      return 'Opening Skills app...'
    },
    contact: () => {
      handleOpenApp('contact', 'Contact', Contact, 600, 500)
      return 'Opening Contact app...'
    },
    resume: () => {
      handleOpenApp('resume', 'Resume', Resume, 800, 600)
      return 'Opening Resume app...'
    },
    finder: () => {
      handleOpenApp('finder', 'Finder', Finder, 800, 600)
      return 'Opening Finder app...'
    },
  }), [handleOpenApp])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    setHistory((prev) => [...prev, { type: 'input', text: `$ ${input}` }])

    const command = input.trim().toLowerCase()
    
    // Handle clear command separately
    if (command === 'clear') {
      setHistory([])
      setInput('')
      return
    }

    const output = commands[command]?.() || `Command not found: ${command}. Type "help" for available commands.`

    if (output) {
      setHistory((prev) => [...prev, { type: 'output', text: output }])
    }

    setInput('')
  }

  return (
    <div className="h-full flex flex-col bg-gray-900 rounded-lg overflow-hidden">
      <div className="flex-1 overflow-auto p-4 font-mono text-sm">
        {history.map((item, index) => (
          <div key={index} className="mb-2">
            {item.type === 'input' ? (
              <div className="text-green-400">{item.text}</div>
            ) : (
              <div className="text-white/80 whitespace-pre-line">{item.text}</div>
            )}
          </div>
        ))}
        <div ref={endRef} />
      </div>
      <form onSubmit={handleSubmit} className="border-t border-white/10 p-4">
        <div className="flex items-center gap-2">
          <span className="text-green-400">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent outline-none text-white/80"
            autoFocus
          />
        </div>
      </form>
    </div>
  )
}

export default Terminal

