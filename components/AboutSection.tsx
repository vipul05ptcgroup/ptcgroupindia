const ABOUT_CARDS = [
  {
    icon: '🌐',
    title: 'Pan India Reach',
    desc: 'Distribution and logistics across all major Indian cities and states.',
  },
  {
    icon: '🏭',
    title: 'Manufacturing',
    desc: 'In-house production for chemicals, organics and packaging.',
  },
  {
    icon: '🤝',
    title: '50+ Partners',
    desc: 'Strong industry partnerships across sectors and geographies.',
  },
  {
    icon: '🔬',
    title: 'R&D Focus',
    desc: 'Dedicated innovation through The FutureX and internal labs.',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="bg-slate-50 py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <p className="text-[10px] font-bold tracking-[0.25em] text-gold-500 uppercase mb-3">
              About the Group
            </p>
            <h2 className="font-serif font-black text-navy-600 text-4xl md:text-5xl leading-tight mb-6">
              A Legacy Built on{' '}
              <span className="text-gold-500">Ideas, Profit &amp; Future</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              Since 2009, PTC Group India has grown from a single chemical trading company into a
              diverse conglomerate spanning 12+ business verticals — from specialty chemicals and
              logistics to organic products, beverages, and technology.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-8">
              Headquartered in Virar(E), Palghar, Mumbai, our group companies serve thousands of
              clients across India and export to global markets — driven by our founding philosophy:{' '}
              <em className="text-gold-600 font-medium not-italic">"Big or Small, We Trade All."</em>
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#companies"
                className="bg-navy-600 hover:bg-navy-700 text-white text-xs font-bold tracking-widest uppercase px-6 py-3 rounded transition-colors duration-200"
              >
                Our Companies
              </a>
              <a
                href="#contact"
                className="border-2 border-navy-600 text-navy-600 hover:bg-navy-600 hover:text-white text-xs font-bold tracking-widest uppercase px-6 py-3 rounded transition-all duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Right — 2×2 cards */}
          <div className="grid grid-cols-2 gap-4">
            {ABOUT_CARDS.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl p-5 shadow-sm border border-gold-500/10 hover:shadow-md hover:border-gold-500/25 transition-all duration-200"
              >
                <div className="text-3xl mb-3">{card.icon}</div>
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
