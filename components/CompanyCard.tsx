'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Company } from '@/lib/companies'

interface CompanyCardProps {
  company: Company
}

export default function CompanyCard({ company }: CompanyCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <Link
      href={`/companies/${company.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`bg-white rounded-xl overflow-hidden flex flex-col transition-all duration-300 ${
        hovered ? 'shadow-2xl -translate-y-1.5' : 'shadow-sm'
      }`}
      style={{
        border: hovered ? `1px solid ${company.color}40` : '1px solid rgba(0,0,0,0.07)',
      }}
    >
      <div
        className="transition-all duration-300"
        style={{
          height: hovered ? '5px' : '4px',
          background: company.color,
        }}
      />

      <div className="p-5 sm:p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3 sm:mb-4 gap-2">
          <div
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-lg sm:text-2xl"
            style={{
              background: company.color + '18',
              border: `1px solid ${company.color}25`,
            }}
          >
            {company.icon}
          </div>
          <span
            className="text-[8px] sm:text-[9px] font-bold tracking-[0.12em] sm:tracking-widest uppercase px-2 sm:px-2.5 py-1 rounded-full"
            style={{
              background: company.color + '15',
              color: company.color,
            }}
          >
            {company.category}
          </span>
        </div>

        <h3 className="font-extrabold text-navy-600 text-lg sm:text-base leading-tight mb-1">{company.name}</h3>
        <p className="text-sm sm:text-xs font-semibold mb-3" style={{ color: company.color }}>
          {company.tagline}
        </p>

        <p className="text-gray-500 text-sm sm:text-xs leading-relaxed flex-1 mb-4">{company.desc}</p>

        <div className="flex items-center justify-between pt-3 border-t border-gray-100 gap-3">
          <div className="text-[11px] sm:text-[10px] font-bold tracking-wide" style={{ color: company.color }}>
            <div>Stats {company.stats}</div>
            {company.founded && <div className="text-gray-500 font-semibold mt-0.5">Since {company.founded}</div>}
          </div>
          <span className="text-navy-600 hover:text-gold-500 text-[12px] sm:text-[11px] font-bold tracking-wide uppercase transition-colors duration-200">
            View Details -&gt;
          </span>
        </div>
      </div>
    </Link>
  )
}
