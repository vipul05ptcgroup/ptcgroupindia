'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from './Logo'
import { NAV_LINKS } from '@/lib/sitedata'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <nav className="border-b border-gold-500/20 bg-navy-950 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 sm:h-24">
        <Link
          href="/"
          className="flex items-center rounded-xl border border-white/10 bg-navy-800/30 px-2 py-1 backdrop-blur-sm"
          aria-label="PTC Group India home"
        >
          <Logo size="sm" compact priority />
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
          type="button"
          className="md:hidden inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-white"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          <span className="sr-only">Toggle navigation</span>
          <span aria-hidden="true">
            <span className={`block w-5 h-0.5 bg-white mb-1 transition-all ${mobileOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white mb-1 transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-5 h-0.5 bg-white transition-all ${mobileOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden max-h-[calc(100svh-5rem)] overflow-y-auto border-t border-gold-500/20 bg-navy-950 py-4 flex flex-col gap-1"
        >
          <Link
            href="/contact"
            className="mb-2 min-h-11 flex items-center justify-center rounded bg-gold-500 px-5 py-3 text-center text-xs font-bold uppercase tracking-widest text-white"
            onClick={() => setMobileOpen(false)}
          >
            Contact Us
          </Link>
          {NAV_LINKS.filter((link) => link.href !== '/contact').map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="min-h-11 flex items-center rounded px-3 text-gray-300 hover:text-gold-500 hover:bg-white/5 text-sm font-semibold tracking-widest uppercase"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/companies"
            className="mt-2 min-h-11 flex items-center justify-center bg-gold-500 text-white text-xs font-bold tracking-widest uppercase px-5 py-3 rounded text-center"
            onClick={() => setMobileOpen(false)}
          >
            Explore Group
          </Link>
        </div>
      )}
    </nav>
  )
}
