import Link from 'next/link'
import Logo from './Logo'
import { FOOTER_CONTENT } from '@/lib/sitedata'

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-gold-500/30 px-4 sm:px-6 md:px-10 pt-8 sm:pt-12 lg:pt-14 pb-5 sm:pb-7">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-9 lg:gap-12">
          <div>
            <div className="inline-flex rounded-xl bg-white p-2">
              <Logo size="lg" />
            </div>
            <p className="mt-3 sm:mt-4 text-[9px] sm:text-[11px] tracking-[0.18em] sm:tracking-[0.3em] uppercase text-gold-500 break-words">
              {FOOTER_CONTENT.tagline}
            </p>
            <p className="mt-2 text-sm font-semibold leading-5 text-white max-w-sm">
              {FOOTER_CONTENT.vision}
            </p>
            <p className="mt-2 sm:mt-3 text-sm sm:text-base leading-6 sm:leading-7 text-gray-400 max-w-sm">
              {FOOTER_CONTENT.about}
            </p>
            <Link
              href={FOOTER_CONTENT.cta.href}
              className="inline-flex min-h-10 items-center gap-2 mt-4 sm:mt-5 px-4 py-2 rounded border border-gold-500/35 text-gold-500 text-[10px] sm:text-xs tracking-[0.14em] font-semibold uppercase hover:bg-gold-500/10 transition-colors"
            >
              <span>O</span>
              <span>{FOOTER_CONTENT.cta.label}</span>
            </Link>
          </div>

          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold uppercase tracking-[0.08em] text-white">
              Company
            </h3>
            <div className="mt-2 sm:mt-3 h-px w-full bg-white/15" />
            <ul className="mt-3 sm:mt-4 flex flex-wrap gap-x-5 gap-y-2 sm:block sm:space-y-3 text-sm sm:text-base text-gray-400">
              {FOOTER_CONTENT.companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:text-gold-500 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg md:text-xl font-semibold uppercase tracking-[0.08em] text-white">
              Contact Us
            </h3>
            <div className="mt-2 sm:mt-3 h-px w-full bg-white/15" />
            <ul className="mt-3 sm:mt-4 space-y-2.5 sm:space-y-4 text-sm sm:text-base leading-5 sm:leading-6 text-gray-400">
              <li className="flex min-w-0 gap-3">
                <span className="text-gray-500">AD</span>
                <span className="min-w-0 break-words">{FOOTER_CONTENT.contact.address}</span>
              </li>
              <li className="flex min-w-0 gap-3">
                <span className="text-gray-500">EM</span>
                <a
                  href={`mailto:${FOOTER_CONTENT.contact.email}`}
                  className="min-w-0 break-all hover:text-gold-500 transition-colors"
                >
                  {FOOTER_CONTENT.contact.email}
                </a>
              </li>
              <li className="flex min-w-0 gap-3">
                <span className="text-gray-500">PH</span>
                <a
                  href={`tel:${FOOTER_CONTENT.contact.phone.replace(/[^+\d]/g, '')}`}
                  className="hover:text-gold-500 transition-colors"
                >
                  {FOOTER_CONTENT.contact.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-7 sm:mt-10 pt-4 sm:pt-5 border-t border-white/20 flex flex-col md:flex-row gap-2 sm:gap-3 items-start md:items-center justify-between">
          <p className="text-xs sm:text-sm text-gray-500">
            Copyright 2026 {FOOTER_CONTENT.legal.company} {FOOTER_CONTENT.legal.rights}
          </p>
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.1em] sm:tracking-[0.16em] text-gray-600 break-words">{FOOTER_CONTENT.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
