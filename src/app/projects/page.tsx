'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Link from 'next/link'

const projects = [
  {
    title: 'Project 1',
    description: 'Description of project 1 - Replace with your actual project details',
    tech: ['Next.js', 'TypeScript', 'Tailwind'],
    github: 'https://github.com/yourusername/project1',
    demo: 'https://project1-demo.com',
  },
  {
    title: 'Project 2',
    description: 'Description of project 2 - Replace with your actual project details',
    tech: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/project2',
    demo: 'https://project2-demo.com',
  },
  // Add more projects as needed
]

export default function Projects() {
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
              My Projects
            </span>
          </h1>
          <p className="text-muted-foreground text-lg">
            A showcase of my technical projects and creative work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-lg p-6 border hover:border-primary transition-colors"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-2 py-1 rounded-full bg-accent text-accent-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors"
                >
                  <Github size={16} />
                  Code
                </Link>
                <Link
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm hover:text-primary transition-colors"
                >
                  <ExternalLink size={16} />
                  Demo
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 