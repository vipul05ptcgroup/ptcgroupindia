import Link from 'next/link'
import Image from 'next/image'
import { Company } from '@/lib/companies'
import { getCompanyPath } from '@/lib/routes'

interface CompanyCardProps {
  company: Company
}

export default function CompanyCard({ company }: CompanyCardProps) {
  return (
    <article
      className="group relative bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden flex flex-col transition-all duration-300 shadow-[0_12px_35px_rgba(1,30,27,0.08)] hover:shadow-[0_20px_45px_rgba(1,30,27,0.15)] hover:-translate-y-1"
      style={{
        border: `1px solid ${company.color}30`,
      }}
    >
      <Link
        href={getCompanyPath(company)}
        className="absolute inset-0 z-0"
        aria-label={`View details for ${company.name}`}
      />

      <div
        className="relative z-[1] pointer-events-none transition-all duration-300"
        style={{
          height: '5px',
          background: `linear-gradient(90deg, ${company.color}, #D7951F)`,
        }}
      />

      <div className="relative z-[1] pointer-events-none p-5 sm:p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-5 gap-2 min-[380px]:gap-3">
          <Link
            href={getCompanyPath(company)}
            aria-label={`View ${company.name} details`}
            className="relative z-10 pointer-events-auto w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-lg sm:text-2xl shadow-sm transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-500"
            style={{
              background: company.color + '18',
              border: `1px solid ${company.color}35`,
            }}
          >
            {company.iconImage ? (
              <Image
                src={company.iconImage}
                alt={`${company.name} logo`}
                width={96}
                height={96}
                sizes="44px"
                quality={100}
                className="h-9 w-9 sm:h-11 sm:w-11 object-contain"
              />
            ) : (
              company.icon
            )}
          </Link>
          <span
            className="max-w-[65%] text-right text-[8px] min-[380px]:text-[9px] font-bold tracking-[0.08em] min-[380px]:tracking-[0.14em] uppercase px-2.5 min-[380px]:px-3 py-1.5 rounded-full break-words leading-tight"
            style={{
              background: company.color + '15',
              color: company.color,
            }}
          >
            {company.category}
          </span>
        </div>

        <h3 className="font-serif font-black text-navy-800 text-xl sm:text-2xl leading-tight break-words group-hover:text-gold-600 transition-colors">
          {company.name}
        </h3>
        <p className="text-sm font-semibold text-navy-600 leading-relaxed mt-2">
          {company.cardSubtitle || company.tagline}
        </p>

        <p className="text-slate-600 text-sm leading-relaxed flex-1 mt-4">
          {company.cardMeta || [company.stats, company.founded ? `Since ${company.founded}` : null].filter(Boolean).join(' • ')}
        </p>

        <div className="flex flex-col min-[380px]:flex-row min-[380px]:items-center min-[380px]:justify-between pt-5 mt-5 border-t border-slate-200 gap-2 min-[380px]:gap-3">
          <a
            href={company.url}
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 pointer-events-auto inline-flex min-h-11 items-center justify-center min-[380px]:justify-start gap-2 rounded-lg text-gold-700 hover:text-gold-600 text-xs font-black tracking-wide uppercase transition-colors"
            aria-label={`Visit ${company.name} website`}
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="1.8">
              <circle cx="12" cy="12" r="9" />
              <path d="M3.5 12h17M12 3c2.2 2.4 3.4 5.4 3.4 9S14.2 18.6 12 21M12 3C9.8 5.4 8.6 8.4 8.6 12s1.2 6.6 3.4 9" />
            </svg>
            Visit Website <span aria-hidden="true">-&gt;</span>
          </a>
          <Link
            href={getCompanyPath(company)}
            className="relative z-10 pointer-events-auto inline-flex min-h-11 items-center justify-center rounded-lg border border-navy-200 px-3 text-navy-700 hover:border-gold-500 hover:text-gold-600 text-[10px] font-bold tracking-wider uppercase transition-colors"
          >
            Details <span aria-hidden="true" className="ml-1">-&gt;</span>
          </Link>
        </div>
      </div>
    </article>
  )
}
