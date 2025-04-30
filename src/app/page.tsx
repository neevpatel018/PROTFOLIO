import Hero from '@/components/Hero'
import WebDevSection from '@/components/sections/WebDevSection'
import MusicSection from '@/components/sections/MusicSection'
import PhotographySection from '@/components/sections/PhotographySection'
import WritingSection from '@/components/sections/WritingSection'
import ContactSection from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <section id="web-dev" className="min-h-screen">
        <WebDevSection />
      </section>
      <section id="music" className="min-h-screen">
        <MusicSection />
      </section>
      <section id="photography" className="min-h-screen">
        <PhotographySection />
      </section>
      <section id="writing" className="min-h-screen">
        <WritingSection />
      </section>
      <section id="contact" className="min-h-screen">
        <ContactSection />
      </section>
    </div>
  )
} 