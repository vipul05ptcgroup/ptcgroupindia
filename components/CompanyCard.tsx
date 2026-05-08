'use client'
import { useState } from 'react'
import { Company } from '@/lib/companies'

interface CompanyCardProps {
  company: Company
}

export default function CompanyCard({ company }: CompanyCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`bg-white rounded-xl overflow-hidden flex flex-col transition-all duration-300 ${
        hovered ? 'shadow-2xl -translate-y-1.5' : 'shadow-sm'
      }`}
      style={{
        border: hovered ? `1px solid ${company.color}40` : '1px solid rgba(0,0,0,0.07)',
      }}
    >
      {/* Top accent bar */}
      <div
        className="transition-all duration-300"
        style={{
          height: hovered ? '5px' : '4px',
          background: company.color,
        }}
      />

      <div className="p-6 flex flex-col flex-1">
        {/* Icon + Category */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
            style={{
              background: company.color + '18',
              border: `1px solid ${company.color}25`,
            }}
          >
            {company.icon}
          </div>
          <span
            className="text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
            style={{
              background: company.color + '15',
              color: company.color,
            }}
          >
            {company.category}
          </span>
        </div>

        {/* Name + tagline */}
        <h3 className="font-extrabold text-navy-600 text-base leading-tight mb-1">
          {company.name}
        </h3>
        <p
          className="text-xs font-semibold mb-3"
          style={{ color: company.color }}
        >
          {company.tagline}
        </p>

        {/* Description */}
        <p className="text-gray-500 text-xs leading-relaxed flex-1 mb-4">
          {company.desc}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100">
          <span
            className="text-[10px] font-bold tracking-wide"
            style={{ color: company.color }}
          >
            📊 {company.stats}
          </span>
          {!company.internal ? (
            <a
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-600 hover:text-gold-500 text-[11px] font-bold tracking-wide uppercase transition-colors duration-200"
            >
              Visit Site →
            </a>
          ) : (
            <span className="text-gray-400 text-[11px] italic">Internal</span>
          )}
        </div>
      </div>
    </div>
  )
}
