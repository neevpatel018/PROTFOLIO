"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { format } from 'date-fns'

const articles = [
  {
    title: 'The Art of Storytelling',
    excerpt: 'Exploring the power of narrative in modern writing...',
    date: '2024-03-15',
    readTime: '5 min read',
    category: 'Creative Writing',
  },
  {
    title: 'Digital Poetry',
    excerpt: 'How technology is shaping contemporary poetry...',
    date: '2024-03-10',
    readTime: '4 min read',
    category: 'Poetry',
  },
]

export default function WritingSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Writing</h2>
        <p className="text-xl text-muted-foreground">
          Thoughts, stories, and creative expressions
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {articles.map((article, index) => (
          <motion.div
            key={article.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <span>{format(new Date(article.date), 'MMM d, yyyy')}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{article.title}</h3>
              <p className="text-muted-foreground mb-4">{article.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 bg-accent rounded-full text-sm">
                  {article.category}
                </span>
                <button className="text-primary hover:underline">
                  Read more →
                </button>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
} 