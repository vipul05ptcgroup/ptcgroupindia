import Link from 'next/link'
import { ABOUT_CONTENT } from '@/lib/sitedata'
import { COMPANIES, GROUP_STATS } from '@/lib/companies'

const VALUES = [
  { title: 'Integrity', desc: 'Transparent and fair dealings with clients, suppliers, and partners.' },
  { title: 'Reliability', desc: 'Disciplined execution with dependable delivery commitments.' },
  { title: 'Quality First', desc: 'Strong quality controls across sourcing, packaging, and operations.' },
  { title: 'Growth Mindset', desc: 'Continuous learning, innovation, and category expansion.' },
]

const LEADERS = [
  { initials: 'VP', name: 'Virendrakumar P. Singh', role: 'Director & Founder', dept: 'Group Strategy' },
  { initials: 'PS', name: 'Prabha V. Singh', role: 'Director', dept: 'Operations & Governance' },
  { initials: 'RS', name: 'Rohit Shetty', role: 'Sales Manager', dept: 'Sales & Client Relations' },
]

export default function AboutSection() {
  const featured = COMPANIES.slice(0, 4)

  return (
    <div id="about" className="bg-white">
      <section className="relative overflow-hidden bg-navy-950 pt-24 sm:pt-32 pb-14 sm:pb-20 px-4 sm:px-6 md:px-10">
        <div className="absolute inset-0 bg-hero-grid bg-grid opacity-60 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.18em] sm:tracking-[0.25em] uppercase text-gold-500 mb-4">Who We Are</p>
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-end">
            <h1 className="font-serif font-black text-white text-4xl sm:text-5xl md:text-7xl leading-tight">
              The <span className="text-gold-500">PTC</span> Group Story
            </h1>
            <p className="text-sm sm:text-base text-gray-300 border-l-2 border-gold-500 pl-4 sm:pl-5 leading-relaxed">
              A diversified multi-sector group headquartered in Virar, Maharashtra, built on trust, product depth, and execution quality since 2009.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy-900 px-0">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {GROUP_STATS.map((s) => (
            <div key={s.label} className="border-r border-white/10 border-b md:border-b-0 last:border-r-0 p-5 sm:p-8">
              <p className="text-3xl sm:text-4xl font-black text-white">{s.value}</p>
              <p className="text-[10px] sm:text-[11px] tracking-[0.1em] sm:tracking-[0.15em] uppercase text-gray-400 mt-2">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-24 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 sm:gap-14">
          <div>
            <p className="text-[10px] font-bold tracking-[0.18em] sm:tracking-[0.25em] uppercase text-gold-500 mb-3">Our Story</p>
            <h2 className="font-serif font-black text-navy-700 text-3xl sm:text-4xl md:text-5xl leading-tight mb-5">
              Built on Trust, Driven by Purpose
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">{ABOUT_CONTENT.paragraph1}</p>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">{ABOUT_CONTENT.paragraph2}</p>
            <p className="border-l-4 border-gold-500 pl-4 sm:pl-5 py-2 font-serif text-xl sm:text-2xl text-navy-700">{ABOUT_CONTENT.quote}</p>
          </div>
          <div className="bg-navy-900 rounded-xl p-5 sm:p-7">
            <p className="text-xs tracking-[0.16em] sm:tracking-[0.2em] uppercase text-gold-400 mb-6">Group Timeline</p>
            <div className="space-y-4 sm:space-y-5">
              {[
                ['2009', 'Foundation', 'Started operations in chemical distribution.'],
                ['2013', 'Expansion', 'Broadened product and partner network.'],
                ['2017', 'Logistics', 'Strengthened dispatch and transport capabilities.'],
                ['2021', 'New Verticals', 'Expanded to medical, personal care, and packaging.'],
                ['Now', 'Diversified Group', 'Multiple focused brands with pan-India presence.'],
              ].map(([year, title, desc]) => (
                <div key={year} className="flex gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border-2 border-gold-500 text-gold-400 text-[10px] sm:text-xs font-bold flex items-center justify-center shrink-0">
                    {year}
                  </div>
                  <div>
                    <h4 className="text-white text-sm sm:text-base font-bold">{title}</h4>
                    <p className="text-xs sm:text-sm text-gray-300">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.18em] sm:tracking-[0.25em] uppercase text-gold-500 mb-3">Our Foundation</p>
          <h2 className="font-serif font-black text-navy-700 text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-10">Vision, Mission & Approach</h2>
          <div className="grid md:grid-cols-3 gap-[2px] bg-slate-200 border border-slate-200">
            {[
              ['01', 'Our Vision', 'To be a recognized multi-sector group known for trust, quality, and long-term value.'],
              ['02', 'Our Mission', 'To deliver reliable products and services that help clients move faster and grow better.'],
              ['03', 'Our Approach', 'Client-first collaboration, disciplined operations, and continuous improvement.'],
            ].map(([num, title, desc]) => (
              <div key={num} className="bg-white p-5 sm:p-8">
                <div className="w-10 h-1 bg-gold-500 mb-5" />
                <h3 className="text-xl sm:text-2xl font-extrabold text-navy-700 mb-3">{title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{desc}</p>
                <p className="text-4xl sm:text-5xl font-black text-navy-100 mt-6">{num}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-16 sm:py-24 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.18em] sm:tracking-[0.25em] uppercase text-gold-400 mb-3">What Drives Us</p>
          <h2 className="font-serif font-black text-white text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-10">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {VALUES.map((v) => (
              <div key={v.title} className="bg-white/5 border border-white/10 rounded-lg p-5 sm:p-6">
                <h4 className="text-white text-base sm:text-lg font-bold mb-2">{v.title}</h4>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 sm:py-24 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.18em] sm:tracking-[0.25em] uppercase text-gold-500 mb-3">The Team</p>
          <h2 className="font-serif font-black text-navy-700 text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-10">Leadership & Management</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {LEADERS.map((l) => (
              <article key={l.name} className="bg-white border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-navy-800 border-b-2 border-gold-500 p-5 sm:p-6 flex items-center gap-3 sm:gap-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-gold-500/60 bg-gold-500/20 text-gold-400 font-black flex items-center justify-center">
                    {l.initials}
                  </div>
                  <div>
                    <h3 className="text-white text-sm sm:text-base font-bold">{l.name}</h3>
                    <p className="text-[10px] sm:text-xs tracking-wide uppercase text-gray-300">{l.role}</p>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <span className="inline-block text-[10px] uppercase tracking-[0.12em] bg-gold-500/10 text-gold-700 px-3 py-1 rounded">
                    {l.dept}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.18em] sm:tracking-[0.25em] uppercase text-gold-500 mb-3">The Portfolio</p>
          <h2 className="font-serif font-black text-navy-700 text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-10">Our Group Companies</h2>
          <div className="grid md:grid-cols-2 gap-[2px] bg-slate-200 border border-slate-200">
            {featured.map((c, i) => (
              <a key={c.id} href={c.url} target="_blank" rel="noopener noreferrer" className="bg-white p-5 sm:p-8 hover:bg-slate-50">
                <p className="text-4xl sm:text-5xl font-black text-navy-100 mb-4">{String(i + 1).padStart(2, '0')}</p>
                <p className="text-[10px] sm:text-xs tracking-[0.12em] sm:tracking-[0.15em] uppercase text-gold-600 font-bold">{c.category}</p>
                <h3 className="text-xl sm:text-2xl font-extrabold text-navy-700 mt-1">{c.name}</h3>
                <p className="text-sm sm:text-base text-gray-600 mt-3 leading-relaxed">{c.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-12 sm:py-16 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-3">
          <p className="text-white text-lg sm:text-xl font-bold mr-3">Credentials & Recognition</p>
          {['Pan India Operations', '10+ Brands', 'Since 2009', 'Multi-Sector Portfolio'].map((tag) => (
            <span key={tag} className="bg-white/5 border border-white/15 text-gray-200 px-4 py-2 text-xs rounded">
              {tag}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-gold-500 py-14 sm:py-20 px-4 sm:px-6 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-5 sm:gap-6">
          <h2 className="font-serif font-black text-white text-2xl sm:text-3xl md:text-5xl max-w-3xl">
            Ready to work with a group that delivers on its promises?
          </h2>
          <Link
            href="/contact"
            className="w-full sm:w-auto text-center bg-white text-gold-600 text-xs font-bold tracking-widest uppercase px-8 py-3.5 sm:py-4 rounded"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
