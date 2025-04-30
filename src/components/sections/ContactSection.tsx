"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { GitHubLogoIcon, LinkedInLogoIcon, TwitterLogoIcon, InstagramLogoIcon } from '@radix-ui/react-icons'

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/neevpatel018',
    icon: GitHubLogoIcon,
  },
  {
    name: 'LinkedIn',
    href: '#',
    icon: LinkedInLogoIcon,
  },
  {
    name: 'Twitter',
    href: '#',
    icon: TwitterLogoIcon,
  },
  {
    name: 'Instagram',
    href: '#',
    icon: InstagramLogoIcon,
  },
]

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formState)
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
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
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? Let's talk!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 backdrop-blur-sm bg-background/50 border-primary/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-2 rounded-md bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="Your name"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-2 rounded-md bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                    placeholder="your@email.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-md bg-background border border-input focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                    placeholder="Your message..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <Card className="p-6 backdrop-blur-sm bg-background/50 border-primary/10">
              <h3 className="text-xl font-bold mb-4 font-orbitron">Connect with Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors p-2 rounded-lg hover:bg-accent/10"
                    >
                      <Icon className="w-5 h-5" />
                      <span>{link.name}</span>
                    </a>
                  )
                })}
              </div>
            </Card>

            <Card className="p-6 backdrop-blur-sm bg-background/50 border-primary/10">
              <h3 className="text-xl font-bold mb-4 font-orbitron">Location</h3>
              <p className="text-muted-foreground">
                Based in Toronto, Canada
                <br />
                Available for remote work worldwide
              </p>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 