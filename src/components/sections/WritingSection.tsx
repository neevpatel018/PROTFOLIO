"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { ArrowRightIcon } from '@radix-ui/react-icons'

const articles = [
  {
    title: 'The Future of Web Development',
    excerpt: 'Exploring emerging trends in web development, from AI-powered tools to WebAssembly and edge computing.',
    date: 'March 15, 2024',
    readTime: '5 min read',
    category: 'Technology',
    href: '#'
  },
  {
    title: 'Finding Inspiration in Urban Photography',
    excerpt: 'A personal journey through city streets, capturing moments that tell stories of urban life and culture.',
    date: 'March 10, 2024',
    readTime: '4 min read',
    category: 'Photography',
    href: '#'
  },
  {
    title: 'The Art of Sound Design',
    excerpt: 'Diving deep into the world of sound design, from field recording to synthesis and spatial audio.',
    date: 'March 5, 2024',
    readTime: '6 min read',
    category: 'Music',
    href: '#'
  }
]

export default function WritingSection() {
  return (
    <section id="writing" className="py-20 relative overflow-hidden">
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
            Writing
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts, insights, and stories about technology, art, and creativity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 hover:bg-accent/5 transition-colors border-primary/10">
                <article className="grid md:grid-cols-5 gap-6">
                  <div className="md:col-span-4">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                      <span>•</span>
                      <span className="text-primary">{article.category}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 font-serif">{article.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">{article.excerpt}</p>
                    
                    <a
                      href={article.href}
                      className="inline-flex items-center text-primary hover:text-primary/80 transition-colors group"
                    >
                      Read more
                      <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                </article>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 