import { useState } from 'react'
import { Mail, Linkedin, Github, Copy, Check } from 'lucide-react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [copied, setCopied] = useState<string | null>(null)

  const contacts = [
    { 
      icon: Mail, 
      label: 'Email', 
      value: 'risheendrareddy.boddu@gmail.com', 
      type: 'email',
      url: 'mailto:risheendrareddy.boddu@gmail.com'
    },
    { 
      icon: Linkedin, 
      label: 'LinkedIn', 
      value: 'linkedin.com/in/risheendra-reddy-boddu-0a7b3a204', 
      type: 'linkedin',
      url: 'https://www.linkedin.com/in/risheendra-reddy-boddu-0a7b3a204'
    },
    { 
      icon: Github, 
      label: 'GitHub', 
      value: 'github.com/RisheendraReddy', 
      type: 'github',
      url: 'https://github.com/RisheendraReddy'
    },
  ]

  const handleCopy = async (value: string, type: string) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(type)
      setTimeout(() => setCopied(null), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div className="h-full flex flex-col justify-center">
      <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
      <div className="space-y-4">
        {contacts.map((contact, index) => {
          const Icon = contact.icon
          return (
            <motion.div
              key={contact.type}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-700/30 rounded-xl p-6 border border-white/10 hover:bg-gray-700/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <a 
                  href={contact.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 flex-1 hover:opacity-80 transition-opacity"
                >
                  <div className="w-12 h-12 rounded-lg bg-gray-600/50 flex items-center justify-center">
                    <Icon size={24} className="text-white" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">{contact.label}</div>
                    <div className="text-sm text-white/60">{contact.value}</div>
                  </div>
                </a>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    handleCopy(contact.value, contact.type)
                  }}
                  className="p-2 hover:bg-gray-600/50 rounded-lg transition-colors"
                >
                  {copied === contact.type ? (
                    <Check size={20} className="text-green-400" />
                  ) : (
                    <Copy size={20} className="text-white/60" />
                  )}
                </button>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

export default Contact









