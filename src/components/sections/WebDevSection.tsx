"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { GitHubLogoIcon, GlobeIcon } from '@radix-ui/react-icons'

const projects = [
  {
    title: 'Multi-Passion Portfolio',
    description: 'Modern portfolio website showcasing multiple creative pursuits using Next.js and TailwindCSS',
    tech: ['Next.js', 'TypeScript', 'TailwindCSS', 'Framer Motion'],
    github: 'https://github.com/neevpatel018/PROTFOLIO',
    demo: 'https://neevpatel018.github.io/PROTFOLIO',
    gradient: 'from-blue-500/20 to-purple-500/20'
  },
  {
    title: 'AI Music Generator',
    description: 'Web application that generates unique music using machine learning algorithms',
    tech: ['React', 'Python', 'TensorFlow', 'Web Audio API'],
    github: '#',
    demo: '#',
    gradient: 'from-green-500/20 to-blue-500/20'
  },
  {
    title: 'Photography Portfolio',
    description: 'Dynamic photography portfolio with masonry layout and lightbox features',
    tech: ['Next.js', 'TailwindCSS', 'Cloudinary', 'TypeScript'],
    github: '#',
    demo: '#',
    gradient: 'from-purple-500/20 to-pink-500/20'
  }
]

export default function WebDevSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id="web-dev" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-orbitron">
            Web Development
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building modern, responsive web applications with cutting-edge technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={cardVariants}>
              <Card className="p-6 h-full backdrop-blur-sm bg-background/50 hover:bg-background/80 transition-colors border-primary/10 group">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity rounded-lg -z-10`} />
                
                <h3 className="text-2xl font-bold mb-3 font-orbitron">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="space-y-4 mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
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
                      className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                    >
                      <GitHubLogoIcon className="w-5 h-5" />
                      <span>GitHub</span>
                    </a>
                    {project.demo !== '#' && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                      >
                        <GlobeIcon className="w-5 h-5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 