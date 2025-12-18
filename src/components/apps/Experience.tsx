import { Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'

const experiences = [
  {
    company: 'ASU Center for Entrepreneurship & New Business Design',
    role: 'Full-Stack Software Engineer Intern',
    period: 'Sep 2024 – Apr 2025',
    description: 'Built and optimized a full-stack application used to support research-driven entrepreneurship initiatives.',
    impact: [
      'Developed modular React UI components and Flask APIs',
      'Optimized PostgreSQL queries, reducing latency by 25%',
      'Implemented CI/CD pipelines with GitHub Actions, reducing manual QA by 40%',
      'Collaborated closely with designers and researchers to improve onboarding UX',
    ],
  },
  {
    company: 'Veterinary Biological Research Institute',
    role: 'Software Engineer Intern',
    period: 'May 2024 – Aug 2024 · Remote',
    description: 'Worked on backend systems supporting large-scale biological research workflows.',
    impact: [
      'Built Java-based backend tools processing 10,000+ records daily',
      'Designed distributed SQL data pipelines with RESTful APIs',
      'Improved processing efficiency by 35% using optimized data structures',
      'Documented architecture and participated in Agile sprint planning',
    ],
  },
  {
    company: 'Arizona State University',
    role: 'Residential Assistant',
    period: 'Jan 2023 – May 2025',
    description: 'Leadership role focused on community building, usability, and student engagement.',
    impact: [
      'Supported 2,300+ students through structured initiatives',
      'Organized recurring events, increasing engagement by 30%',
      'Designed a student resource portal improving access to academic and wellness tools',
    ],
  },
]

const Experience = () => {
  return (
    <div className="h-full overflow-auto">
      <h2 className="text-2xl font-bold mb-6">Experience</h2>
      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-white/20" />
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-16"
            >
              <div className="absolute left-4 top-2 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-800" />
              <div className="bg-gray-700/30 rounded-xl p-6 border border-white/10">
                <div className="flex items-center gap-2 mb-2">
                  <Briefcase size={18} className="text-blue-400" />
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                </div>
                <div className="text-blue-300 mb-2">{exp.company}</div>
                <div className="text-sm text-white/60 mb-3">{exp.period}</div>
                <p className="text-white/80 mb-4 leading-relaxed">{exp.description}</p>
                {exp.impact && (
                  <div>
                    <h4 className="text-sm font-semibold text-white/90 mb-2">Impact:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-white/70 ml-2">
                      {exp.impact.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Experience









