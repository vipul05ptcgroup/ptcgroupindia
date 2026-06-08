import Link from 'next/link'
import Logo from './Logo'
import { FOOTER_CONTENT } from '@/lib/sitedata'

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-gold-500/30 px-6 md:px-10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>
            <Logo size="sm" />
            <p className="mt-6 text-[11px] tracking-[0.35em] uppercase text-gold-500">
              {FOOTER_CONTENT.tagline}
            </p>
            <p className="mt-6 text-base leading-8 text-gray-400 max-w-xs">
              {FOOTER_CONTENT.about}
            </p>
            <Link
              href={FOOTER_CONTENT.cta.href}
              className="inline-flex items-center gap-2 mt-7 px-5 py-3 rounded border border-gold-500/35 text-gold-500 text-xs tracking-[0.16em] font-semibold uppercase hover:bg-gold-500/10 transition-colors"
            >
              <span>O</span>
              <span>{FOOTER_CONTENT.cta.label}</span>
            </Link>
          </div>

          <div>
            <h3 className="text-xl md:text-2xl font-semibold uppercase tracking-[0.08em] text-white">
              Company
            </h3>
            <div className="mt-4 h-px w-full bg-white/15" />
            <ul className="mt-6 space-y-4 text-gray-400">
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
            <h3 className="text-xl md:text-2xl font-semibold uppercase tracking-[0.08em] text-white">
              Contact Us
            </h3>
            <div className="mt-4 h-px w-full bg-white/15" />
            <ul className="mt-6 space-y-6 text-gray-400">
              <li className="flex gap-3">
                <span className="text-gray-500">AD</span>
                <span>{FOOTER_CONTENT.contact.address}</span>
              </li>
              <li className="flex gap-3">
                <span className="text-gray-500">EM</span>
                <a
                  href={`mailto:${FOOTER_CONTENT.contact.email}`}
                  className="hover:text-gold-500 transition-colors"
                >
                  {FOOTER_CONTENT.contact.email}
                </a>
              </li>
              <li className="flex gap-3">
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

        <div className="mt-14 pt-6 border-t border-white/20 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <p className="text-sm text-gray-500">
            Copyright {new Date().getFullYear()} {FOOTER_CONTENT.legal.company} {FOOTER_CONTENT.legal.rights}
          </p>
          <p className="text-sm uppercase tracking-[0.2em] text-gray-600">{FOOTER_CONTENT.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
