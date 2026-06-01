import Link from 'next/link'
import { ABOUT_CONTENT, HOME_PAGE_CONTENT } from '@/lib/sitedata'
import { COMPANIES } from '@/lib/companies'

export default function HomeSections() {
  const portfolio = COMPANIES

  return (
    <>
      <section className="bg-gold-500 py-2.5 sm:py-3 overflow-hidden">
        <div className="flex whitespace-nowrap animate-[marquee_28s_linear_infinite]">
          {[...HOME_PAGE_CONTENT.marquee, ...HOME_PAGE_CONTENT.marquee].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="px-6 sm:px-9 text-[10px] sm:text-xs font-bold tracking-[0.16em] sm:tracking-[0.2em] uppercase text-white border-r border-white/35"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-4 sm:px-6 md:px-10 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <div className="relative">
            <div className="rounded-xl bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 p-5 sm:p-8">
              <div className="grid grid-cols-4 gap-3">
                {COMPANIES.slice(0, 8).map((c) => (
                  <div
                    key={c.id}
                    className="aspect-square rounded-md bg-white/10 border border-white/15 flex items-center justify-center text-gold-400 font-bold text-sm sm:text-base"
                  >
                    {c.icon}
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-3 sm:-bottom-5 -right-3 sm:-right-5 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gold-500 text-white flex flex-col items-center justify-center shadow-xl">
              <p className="text-xl sm:text-2xl font-black leading-none">2009</p>
              <p className="text-[9px] tracking-wider uppercase">Founded</p>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-gold-500 mb-3">Our Story</p>
            <h2 className="font-serif font-black text-navy-700 text-3xl sm:text-4xl md:text-5xl leading-tight mb-5">
              A Legacy of <span className="text-gold-500">Quality</span> and Innovation
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">{ABOUT_CONTENT.paragraph1}</p>
            <div className="space-y-3">
              {HOME_PAGE_CONTENT.trust.points.map((point) => (
                <div key={point} className="flex gap-3">
                  <span className="w-2 h-2 rounded-full bg-gold-500 mt-2" />
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
            <Link
              href="/companies"
              className="inline-block mt-6 sm:mt-7 bg-gold-500 hover:bg-gold-600 text-white text-xs font-bold tracking-widest uppercase px-6 sm:px-7 py-3 rounded"
            >
              Discover Our Companies
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 sm:px-6 md:px-10 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
            <div>
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-gold-500 mb-3">Our Companies</p>
              <h2 className="font-serif font-black text-navy-700 text-3xl sm:text-4xl md:text-5xl">Group Portfolio</h2>
            </div>
            <p className="text-gray-500 max-w-sm">Focused entities with one commitment to reliability and growth.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-slate-200 border border-slate-200">
            {portfolio.map((c, i) => (
              <a
                key={c.id}
                href={c.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-5 sm:p-8 hover:bg-slate-50 transition-colors"
              >
                <p className="text-[11px] font-bold tracking-[0.18em] text-gray-400 mb-4">{String(i + 1).padStart(2, '0')}</p>
                <p className="text-gold-600 text-xs font-bold tracking-wider uppercase mb-2">{c.category}</p>
                <h3 className="text-xl sm:text-2xl font-extrabold text-navy-700 mb-3">{c.name}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-900 px-4 sm:px-6 md:px-10 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-end gap-6 mb-12">
            <div>
              <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-gold-400 mb-3">
                {HOME_PAGE_CONTENT.capabilities.eyebrow}
              </p>
              <h2 className="font-serif font-black text-white text-3xl sm:text-4xl md:text-5xl">{HOME_PAGE_CONTENT.capabilities.title}</h2>
            </div>
            <p className="text-gray-300 max-w-sm">{HOME_PAGE_CONTENT.capabilities.description}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-white/10">
            {HOME_PAGE_CONTENT.capabilities.items.map((item, i) => (
              <article key={item.title} className="bg-navy-900/90 p-5 sm:p-7 border border-white/10">
                <p className="text-4xl font-black text-white/10 mb-4">{String(i + 1).padStart(2, '0')}</p>
                <div className="w-8 h-0.5 bg-gold-500 mb-4" />
                <h3 className="text-white text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-300 leading-relaxed">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 sm:px-6 md:px-10 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-gold-500 mb-3">
            {HOME_PAGE_CONTENT.sectors.eyebrow}
          </p>
          <h2 className="font-serif font-black text-navy-700 text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-10">{HOME_PAGE_CONTENT.sectors.title}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {HOME_PAGE_CONTENT.sectors.items.map((sector) => (
              <div
                key={sector}
                className="rounded-md border border-slate-200 bg-slate-50 px-4 py-7 text-center text-navy-700 hover:bg-navy-700 hover:text-white transition-colors"
              >
                <p className="text-xs sm:text-sm font-semibold">{sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 sm:px-6 md:px-10 py-16 sm:py-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 sm:gap-16">
          <div>
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-gold-500 mb-3">Why PTC Group</p>
            <h2 className="font-serif font-black text-navy-700 text-3xl sm:text-4xl md:text-5xl mb-8 sm:mb-10">What Sets Us Apart</h2>
            <div className="space-y-6">
              {HOME_PAGE_CONTENT.trust.points.map((p) => (
                <div key={p} className="flex gap-4">
                  <div className="w-11 h-11 rounded-md border border-gold-500/30 bg-gold-500/10 text-gold-600 flex items-center justify-center font-bold">
                    +
                  </div>
                  <p className="text-gray-700 leading-relaxed">{p}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-navy-900 rounded-xl p-5 sm:p-8">
            <p className="text-xs tracking-[0.2em] uppercase text-gold-400 mb-8">Group Journey</p>
            <div className="space-y-6">
              {HOME_PAGE_CONTENT.journey.map((step) => (
                <div key={step.year} className="flex gap-4">
                  <div className="w-9 h-9 rounded-full border-2 border-gold-500 text-gold-400 text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {step.year === 'Today' ? 'Now' : step.year.slice(-2)}
                  </div>
                  <div>
                    <h3 className="text-white font-bold">{step.title}</h3>
                    <p className="text-sm text-gray-300 mt-1">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gold-500 px-4 sm:px-6 md:px-10 py-14 sm:py-20">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-5 sm:gap-6">
          <h2 className="font-serif font-black text-white text-2xl sm:text-3xl md:text-5xl max-w-3xl">{HOME_PAGE_CONTENT.cta.title}</h2>
          <Link
            href={HOME_PAGE_CONTENT.cta.primary.href}
            className="w-full sm:w-auto text-center bg-white text-gold-600 text-xs font-bold tracking-widest uppercase px-7 sm:px-9 py-3.5 sm:py-4 rounded"
          >
            {HOME_PAGE_CONTENT.cta.primary.label}
          </Link>
        </div>
      </section>

      <section className="bg-slate-100 px-4 sm:px-6 md:px-10 py-8 sm:py-10">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-3">
          <p className="text-xs tracking-[0.18em] uppercase text-gray-500 mr-2">Recognized For</p>
          {HOME_PAGE_CONTENT.recognitions.map((item) => (
            <span key={item} className="bg-white border border-slate-200 rounded px-4 py-2 text-xs font-semibold text-navy-700">
              {item}
            </span>
          ))}
        </div>
      </section>
    </>
  )
}
