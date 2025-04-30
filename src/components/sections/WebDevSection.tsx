"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

const projects = [
  {
    title: 'Multi-Passion Portfolio',
    description: 'Modern portfolio website showcasing multiple creative pursuits using Next.js and TailwindCSS',
    tech: ['Next.js', 'TailwindCSS', 'Framer Motion'],
    github: 'https://github.com/neevpatel018/PROTFOLIO',
    demo: 'https://neevpatel018.github.io/PROTFOLIO',
  },
  {
    title: 'Task Management App',
    description: 'Real-time collaborative task management application with team features',
    tech: ['React', 'Firebase', 'Material-UI'],
    github: 'https://github.com/neevpatel018/task-manager',
    demo: '#',
  },
  {
    title: 'Music Production Portfolio',
    description: 'Showcase of music production work with integrated audio player',
    tech: ['React', 'Web Audio API', 'Styled Components'],
    github: 'https://github.com/neevpatel018/music-portfolio',
    demo: '#',
  }
]

export default function WebDevSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Web Development</h2>
        <p className="text-xl text-muted-foreground">
          Building modern, responsive web applications with cutting-edge technologies
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    GitHub
                  </a>
                  {project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 