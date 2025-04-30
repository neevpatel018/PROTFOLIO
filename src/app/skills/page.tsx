'use client'

import { motion } from 'framer-motion'

const skills = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5/CSS3', 'JavaScript']
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'Python', 'MongoDB', 'PostgreSQL', 'RESTful APIs']
  },
  {
    category: 'Tools & Others',
    items: ['Git', 'Docker', 'AWS', 'CI/CD', 'Agile', 'Testing']
  },
  {
    category: 'Design',
    items: ['Figma', 'Adobe XD', 'UI/UX', 'Responsive Design', 'Wireframing', 'Prototyping']
  }
]

export default function Skills() {
  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg p-6 border hover:border-primary transition-colors"
            >
              <h3 className="text-xl font-semibold mb-4">{skillGroup.category}</h3>
              <div className="grid grid-cols-2 gap-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    className="flex items-center gap-2"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-foreground/80">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Level Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Always learning and exploring new technologies to stay at the cutting edge
          </p>
        </motion.div>
      </div>
    </div>
  )
} 