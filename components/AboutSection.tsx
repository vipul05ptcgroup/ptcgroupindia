import Link from 'next/link'
import { ABOUT_CONTENT } from '@/lib/sitedata'

export default function AboutSection() {
  return (
    <section id="about" className="bg-slate-50 py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[10px] font-bold tracking-[0.25em] text-gold-500 uppercase mb-3">
              {ABOUT_CONTENT.eyebrow}
            </p>
            <h2 className="font-serif font-black text-navy-600 text-4xl md:text-5xl leading-tight mb-6">
              {ABOUT_CONTENT.headingStart}{' '}
              <span className="text-gold-500">{ABOUT_CONTENT.headingAccent}</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">{ABOUT_CONTENT.paragraph1}</p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              {ABOUT_CONTENT.paragraph2}{' '}
              <em className="text-gold-600 font-medium not-italic">{ABOUT_CONTENT.quote}</em>
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={ABOUT_CONTENT.ctas[0].href}
                className="bg-navy-600 hover:bg-navy-700 text-white text-xs font-bold tracking-widest uppercase px-6 py-3 rounded transition-colors duration-200"
              >
                {ABOUT_CONTENT.ctas[0].label}
              </Link>
              <Link
                href={ABOUT_CONTENT.ctas[1].href}
                className="border-2 border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white text-xs font-bold tracking-widest uppercase px-6 py-3 rounded transition-all duration-200"
              >
                {ABOUT_CONTENT.ctas[1].label}
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {ABOUT_CONTENT.cards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl p-5 shadow-sm border border-gold-500/10 hover:shadow-md hover:border-gold-500/25 transition-all duration-200"
              >
                <div className="text-sm font-bold text-gold-600 mb-3">{card.icon}</div>
                <h3 className="font-bold text-navy-600 text-sm mb-1.5">{card.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
