"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const photos = [
  {
    src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    alt: 'Landscape Photography',
    category: 'Landscape',
  },
  {
    src: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2',
    alt: 'Portrait Photography',
    category: 'Portrait',
  },
  {
    src: 'https://images.unsplash.com/photo-1517732306149-e8f829eb588a',
    alt: 'Street Photography',
    category: 'Street',
  },
  {
    src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    alt: 'Nature Photography',
    category: 'Nature',
  },
  {
    src: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2',
    alt: 'Architecture Photography',
    category: 'Architecture',
  },
  {
    src: 'https://images.unsplash.com/photo-1488085061387-422e29b40080',
    alt: 'Travel Photography',
    category: 'Travel',
  },
]

export default function PhotographySection() {
  const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Photography</h2>
        <p className="text-xl text-muted-foreground">
          Capturing moments and telling stories through the lens
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative aspect-square cursor-pointer group"
            onClick={() => setSelectedPhoto(photo.src)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              unoptimized
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-end">
              <div className="p-4 w-full">
                <p className="text-white font-medium text-lg">{photo.category}</p>
                <p className="text-white/80 text-sm">{photo.alt}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-5xl w-full aspect-[4/3]">
            <Image
              src={selectedPhoto}
              alt="Selected photo"
              fill
              className="object-contain"
              unoptimized
            />
          </div>
          <button
            className="absolute top-4 right-4 text-white text-xl hover:text-gray-300"
            onClick={() => setSelectedPhoto(null)}
          >
            ✕
          </button>
        </motion.div>
      )}
    </div>
  )
} 