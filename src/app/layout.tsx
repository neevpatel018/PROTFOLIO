import type { Metadata } from 'next'
import { Inter, Orbitron, Poppins, Playfair_Display } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Navbar from '@/components/Navbar'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-inter'
})

const orbitron = Orbitron({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-orbitron'
})

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-poppins'
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'Multi-Passion Portfolio',
  description: 'A showcase of creative passions and professional work',
  metadataBase: new URL('https://neevpatel018.github.io'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self' https://images.unsplash.com; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; font-src 'self' https://fonts.gstatic.com;" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="preload"
          href="/PROTFOLIO/grid.svg"
          as="image"
          type="image/svg+xml"
        />
        <link
          rel="preload"
          href="/PROTFOLIO/fonts/inter.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/PROTFOLIO/fonts/orbitron.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/PROTFOLIO/fonts/poppins.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/PROTFOLIO/fonts/playfair.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.variable} ${orbitron.variable} ${poppins.variable} ${playfair.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen bg-background">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
} 