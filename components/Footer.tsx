import Logo from './Logo'
import { COMPANIES } from '@/lib/companies'

export default function Footer() {
  const visibleCompanies = COMPANIES.filter((c) => !c.internal).slice(0, 8)

  return (
    <footer className="bg-navy-950 border-t border-gold-500/15 px-6 md:px-10 py-10">
      <div className="max-w-7xl mx-auto">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 pb-8 border-b border-white/5">
          <Logo size="sm" />
          <div className="flex flex-wrap gap-4">
            {visibleCompanies.map((c) => (
              <a
                key={c.id}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gold-500 text-xs transition-colors duration-200"
              >
                {c.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-600">
          <p>© {new Date().getFullYear()} PTC Group India. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#home" className="hover:text-gold-500 transition-colors">Home</a>
            <a href="#about" className="hover:text-gold-500 transition-colors">About</a>
            <a href="#companies" className="hover:text-gold-500 transition-colors">Companies</a>
            <a href="#contact" className="hover:text-gold-500 transition-colors">Contact</a>
          </div>
          <p className="text-gray-700">Virar(E), Palghar, Mumbai · India</p>
        </div>
      </div>
    </footer>
  )
}
