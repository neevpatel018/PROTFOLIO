"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Card } from '@/components/ui/card'

const photos = [
  {
    src: '/photos/photo1.jpg',
    alt: 'Photo 1',
    category: 'Landscape',
  },
  {
    src: '/photos/photo2.jpg',
    alt: 'Photo 2',
    category: 'Portrait',
  },
  {
    src: '/photos/photo3.jpg',
    alt: 'Photo 3',
    category: 'Street',
  },
  {
    src: '/photos/photo4.jpg',
    alt: 'Photo 4',
    category: 'Nature',
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
          Capturing moments through my lens
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.src}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative aspect-square cursor-pointer"
            onClick={() => setSelectedPhoto(photo.src)}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover rounded-lg hover:opacity-90 transition-opacity"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
              <p className="text-white font-medium">{photo.category}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <div className="relative max-w-4xl w-full aspect-video">
            <Image
              src={selectedPhoto}
              alt="Selected photo"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  )
} 