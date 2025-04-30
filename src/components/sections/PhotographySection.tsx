"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Cross2Icon } from '@radix-ui/react-icons'

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    alt: 'Landscape Photography',
    category: 'Landscape',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    alt: 'Portrait Photography',
    category: 'Portrait',
    width: 800,
    height: 1200,
  },
  {
    src: 'https://images.unsplash.com/photo-1517732306149-e8f829eb588a',
    alt: 'Street Photography',
    category: 'Street',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    alt: 'Nature Photography',
    category: 'Nature',
    width: 1200,
    height: 800,
  },
  {
    src: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2',
    alt: 'Architecture Photography',
    category: 'Architecture',
    width: 800,
    height: 1200,
  },
  {
    src: 'https://images.unsplash.com/photo-1488085061387-422e29b40080',
    alt: 'Travel Photography',
    category: 'Travel',
    width: 1200,
    height: 800,
  },
]

export default function PhotographySection() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const categories = Array.from(new Set(photos.map(photo => photo.category)))
  const filteredPhotos = activeCategory
    ? photos.filter(photo => photo.category === activeCategory)
    : photos

  return (
    <section id="photography" className="py-20 relative overflow-hidden">
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
            Photography
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Capturing moments and telling stories through the lens
          </p>
        </motion.div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full transition-colors ${
              activeCategory === null
                ? 'bg-primary text-primary-foreground'
                : 'bg-primary/10 hover:bg-primary/20 text-foreground'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-primary/10 hover:bg-primary/20 text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry grid */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance] box-border mx-auto"
        >
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.src}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="break-inside-avoid mb-4"
            >
              <div
                className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => setSelectedPhoto(photo.src)}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 w-full">
                    <p className="text-white font-medium text-lg">{photo.category}</p>
                    <p className="text-white/80 text-sm">{photo.alt}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedPhoto && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedPhoto(null)}
            >
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-background/20 hover:bg-background/40 transition-colors"
                aria-label="Close lightbox"
              >
                <Cross2Icon className="w-6 h-6 text-white" />
              </button>
              <div className="relative max-w-5xl w-full aspect-[4/3]">
                <Image
                  src={selectedPhoto}
                  alt="Selected photo"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
} 