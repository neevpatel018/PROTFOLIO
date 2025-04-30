"use client"

import { motion } from 'framer-motion'
import { Typewriter } from 'react-simple-typewriter'

const passions = [
  'Web Development',
  'Music Production',
  'Photography',
  'Creative Writing',
]

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="text-primary">
              <Typewriter
                words={passions}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
            Exploring creativity through multiple passions
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#web-dev"
              className="inline-block px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Explore My Work
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 