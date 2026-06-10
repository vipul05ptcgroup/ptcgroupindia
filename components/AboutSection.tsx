import Link from 'next/link'
import { COMPANIES } from '@/lib/companies'

const STATS = [
  { value: '15+', label: 'Years of Excellence' },
  { value: '10+', label: 'Companies & Brands' },
  { value: '1000+', label: 'Clients Served' },
  { value: '50+', label: 'Industry Partnerships' },
]

const JOURNEY = [
  ['2009', 'Foundation', 'The beginning of our entrepreneurial journey with the establishment of our first business operations.'],
  ['2013', 'Expansion', 'Strengthened our market presence through strategic partnerships, product diversification, and growing customer relationships.'],
  ['2017', 'Operational Growth', 'Enhanced logistics capabilities and supply chain infrastructure to support increasing business demand.'],
  ['2021', 'Diversification', 'Expanded into personal care, healthcare, packaging, technology, and consumer-focused businesses.'],
  ['Today', 'Multi-Sector Enterprise', 'A growing group of companies serving diverse industries across India and global markets.'],
]

const FOUNDATION = [
  {
    number: '01',
    title: 'Our Vision',
    description: 'To build a globally respected business group that creates lasting value across industries through innovation, trust, and sustainable growth.',
  },
  {
    number: '02',
    title: 'Our Mission',
    description: 'To deliver high-quality products, services, and solutions that empower businesses and improve everyday lives while fostering long-term partnerships and responsible growth.',
  },
  {
    number: '03',
    title: 'Our Philosophy',
    description: 'We believe successful businesses are built on trust, integrity, and continuous improvement. By combining entrepreneurial thinking with disciplined execution, we create opportunities for customers, partners, employees, and communities.',
  },
]

const VALUES = [
  { title: 'Integrity', desc: 'We conduct business with transparency, honesty, and accountability in every interaction.' },
  { title: 'Excellence', desc: 'We strive for the highest standards across our products, services, and operations.' },
  { title: 'Reliability', desc: 'We honor our commitments and consistently deliver value to our customers and partners.' },
  { title: 'Innovation', desc: 'We embrace new ideas, technologies, and opportunities that drive progress.' },
  { title: 'Customer First', desc: 'Our customers remain at the center of every decision we make.' },
  { title: 'Growth Mindset', desc: 'We continuously evolve, improve, and expand into new opportunities and industries.' },
]

const LEADERS = [
  {
    initials: 'VP',
    name: 'Virendrakumar P. Singh',
    role: 'Founder & Chairman',
    description: "Providing strategic direction and leading the group's long-term vision for growth and diversification.",
  },
  {
    initials: 'PS',
    name: 'Prabha V. Singh',
    role: 'Director',
    description: 'Overseeing governance, operations, and business development initiatives across the group.',
  },
  {
    initials: 'RS',
    name: 'Rohit Shetty',
    role: 'Sales & Business Development',
    description: 'Driving customer relationships, strategic partnerships, and market expansion across business verticals.',
  },
]

const COMPANY_COPY: Record<string, { subtitle: string; description: string }> = {
  ptcgram: {
    subtitle: 'Specialty Chemicals & Industrial Solutions',
    description: 'Leading distributors and manufacturers of specialty chemicals, solvents, acids, and industrial solutions serving clients across India and international markets.',
  },
  'ptc-logistics': {
    subtitle: 'Logistics & Supply Chain Solutions',
    description: 'Integrated logistics and mobility services providing reliable transportation and supply chain support for businesses nationwide.',
  },
  ilika: {
    subtitle: 'Personal Care & Beauty Innovation',
    description: 'Premium skincare, haircare, wellness, and beauty technology products designed for modern consumers.',
  },
  'the-futurex': {
    subtitle: 'Technology & Smart Wearables',
    description: 'Innovative consumer technology brand specializing in smart wearables and connected lifestyle products.',
  },
  kedos: {
    subtitle: 'Baby Care & Family Essentials',
    description: 'Trusted products focused on infant care, hygiene, and everyday family needs.',
  },
  'devang-organics': {
    subtitle: 'Organic Ingredients & Wellness',
    description: 'Supplying high-quality organic ingredients and products for wellness, food, and consumer applications.',
  },
  'the-himalayan-brewery': {
    subtitle: 'Premium Beverage Solutions',
    description: 'Crafting distinctive beverage experiences inspired by quality, purity, and innovation.',
  },
  'the-himalayan-store': {
    subtitle: 'Retail & Lifestyle Commerce',
    description: 'Curated retail platform offering wellness, lifestyle, and consumer products.',
  },
  'zaura-care': {
    subtitle: 'Healthcare & Medical Products',
    description: 'Providing medical consumables, healthcare products, and diagnostic solutions to healthcare providers and distributors.',
  },
  'ss-packaging': {
    subtitle: 'Packaging & Manufacturing Solutions',
    description: 'Specialists in bottles, jars, containers, and packaging solutions for beauty, healthcare, FMCG, and retail industries.',
  },
}

const ADVANTAGES = [
  { title: 'Diversified Industry Presence', desc: 'A strong portfolio spanning multiple sectors and customer segments.' },
  { title: 'Entrepreneurial Culture', desc: 'Built by innovators who recognize opportunities and turn ideas into successful ventures.' },
  { title: 'Long-Term Partnerships', desc: 'Trusted relationships with clients, suppliers, and industry partners built over more than a decade.' },
  { title: 'Sustainable Growth', desc: 'Focused on creating enduring value through responsible expansion and operational excellence.' },
]

export default function AboutSection() {
  return (
    <div id="about" className="bg-white">
      <section className="relative overflow-hidden bg-navy-950 px-4 pb-14 pt-28 sm:px-6 sm:pb-20 sm:pt-32 md:px-10">
        <div className="absolute inset-0 bg-hero-grid bg-grid opacity-60 pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-gold-500 sm:tracking-[0.25em]">Who We Are</p>
          <div className="grid items-end gap-7 lg:grid-cols-2">
            <div>
              <h1 className="font-serif text-[clamp(2.25rem,12vw,3rem)] font-black leading-[1.08] text-white sm:text-5xl md:text-7xl">
                The <span className="text-gold-500">PTC</span> Group Story
              </h1>
              <p className="mt-5 text-base font-bold text-white sm:text-xl">One Group. Many Ventures. One Vision.</p>
              <p className="mt-2 font-serif text-base italic text-gold-400 sm:text-lg">From Everyday Essentials to Extraordinary Possibilities.</p>
            </div>
            <p className="border-l-2 border-gold-500 pl-4 text-sm leading-relaxed text-gray-300 sm:pl-5 sm:text-base">
              PTC Group India is a diversified conglomerate headquartered in Virar, Maharashtra, with a growing portfolio spanning chemicals, logistics, packaging, healthcare, personal care, technology, organics, beverages, retail, and creative services.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy-900">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="min-w-0 border-b border-r border-white/10 p-4 even:border-r-0 min-[380px]:p-5 sm:p-8 md:border-b-0 md:even:border-r md:last:border-r-0">
              <p className="text-3xl font-black text-white sm:text-4xl">{stat.value}</p>
              <p className="mt-2 break-words text-[9px] uppercase tracking-[0.06em] text-gray-400 min-[380px]:tracking-[0.1em] sm:text-[11px] sm:tracking-[0.15em]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 sm:gap-14 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-gold-500 sm:tracking-[0.25em]">Our Story</p>
            <h2 className="mb-5 font-serif text-[1.75rem] font-black leading-tight text-navy-700 sm:text-4xl md:text-5xl">
              Building Businesses. Creating Value. Shaping the Future.
            </h2>
            <p className="mb-4 text-sm leading-relaxed text-gray-600 sm:text-base">
              Founded in 2009, the group has evolved from a single enterprise into a multi-sector organization driven by innovation, entrepreneurship, and a commitment to creating long-term value. Today, our businesses serve customers across India and international markets through trusted products, reliable services, and industry expertise.
            </p>
            <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
              Our success is built on a simple belief: sustainable growth comes from strong relationships, operational excellence, and the ability to adapt to changing markets while remaining true to our values.
            </p>
          </div>
          <div className="rounded-xl bg-navy-900 p-5 sm:p-7">
            <p className="mb-6 text-xs uppercase tracking-[0.16em] text-gold-400 sm:tracking-[0.2em]">Our Journey</p>
            <div className="space-y-5">
              {JOURNEY.map(([year, title, description]) => (
                <div key={year} className="flex gap-3 sm:gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-gold-500 text-[10px] font-bold text-gold-400">{year === 'Today' ? 'Now' : year}</div>
                  <div className="min-w-0">
                    <h3 className="font-bold text-white">{title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-gray-300 sm:text-sm">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-gold-500 sm:tracking-[0.25em]">Our Foundation</p>
          <h2 className="mb-8 font-serif text-[1.75rem] font-black leading-tight text-navy-700 sm:mb-10 sm:text-4xl md:text-5xl">Our Vision, Mission & Philosophy</h2>
          <div className="grid gap-[2px] border border-slate-200 bg-slate-200 md:grid-cols-3">
            {FOUNDATION.map((item) => (
              <article key={item.number} className="bg-white p-5 sm:p-8">
                <div className="mb-5 h-1 w-10 bg-gold-500" />
                <h3 className="mb-3 text-xl font-extrabold text-navy-700 sm:text-2xl">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600 sm:text-base">{item.description}</p>
                <p className="mt-6 text-4xl font-black text-navy-100 sm:text-5xl">{item.number}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-900 px-4 py-16 sm:px-6 sm:py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-gold-400 sm:tracking-[0.25em]">What Drives Us</p>
          <h2 className="mb-8 font-serif text-3xl font-black text-white sm:mb-10 sm:text-4xl md:text-5xl">Our Core Values</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map((value) => (
              <article key={value.title} className="rounded-lg border border-white/10 bg-white/5 p-5 sm:p-6">
                <h3 className="mb-2 text-base font-bold text-white sm:text-lg">{value.title}</h3>
                <p className="text-xs leading-relaxed text-gray-300 sm:text-sm">{value.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16 sm:px-6 sm:py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-gold-500 sm:tracking-[0.25em]">Group Leadership</p>
          <h2 className="mb-8 font-serif text-3xl font-black text-navy-700 sm:mb-10 sm:text-4xl md:text-5xl">Leadership & Management</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {LEADERS.map((leader) => (
              <article key={leader.name} className="overflow-hidden rounded-lg border border-slate-200 bg-white">
                <div className="flex items-center gap-3 border-b-2 border-gold-500 bg-navy-800 p-5 sm:gap-4 sm:p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-gold-500/60 bg-gold-500/20 font-black text-gold-400 sm:h-14 sm:w-14">{leader.initials}</div>
                  <div className="min-w-0">
                    <h3 className="break-words text-sm font-bold text-white sm:text-base">{leader.name}</h3>
                    <p className="text-[10px] uppercase tracking-wide text-gray-300 sm:text-xs">{leader.role}</p>
                  </div>
                </div>
                <p className="p-5 text-sm leading-relaxed text-gray-600 sm:p-6">{leader.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6 sm:py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-gold-500 sm:tracking-[0.25em]">Our Companies & Brands</p>
          <h2 className="mb-8 font-serif text-[1.75rem] font-black leading-tight text-navy-700 sm:mb-10 sm:text-4xl md:text-5xl">A Diversified Business Ecosystem</h2>
          <div className="grid gap-[2px] border border-slate-200 bg-slate-200 md:grid-cols-2">
            {COMPANIES.map((company, index) => {
              const copy = COMPANY_COPY[company.id]
              return (
                <Link key={company.id} href={`/companies/${company.id}`} className="bg-white p-5 transition-colors hover:bg-slate-50 sm:p-8">
                  <p className="mb-4 text-4xl font-black text-navy-100 sm:text-5xl">{String(index + 1).padStart(2, '0')}</p>
                  <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-gold-600 sm:text-xs sm:tracking-[0.15em]">{copy?.subtitle || company.category}</p>
                  <h3 className="mt-1 break-words text-xl font-extrabold text-navy-700 sm:text-2xl">{company.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">{copy?.description || company.desc}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-navy-900 px-4 py-16 sm:px-6 sm:py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-gold-400 sm:tracking-[0.25em]">Why PTC Group India</p>
          <h2 className="mb-8 font-serif text-3xl font-black text-white sm:mb-10 sm:text-4xl md:text-5xl">Built for Enduring Value</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ADVANTAGES.map((item) => (
              <article key={item.title} className="rounded-lg border border-white/10 bg-white/5 p-5 sm:p-6">
                <div className="mb-4 h-0.5 w-8 bg-gold-500" />
                <h3 className="font-bold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-300">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gold-500 px-4 py-14 sm:px-6 sm:py-20 md:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-6 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">Looking Ahead</p>
            <h2 className="font-serif text-3xl font-black text-white sm:text-4xl md:text-5xl">Building Tomorrow, Together</h2>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-white/90 sm:text-base">
              As we continue to expand our portfolio and strengthen our businesses, our commitment remains unchanged: creating value, fostering innovation, and building enterprises that make a meaningful impact.
            </p>
            <p className="mt-4 max-w-3xl font-semibold text-white">
              PTC Group India is more than a collection of companies. It is an ecosystem of businesses united by a shared vision for growth, excellence, and the future.
            </p>
          </div>
          <div className="rounded-lg border border-white/30 bg-white/10 p-5 text-center text-white backdrop-blur-sm sm:p-7">
            <p className="font-serif text-xl font-black sm:text-2xl">One Group.</p>
            <p className="font-serif text-xl font-black sm:text-2xl">Many Ventures.</p>
            <p className="font-serif text-xl font-black sm:text-2xl">One Vision.</p>
            <Link href="/contact" className="mt-5 inline-flex min-h-11 items-center justify-center rounded bg-white px-7 text-xs font-bold uppercase tracking-widest text-gold-600">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
