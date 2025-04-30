"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { FigmaLogoIcon, ArrowLeftIcon, ArrowRightIcon } from '@radix-ui/react-icons'

const designs = [
  {
    title: 'Mobile Banking App',
    description: 'Modern banking application with focus on user experience and accessibility',
    images: [
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1920&q=80',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1920&q=80',
      'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=1920&q=80',
    ],
    figmaUrl: '#',
    tags: ['Mobile App', 'FinTech', 'UI Design']
  },
  {
    title: 'E-commerce Dashboard',
    description: 'Comprehensive admin dashboard for managing online store operations',
    images: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1920&q=80',
      'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?auto=format&fit=crop&w=1920&q=80',
      'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1920&q=80',
    ],
    figmaUrl: '#',
    tags: ['Dashboard', 'Analytics', 'UX Research']
  },
]

export default function UIUXSection() {
  const [activeSlides, setActiveSlides] = useState<{ [key: string]: number }>(
    Object.fromEntries(designs.map(design => [design.title, 0]))
  )

  const nextSlide = (title: string) => {
    setActiveSlides(prev => ({
      ...prev,
      [title]: (prev[title] + 1) % designs.find(d => d.title === title)!.images.length
    }))
  }

  const prevSlide = (title: string) => {
    setActiveSlides(prev => ({
      ...prev,
      [title]: (prev[title] - 1 + designs.find(d => d.title === title)!.images.length) % designs.find(d => d.title === title)!.images.length
    }))
  }

  return (
    <section id="ui-ux" className="py-20 relative overflow-hidden bg-gradient-to-br from-background via-accent/5 to-background">
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
            UI/UX Design
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Creating intuitive and beautiful user experiences through thoughtful design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {designs.map((design, index) => (
            <motion.div
              key={design.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden bg-background/50 backdrop-blur-sm border-primary/10">
                <div className="relative aspect-video">
                  {design.images.map((image, imageIndex) => (
                    <motion.div
                      key={image}
                      initial={false}
                      animate={{
                        opacity: activeSlides[design.title] === imageIndex ? 1 : 0,
                        scale: activeSlides[design.title] === imageIndex ? 1 : 0.8,
                      }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={image}
                        alt={`${design.title} preview ${imageIndex + 1}`}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </motion.div>
                  ))}
                  <div className="absolute inset-x-0 bottom-0 flex justify-between p-4">
                    <button
                      onClick={() => prevSlide(design.title)}
                      className="p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
                      aria-label="Previous slide"
                    >
                      <ArrowLeftIcon className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => nextSlide(design.title)}
                      className="p-2 rounded-full bg-background/80 hover:bg-background transition-colors"
                      aria-label="Next slide"
                    >
                      <ArrowRightIcon className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 font-orbitron">{design.title}</h3>
                  <p className="text-muted-foreground mb-4">{design.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {design.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a
                    href={design.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors"
                  >
                    <FigmaLogoIcon className="w-5 h-5" />
                    <span>View in Figma</span>
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 