import { COMPANIES } from '@/lib/companies'
import { COMPANIES_SECTION_CONTENT } from '@/lib/sitedata'
import CompanyCard from './CompanyCard'

export default function CompaniesSection() {
  return (
    <section
      id="companies"
      className="companies-dark-bg relative overflow-hidden bg-navy-950 pt-24 sm:pt-28 pb-16 sm:pb-24 px-4 sm:px-6 md:px-10"
    >
      <div className="companies-grid absolute inset-0 pointer-events-none" />
      <div className="companies-orb companies-orb-gold absolute -top-24 -right-20 h-[80vw] w-[80vw] max-h-[28rem] max-w-[28rem] rounded-full bg-gold-500/20 blur-3xl pointer-events-none" />
      <div className="companies-orb companies-orb-teal absolute top-1/3 -left-24 h-[90vw] w-[90vw] max-h-[32rem] max-w-[32rem] rounded-full bg-navy-400/25 blur-3xl pointer-events-none" />
      <div className="companies-orb companies-orb-bottom absolute -bottom-32 right-0 h-[85vw] w-[85vw] max-h-[30rem] max-w-[30rem] rounded-full bg-gold-700/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="relative text-center mb-10 sm:mb-14">
          <p className="text-[10px] font-bold tracking-[0.18em] sm:tracking-[0.25em] text-gold-400 uppercase mb-3">
            {COMPANIES_SECTION_CONTENT.eyebrow}
          </p>
          <h2 className="font-serif font-black text-white text-3xl sm:text-4xl md:text-5xl leading-tight">
            {COMPANIES_SECTION_CONTENT.title}
          </h2>
          <p className="text-navy-100/75 text-sm sm:text-base max-w-lg mx-auto mt-4">
            {COMPANIES_SECTION_CONTENT.description}
          </p>
        </div>

        <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {COMPANIES.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      </div>
    </section>
  )
}
