'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'
import { NAV_LINKS } from '@/lib/sitedata'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()
  const hasSolidBackground = pathname !== '/' || scrolled

  useEffect(() => {
    let ticking = false

    const onScroll = () => {
      if (ticking) return

      ticking = true
      window.requestAnimationFrame(() => {
        const nextScrolled = window.scrollY > 60
        setScrolled((current) => (current === nextScrolled ? current : nextScrolled))
        ticking = false
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10 ${
        hasSolidBackground
          ? 'bg-navy-950/95 backdrop-blur-md border-b border-gold-500/20 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 md:h-18">
        <Link href="/">
          <Logo size="sm" priority />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-gray-300 hover:text-gold-500 text-xs font-semibold tracking-widest uppercase transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/companies"
            className="bg-gold-500 hover:bg-gold-600 text-white text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded transition-colors duration-200"
          >
            Explore Group
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <div className={`w-5 h-0.5 bg-white mb-1 transition-all ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-5 h-0.5 bg-white mb-1 transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
          <div className={`w-5 h-0.5 bg-white transition-all ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-navy-950/98 backdrop-blur-md border-t border-gold-500/20 px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-gray-300 hover:text-gold-500 text-sm font-semibold tracking-widest uppercase"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/companies"
            className="bg-gold-500 text-white text-xs font-bold tracking-widest uppercase px-5 py-3 rounded text-center"
            onClick={() => setMobileOpen(false)}
          >
            Explore Group
          </Link>
        </div>
      )}
    </nav>
  )
}
