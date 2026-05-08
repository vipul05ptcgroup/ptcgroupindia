import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PTC Group India - Idea. Profit. Future.',
  description:
    'PTC Group India is a diversified conglomerate spanning chemicals, logistics, organics, beverages, packaging, technology and creative services.',
  keywords: 'PTC Group, PTCGRAM, PTC Logistics, chemicals, logistics, organics, Mumbai, India',
  icons: {
    icon: '/Images/Favicon.png',
    shortcut: '/Images/Favicon.png',
    apple: '/Images/Favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
