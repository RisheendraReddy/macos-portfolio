import { ExternalLink, Github } from 'lucide-react'
import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    name: 'AI Chat History Manager',
    summary: 'A full-stack platform that centralizes AI conversations across multiple models, enabling persistent context, intelligent fallback, and advanced conversation management.',
    highlights: [
      'Centralized chat platform supporting OpenAI, Anthropic, and Google Gemini',
      'Context-aware conversation history with semantic search',
      'Secure REST APIs with JWT authentication',
      'Relational data modeling using SQLAlchemy',
    ],
    engineering: [
      'Multi-model orchestration with dynamic fallback logic',
      'Backend built for extensibility and testability',
      'Glassmorphism UI with theming, animations, and modern UX patterns',
    ],
    tech: ['React', 'Tailwind', 'Flask', 'SQLAlchemy', 'PostgreSQL', 'REST APIs', 'JWT'],
    github: 'https://github.com/RisheendraReddy/methodica',
    demo: null,
  },
  {
    id: 2,
    name: 'S&P 500 Prediction Application',
    summary: 'A production-ready machine learning system for financial market prediction, combining automated training pipelines with real-time monitoring.',
    highlights: [
      'End-to-end ML pipeline using LightGBM and XGBoost',
      'FastAPI backend for batch and real-time predictions',
      'Dockerized deployment for scalable environments',
      'Interactive React UI for model insights and predictions',
    ],
    engineering: [
      'Automated model training workflows',
      'Clean API contracts for ML services',
      'CI/CD pipelines and production-oriented system design',
    ],
    tech: ['Python', 'FastAPI', 'React', 'Docker', 'CI/CD', 'ML Libraries'],
    github: 'https://github.com/RisheendraReddy/sp500-prediction-fullstack',
    demo: null,
  },
  {
    id: 3,
    name: 'Automated File Processing & Data Management System',
    summary: 'A cloud-native system simulating low-code UI authoring for structured data upload, processing, and management.',
    highlights: [
      'React + TypeScript frontend for JSON data ingestion',
      'Serverless backend using AWS CDK',
      'Scalable processing with Lambda, S3, and DynamoDB',
      'Component-level testing using Jest',
    ],
    engineering: [
      'Serverless architecture design',
      'Infrastructure as code with AWS CDK',
      'Maintainable, testable UI components',
    ],
    tech: ['React', 'TypeScript', 'AWS CDK', 'Lambda', 'S3', 'DynamoDB', 'Jest'],
    github: 'https://github.com/RisheendraReddy/Automated-File-Processing-and-Data-Management-System',
    demo: null,
  },
]

const Projects = () => {
  return (
    <div className="h-full overflow-auto">
      <h2 className="text-2xl font-bold mb-6">Projects</h2>
      <div className="grid grid-cols-1 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-gray-700/30 rounded-xl p-6 border border-white/10 hover:bg-gray-700/50 transition-colors"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-xl font-semibold">{project.name}</h3>
              <div className="flex gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-gray-600/50 rounded-lg transition-colors"
                  >
                    <Github size={18} />
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-gray-600/50 rounded-lg transition-colors"
                  >
                    <ExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
            <p className="text-white/80 mb-4 leading-relaxed">{project.summary}</p>
            
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-white/90 mb-2">What I Built:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-white/70 ml-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="text-sm font-semibold text-white/90 mb-2">Engineering Focus:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm text-white/70 ml-2">
                {project.engineering.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="mt-4 pt-4 border-t border-white/10">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Projects





