import Hero from '@/components/Hero'
import WebDevSection from '@/components/sections/WebDevSection'
import UIUXSection from '@/components/sections/UIUXSection'
import MusicSection from '@/components/sections/MusicSection'
import PhotographySection from '@/components/sections/PhotographySection'
import WritingSection from '@/components/sections/WritingSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <WebDevSection />
      <UIUXSection />
      <MusicSection />
      <PhotographySection />
      <WritingSection />
      <ContactSection />
    </div>
  )
} 