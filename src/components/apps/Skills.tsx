import { motion } from 'framer-motion'

const skillCategories = [
  {
    category: 'Languages',
    skills: ['Java', 'Python', 'JavaScript', 'TypeScript', 'C++', 'Go', 'C', 'C#', 'SQL', 'Swift'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS', 'JavaFX', 'FXML'],
  },
  {
    category: 'Backend & APIs',
    skills: ['Flask', 'Django', 'Spring Boot', 'Node.js', 'REST APIs', 'JSON'],
  },
  {
    category: 'Cloud & DevOps',
    skills: ['AWS (CDK, Lambda, S3, DynamoDB, API Gateway)', 'GCP', 'Docker', 'CI/CD', 'GitHub Actions'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'DynamoDB', 'NoSQL'],
  },
  {
    category: 'Tooling',
    skills: ['Git', 'Linux', 'Figma', 'Jest', 'JUnit', 'Playwright', 'Agile / Scrum'],
  },
]

const Skills = () => {
  const categoryColors = [
    'bg-blue-500/20 text-blue-300',
    'bg-green-500/20 text-green-300',
    'bg-purple-500/20 text-purple-300',
    'bg-orange-500/20 text-orange-300',
    'bg-pink-500/20 text-pink-300',
    'bg-yellow-500/20 text-yellow-300',
  ]

  return (
    <div className="h-full overflow-auto">
      <h2 className="text-2xl font-bold mb-6">Skills</h2>
      <div className="space-y-8">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: catIndex * 0.1 }}
          >
            <h3 className="text-xl font-semibold mb-4">{category.category}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: catIndex * 0.1 + skillIndex * 0.03 }}
                  className={`px-3 py-1 rounded-full text-sm ${categoryColors[catIndex % categoryColors.length]}`}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Skills





