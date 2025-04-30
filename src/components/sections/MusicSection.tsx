"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'

const tracks = [
  {
    title: 'Track 1',
    artist: 'Artist Name',
    spotifyUrl: 'https://open.spotify.com/track/...',
    soundcloudUrl: 'https://soundcloud.com/...',
  },
  {
    title: 'Track 2',
    artist: 'Artist Name',
    spotifyUrl: 'https://open.spotify.com/track/...',
    soundcloudUrl: 'https://soundcloud.com/...',
  },
]

export default function MusicSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Music Production</h2>
        <p className="text-xl text-muted-foreground">
          Creating unique soundscapes and melodies
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {tracks.map((track, index) => (
          <motion.div
            key={track.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-6">
              <h3 className="text-2xl font-bold mb-2">{track.title}</h3>
              <p className="text-muted-foreground mb-4">{track.artist}</p>
              <div className="flex gap-4">
                <a
                  href={track.spotifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Spotify
                </a>
                <a
                  href={track.soundcloudUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  SoundCloud
                </a>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className="mt-16"
      >
        <iframe
          src="https://open.spotify.com/embed/playlist/..."
          width="100%"
          height="380"
          frameBorder="0"
          allow="encrypted-media"
          className="rounded-lg"
        />
      </motion.div>
    </div>
  )
} 