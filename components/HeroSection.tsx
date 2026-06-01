'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { GROUP_STATS } from '@/lib/companies'
import { HERO_CONTENT } from '@/lib/sitedata'

function useCountUp(target: number, duration = 2000) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const steps = 60
    let step = 0
    const timer = setInterval(() => {
      step++
      const ease = 1 - Math.pow(1 - step / steps, 3)
      setCount(Math.round(target * ease))
      if (step >= steps) clearInterval(timer)
    }, duration / steps)
    return () => clearInterval(timer)
  }, [target, duration])
  return count
}

function StatBox({ value, label }: { value: string; label: string }) {
  const numericPart = parseInt(value.replace('+', ''))
  const suffix = value.includes('+') ? '+' : ''
  const animated = useCountUp(numericPart)

  return (
    <div className="bg-navy-900/70 px-2 sm:px-4 py-3 sm:py-4 text-center">
      <div className="text-xl sm:text-2xl md:text-3xl font-black text-gold-500 leading-none">
        {animated}
        {suffix}
      </div>
      <div className="text-[8px] sm:text-[9px] text-gray-500 tracking-[0.14em] sm:tracking-[0.2em] uppercase mt-1">{label}</div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 pt-24 sm:pt-20 pb-14 sm:pb-16 px-4 sm:px-6 md:px-10"
    >
      <div className="absolute inset-0 bg-hero-grid bg-grid opacity-100 pointer-events-none" />

      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold-500/[0.05] blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-navy-600/40 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-gold-500/10 border border-gold-500/30 rounded-full px-3 sm:px-4 py-1.5 mb-6 sm:mb-7">
            <Image
              src="/Images/Favicon.png"
              alt="PTC Group icon"
              width={18}
              height={18}
              className="favicon-spin h-[16px] w-[16px] md:h-[18px] md:w-[18px]"
            />
            <span className="text-gold-500 text-[9px] sm:text-[10px] font-bold tracking-[0.14em] sm:tracking-[0.2em] uppercase">
              {HERO_CONTENT.badge}
            </span>
          </div>

          <h1 className="font-serif font-black text-white leading-tight text-4xl sm:text-5xl md:text-7xl">{HERO_CONTENT.titleLine1}</h1>
          <h1 className="font-serif font-black text-gold-500 leading-tight text-4xl sm:text-5xl md:text-7xl mb-5 sm:mb-6">{HERO_CONTENT.titleLine2}</h1>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mb-7 sm:mb-9">
            {HERO_CONTENT.description}
          </p>

          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10">
            <Link
              href={HERO_CONTENT.primaryCta.href}
              className="text-center bg-gold-500 hover:bg-gold-600 text-white text-xs font-bold tracking-widest uppercase px-6 sm:px-8 py-3.5 sm:py-4 rounded transition-all duration-200 hover:-translate-y-0.5"
            >
              {HERO_CONTENT.primaryCta.label}
            </Link>
            <Link
              href={HERO_CONTENT.secondaryCta.href}
              className="text-center border border-gold-500/40 hover:bg-gold-500/10 text-gold-500 text-xs font-bold tracking-widest uppercase px-6 sm:px-8 py-3.5 sm:py-4 rounded transition-all duration-200 hover:-translate-y-0.5"
            >
              {HERO_CONTENT.secondaryCta.label}
            </Link>
          </div>

          <div className="grid grid-cols-4 gap-px bg-gold-500/15 rounded-lg overflow-hidden border border-gold-500/15 max-w-lg">
            {GROUP_STATS.map((stat) => (
              <StatBox key={stat.label} value={stat.value} label={stat.label.split(' ')[0]} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
