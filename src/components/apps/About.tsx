import { useState, useEffect } from 'react'

const About = () => {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'Hello! I\'m a passionate software engineer with a love for building beautiful and functional applications. I enjoy working with modern technologies and creating user experiences that are both intuitive and delightful.'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 50)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="h-full space-y-6">
      <div>
        <h2 className="text-2xl font-bold mb-4">About Me</h2>
        <div className="bg-gray-900/50 rounded-lg p-4 font-mono text-sm">
          <div className="text-green-400">$ cat about.txt</div>
          <div className="mt-2 text-white/80">{displayedText}<span className="animate-pulse">|</span></div>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-3">Education</h3>
        <div className="space-y-2">
          <div className="bg-gray-700/30 rounded-lg p-4">
            <div className="font-semibold">Bachelor of Science in Computer Science</div>
            <div className="text-sm text-white/60">Arizona State University • 2021-2025</div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-semibold mb-3">Interests</h3>
        <div className="flex flex-wrap gap-2">
          {[
            'Full-Stack Development',
            'Developer Tooling & Platforms',
            'Cloud & Serverless Architectures',
            'System Design & Scalability',
            'Applied Machine Learning',
            'AI Tooling & Integrations',
            'Performance Optimization',
            'UI / UX Engineering'
          ].map((interest) => (
            <span key={interest} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
              {interest}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About


