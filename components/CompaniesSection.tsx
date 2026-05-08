'use client'
import { useState } from 'react'
import { COMPANIES, CATEGORIES } from '@/lib/companies'
import CompanyCard from './CompanyCard'

export default function CompaniesSection() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered =
    activeCategory === 'All'
      ? COMPANIES
      : COMPANIES.filter((c) => c.category === activeCategory)

  return (
    <section id="companies" className="bg-slate-100 py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[10px] font-bold tracking-[0.25em] text-gold-500 uppercase mb-3">
            Our Portfolio
          </p>
          <h2 className="font-serif font-black text-navy-600 text-4xl md:text-5xl leading-tight">
            Our Companies &amp; Brands
          </h2>
          <p className="text-gray-500 text-base max-w-lg mx-auto mt-4">
            A growing family of businesses across diverse industries — each a leader in its domain.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-[11px] font-semibold tracking-wide transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-navy-600 text-white border-transparent'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-navy-600/40 hover:text-navy-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filtered.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      </div>
    </section>
  )
}
