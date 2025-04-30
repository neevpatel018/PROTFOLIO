"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { PlayIcon, PauseIcon, SpeakerLoudIcon } from '@radix-ui/react-icons'
import { useState } from 'react'

const tracks = [
  {
    title: 'Neon Dreams',
    genre: 'Electronic',
    description: 'A synthwave journey through retro-futuristic soundscapes',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/YOUR_TRACK_ID',
    waveformData: Array.from({ length: 40 }, () => Math.random()),
  },
  {
    title: 'Urban Pulse',
    genre: 'Hip Hop',
    description: 'Modern beats with classic sampling techniques',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/YOUR_TRACK_ID',
    waveformData: Array.from({ length: 40 }, () => Math.random()),
  },
  {
    title: 'Ambient Flow',
    genre: 'Ambient',
    description: 'Atmospheric textures and evolving soundscapes',
    embedUrl: 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/YOUR_TRACK_ID',
    waveformData: Array.from({ length: 40 }, () => Math.random()),
  },
]

export default function MusicSection() {
  const [playingTrack, setPlayingTrack] = useState<string | null>(null)
  const [hoveredTrack, setHoveredTrack] = useState<string | null>(null)

  return (
    <section id="music" className="py-20 relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      {/* Animated neon light effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 font-orbitron">
            Music Production
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Crafting sonic experiences through electronic music production
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card
                className="p-6 backdrop-blur-sm bg-background/50 border-primary/10 overflow-hidden group"
                onMouseEnter={() => setHoveredTrack(track.title)}
                onMouseLeave={() => setHoveredTrack(null)}
              >
                <div className="flex items-start space-x-6">
                  <button
                    onClick={() => setPlayingTrack(playingTrack === track.title ? null : track.title)}
                    className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 hover:bg-primary/20 flex items-center justify-center transition-colors"
                  >
                    {playingTrack === track.title ? (
                      <PauseIcon className="w-6 h-6 text-primary" />
                    ) : (
                      <PlayIcon className="w-6 h-6 text-primary" />
                    )}
                  </button>
                  
                  <div className="flex-grow">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold font-orbitron">{track.title}</h3>
                        <p className="text-primary">{track.genre}</p>
                      </div>
                      <SpeakerLoudIcon className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    
                    <p className="text-muted-foreground mb-6">{track.description}</p>
                    
                    {/* Waveform visualization */}
                    <div className="h-12 flex items-center space-x-1">
                      {track.waveformData.map((height, i) => (
                        <motion.div
                          key={i}
                          className="w-1.5 bg-primary"
                          initial={{ height: '20%' }}
                          animate={{
                            height: hoveredTrack === track.title
                              ? `${height * 100}%`
                              : playingTrack === track.title
                              ? `${(Math.sin(Date.now() / 200 + i * 0.5) + 1) * 50}%`
                              : '20%',
                          }}
                          transition={{
                            duration: 0.5,
                            repeat: playingTrack === track.title ? Infinity : 0,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 