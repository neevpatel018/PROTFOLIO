'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter } from 'lucide-react'
import Link from 'next/link'

const socialLinks = [
  {
    name: 'Email',
    icon: Mail,
    href: 'mailto:your.email@example.com',
    label: 'your.email@example.com'
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    href: 'https://linkedin.com/in/yourusername',
    label: 'linkedin.com/in/yourusername'
  },
  {
    name: 'GitHub',
    icon: Github,
    href: 'https://github.com/yourusername',
    label: 'github.com/yourusername'
  },
  {
    name: 'Twitter',
    icon: Twitter,
    href: 'https://twitter.com/yourusername',
    label: '@yourusername'
  }
]

export default function Contact() {
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
              Get in Touch
            </span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Let's connect and discuss your next project
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid gap-8 mb-12"
          >
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group"
              >
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg border hover:border-primary transition-colors"
                >
                  <div className="p-2 rounded-full bg-accent/10 group-hover:bg-primary/10 transition-colors">
                    <link.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium mb-1">{link.name}</h3>
                    <p className="text-sm text-muted-foreground">{link.label}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-muted-foreground">
              Looking forward to hearing from you!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 