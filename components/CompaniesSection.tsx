'use client'
import { COMPANIES } from '@/lib/companies'
import { COMPANIES_SECTION_CONTENT } from '@/lib/sitedata'
import CompanyCard from './CompanyCard'

export default function CompaniesSection() {
  return (
    <section id="companies" className="bg-slate-100 pt-24 sm:pt-28 pb-16 sm:pb-24 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <p className="text-[10px] font-bold tracking-[0.18em] sm:tracking-[0.25em] text-gold-500 uppercase mb-3">
            {COMPANIES_SECTION_CONTENT.eyebrow}
          </p>
          <h2 className="font-serif font-black text-navy-600 text-3xl sm:text-4xl md:text-5xl leading-tight">
            {COMPANIES_SECTION_CONTENT.title}
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto mt-4">
            {COMPANIES_SECTION_CONTENT.description}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
          {COMPANIES.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      </div>
    </section>
  )
}
