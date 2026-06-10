import Image from 'next/image'
import Link from 'next/link'
import { GROUP_STATS } from '@/lib/companies'
import { HERO_CONTENT } from '@/lib/sitedata'

function StatBox({ value, label, delay }: { value: string; label: string; delay: string }) {
  return (
    <div className={`hero-fade-up ${delay} bg-navy-900/70 px-3 sm:px-4 py-3.5 sm:py-4 text-center`}>
      <div className="text-xl sm:text-2xl md:text-3xl font-black text-gold-500 leading-none">{value}</div>
      <div className="text-[8px] sm:text-[9px] text-gray-500 tracking-[0.12em] sm:tracking-[0.2em] uppercase mt-1.5 leading-tight">{label}</div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex items-center overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 px-4 py-8 sm:px-6 sm:py-12 md:px-10 lg:min-h-[calc(100svh-6rem)] lg:py-16"
    >
      <div className="absolute inset-0 bg-hero-grid bg-grid opacity-100 pointer-events-none" />

      <div className="absolute top-0 right-0 w-[75vw] h-[75vw] max-w-[500px] max-h-[500px] rounded-full bg-gold-500/[0.05] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[70vw] h-[70vw] max-w-[400px] max-h-[400px] rounded-full bg-navy-600/40 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="grid items-center gap-6 sm:gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)] lg:gap-8">
          <div className="max-w-3xl">
            <div className="mb-3 inline-flex max-w-full items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/10 px-3 py-1 sm:mb-7 sm:gap-3 sm:px-4 sm:py-1.5">
              <Image
                src="/Images/PTC-Group-Mark.png"
                alt=""
                width={28}
                height={32}
                sizes="28px"
                quality={75}
                className="favicon-spin h-6 w-auto shrink-0 sm:h-8"
              />
              <span className="text-[8px] font-bold uppercase leading-tight tracking-[0.1em] text-gold-500 min-[360px]:text-[9px] min-[360px]:tracking-[0.14em] sm:text-[10px] sm:tracking-[0.2em]">
                {HERO_CONTENT.badge}
              </span>
            </div>

            <h1 className="mb-3 font-serif text-[clamp(1.9rem,10vw,2.6rem)] font-black leading-[1.05] sm:mb-6 sm:text-5xl md:text-7xl">
              <span className="hero-fade-up hero-delay-1 block text-white">{HERO_CONTENT.titleLine1}</span>
              <span className="hero-fade-up hero-delay-2 block text-gold-500">{HERO_CONTENT.titleLine2}</span>
            </h1>

            <p className="hero-fade-up hero-delay-3 mb-4 max-w-2xl text-sm font-semibold leading-snug text-white sm:mb-3 sm:text-lg md:text-xl">
              {HERO_CONTENT.tagline}
            </p>

            <p className="hero-fade-up hero-delay-3 mb-9 hidden max-w-2xl text-base leading-relaxed text-gray-400 md:block md:text-lg">
              {HERO_CONTENT.description}
            </p>

            <div className="mb-1 grid grid-cols-2 gap-2 sm:mb-10 sm:flex sm:flex-wrap sm:gap-4">
              <Link
                href={HERO_CONTENT.primaryCta.href}
                className="hero-fade-up hero-delay-4 rounded bg-gold-500 px-3 py-3 text-center text-[9px] font-bold uppercase tracking-wider text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-600 sm:px-8 sm:py-4 sm:text-xs sm:tracking-widest"
              >
                {HERO_CONTENT.primaryCta.label}
              </Link>
              <Link
                href={HERO_CONTENT.secondaryCta.href}
                className="hero-fade-up hero-delay-5 rounded border border-gold-500/40 px-3 py-3 text-center text-[9px] font-bold uppercase tracking-wider text-gold-500 transition-all duration-200 hover:-translate-y-0.5 hover:bg-gold-500/10 sm:px-8 sm:py-4 sm:text-xs sm:tracking-widest"
              >
                {HERO_CONTENT.secondaryCta.label}
              </Link>
            </div>

            <div className="hidden max-w-lg grid-cols-4 gap-px overflow-hidden rounded-lg border border-gold-500/15 bg-gold-500/15 md:grid">
              {GROUP_STATS.map((stat, index) => (
                <StatBox
                  key={stat.label}
                  value={stat.value}
                  label={stat.label.split(' ')[0]}
                  delay={`hero-delay-${index + 6}`}
                />
              ))}
            </div>
          </div>

          <div className="hero-fade-up hero-delay-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[235px] sm:max-w-[360px] md:max-w-[430px] lg:max-w-[520px]">
              <div className="absolute inset-[8%] rounded-full bg-gold-500/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-full border border-gold-500/30 bg-white shadow-[0_24px_80px_rgba(0,0,0,0.45)]">
                <Image
                  src="/Images/ptc-group-pie-chart.png"
                  alt="PTC Group companies and business sectors circular chart"
                  width={1600}
                  height={1600}
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 640px) 235px, (max-width: 768px) 360px, (max-width: 1024px) 430px, 520px"
                  quality={80}
                  className="hero-chart-spin h-auto w-full"
                />
                <div className="absolute inset-[33%] z-10 flex items-center justify-center rounded-full bg-[#f4f6fb]">
                  <Image
                    src="/Images/PTC-Group-Logo.png"
                    alt="PTC Group"
                    width={637}
                    height={722}
                    sizes="(max-width: 640px) 26vw, (max-width: 1024px) 140px, 175px"
                    quality={80}
                    className="h-[74%] w-[66%] object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
