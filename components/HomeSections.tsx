import Link from 'next/link'
import { HOME_PAGE_CONTENT } from '@/lib/sitedata'

export default function HomeSections() {
  return (
    <>
      <section className="bg-slate-100 pt-20 pb-10 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] font-bold tracking-[0.25em] text-gold-500 uppercase mb-3">
            {HOME_PAGE_CONTENT.industries.eyebrow}
          </p>
          <h2 className="font-serif font-black text-navy-600 text-4xl md:text-5xl leading-tight">
            {HOME_PAGE_CONTENT.industries.title}
          </h2>
          <p className="text-gray-500 text-base max-w-3xl mt-4">
            {HOME_PAGE_CONTENT.industries.description}
          </p>
        </div>
      </section>

      {HOME_PAGE_CONTENT.industries.sections.map((item, index) => (
        <section
          key={item.title}
          className={`${index % 2 === 0 ? 'bg-white' : 'bg-slate-50'} py-14 px-6 md:px-10 border-t border-slate-200/70`}
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="font-serif font-black text-navy-700 text-3xl md:text-4xl leading-tight">
                {item.title}
              </h3>
            </div>
            <ul className="space-y-3">
              {item.points.map((point) => (
                <li key={point} className="bg-white border border-slate-200 rounded-lg px-5 py-4 text-gray-700">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </section>
      ))}

      <section className="bg-white py-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-[10px] font-bold tracking-[0.25em] text-gold-500 uppercase mb-3">
              {HOME_PAGE_CONTENT.trust.eyebrow}
            </p>
            <h2 className="font-serif font-black text-navy-600 text-4xl md:text-5xl leading-tight">
              {HOME_PAGE_CONTENT.trust.title}
            </h2>
          </div>
          <ul className="space-y-4">
            {HOME_PAGE_CONTENT.trust.points.map((point) => (
              <li key={point} className="bg-slate-50 border border-slate-200 rounded-lg px-5 py-4 text-gray-700">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#f5f3ee] py-20 px-6 md:px-10 border-y border-gold-500/20">
        <div className="max-w-5xl mx-auto text-center">
          <blockquote className="font-serif text-navy-700 text-3xl md:text-5xl leading-tight">
            &ldquo;{HOME_PAGE_CONTENT.quote.text}&rdquo;
          </blockquote>
          <p className="mt-7 text-gold-600 text-xs font-bold tracking-[0.22em] uppercase">
            {HOME_PAGE_CONTENT.quote.byline}
          </p>
        </div>
      </section>

      <section className="bg-navy-900 py-20 px-6 md:px-10">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-serif font-black text-white text-4xl md:text-5xl leading-tight">
            {HOME_PAGE_CONTENT.cta.title}
          </h2>
          <p className="text-gray-300 mt-4 text-base md:text-lg">{HOME_PAGE_CONTENT.cta.description}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href={HOME_PAGE_CONTENT.cta.primary.href}
              className="bg-gold-500 hover:bg-gold-600 text-white text-xs font-bold tracking-widest uppercase px-8 py-4 rounded transition-colors"
            >
              {HOME_PAGE_CONTENT.cta.primary.label}
            </Link>
            <Link
              href={HOME_PAGE_CONTENT.cta.secondary.href}
              className="border border-gold-500/50 hover:bg-gold-500/10 text-gold-500 text-xs font-bold tracking-widest uppercase px-8 py-4 rounded transition-colors"
            >
              {HOME_PAGE_CONTENT.cta.secondary.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
