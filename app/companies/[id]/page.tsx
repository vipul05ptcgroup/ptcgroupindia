import { notFound } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { COMPANIES } from '@/lib/companies'

interface CompanyDetailPageProps {
  params: {
    id: string
  }
}

export function generateStaticParams() {
  return COMPANIES.map((company) => ({ id: company.id }))
}

export default function CompanyDetailPage({ params }: CompanyDetailPageProps) {
  const company = COMPANIES.find((item) => item.id === params.id)

  if (!company) notFound()

  return (
    <main>
      <Navbar />

      <section className="bg-navy-950 pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 md:px-10">
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] tracking-[0.16em] sm:tracking-[0.2em] uppercase text-gold-400 font-bold mb-3">
            {company.category}
          </p>
          <h1 className="font-serif font-black text-white text-4xl sm:text-5xl md:text-7xl leading-tight">
            {company.name}
          </h1>
          <p className="mt-3 sm:mt-4 text-lg sm:text-xl md:text-2xl font-semibold" style={{ color: company.color }}>
            {company.tagline}
          </p>
          <p className="mt-4 sm:mt-7 max-w-3xl text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
            {company.longDesc || company.desc}
          </p>
          <div className="mt-6 sm:mt-8 flex flex-wrap gap-2 sm:gap-3">
            <span
              className="inline-flex px-3 sm:px-4 py-2 rounded text-xs sm:text-sm font-bold"
              style={{ background: `${company.color}20`, color: company.color }}
            >
              {company.stats}
            </span>
            <span className="inline-flex px-3 sm:px-4 py-2 rounded bg-white/10 text-gray-200 text-xs sm:text-sm">
              {company.category}
            </span>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12 sm:py-20 px-4 sm:px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-4 sm:gap-6">
          <article className="lg:col-span-2 bg-white border border-slate-200 rounded-xl p-5 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-700 mb-4">About {company.name}</h2>
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4">{company.desc}</p>

            {company.highlights?.length ? (
              <>
                <h3 className="text-lg sm:text-xl font-bold text-navy-700 mt-8 mb-3">Highlights</h3>
                <ul className="space-y-2">
                  {company.highlights.map((point) => (
                    <li key={point} className="text-gray-700 text-sm sm:text-base flex gap-2">
                      <span className="text-gold-600 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </>
            ) : null}

            {company.offerings?.length ? (
              <>
                <h3 className="text-lg sm:text-xl font-bold text-navy-700 mt-8 mb-3">Key Offerings</h3>
                <div className="flex flex-wrap gap-2">
                  {company.offerings.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs sm:text-sm border border-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </>
            ) : null}

            {company.audience?.length ? (
              <>
                <h3 className="text-lg sm:text-xl font-bold text-navy-700 mt-8 mb-3">Primary Audience</h3>
                <div className="flex flex-wrap gap-2">
                  {company.audience.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full text-xs sm:text-sm border"
                      style={{ borderColor: `${company.color}40`, color: company.color, background: `${company.color}12` }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </>
            ) : null}
          </article>

          <aside className="bg-white border border-slate-200 rounded-xl p-5 sm:p-8 lg:sticky lg:top-24 h-fit">
            <h3 className="text-lg sm:text-xl font-extrabold text-navy-700 mb-4">Company Details</h3>
            <dl className="space-y-4 text-sm">
              <div><dt className="text-gray-500 uppercase tracking-wider text-[10px]">Category</dt><dd className="text-navy-700 font-semibold break-words">{company.category}</dd></div>
              <div><dt className="text-gray-500 uppercase tracking-wider text-[10px]">Company ID</dt><dd className="text-navy-700 font-semibold break-words">{company.id}</dd></div>
              <div><dt className="text-gray-500 uppercase tracking-wider text-[10px]">Icon Code</dt><dd className="text-navy-700 font-semibold break-words">{company.icon}</dd></div>
              <div><dt className="text-gray-500 uppercase tracking-wider text-[10px]">Brand Color</dt><dd className="text-navy-700 font-semibold break-words">{company.color}</dd></div>
              <div><dt className="text-gray-500 uppercase tracking-wider text-[10px]">Key Stat</dt><dd className="text-navy-700 font-semibold break-words">{company.stats}</dd></div>
              <div>
                <dt className="text-gray-500 uppercase tracking-wider text-[10px]">Website</dt>
                <dd>
                  <a
                    href={company.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center sm:w-auto sm:text-left text-gold-600 hover:text-gold-700 font-semibold border border-gold-500/30 rounded px-3 py-2"
                  >
                    Visit Official Site
                  </a>
                </dd>
              </div>
              {company.founded ? <div><dt className="text-gray-500 uppercase tracking-wider text-[10px]">Founded</dt><dd className="text-navy-700 font-semibold break-words">{company.founded}</dd></div> : null}
              {company.headquarters ? <div><dt className="text-gray-500 uppercase tracking-wider text-[10px]">Headquarters</dt><dd className="text-navy-700 font-semibold break-words">{company.headquarters}</dd></div> : null}
              {company.parentGroup ? <div><dt className="text-gray-500 uppercase tracking-wider text-[10px]">Parent Group</dt><dd className="text-navy-700 font-semibold break-words">{company.parentGroup}</dd></div> : null}
              {company.geographicReach ? <div><dt className="text-gray-500 uppercase tracking-wider text-[10px]">Geographic Reach</dt><dd className="text-navy-700 font-semibold break-words">{company.geographicReach}</dd></div> : null}
              {company.contactInfo ? <div><dt className="text-gray-500 uppercase tracking-wider text-[10px]">Contact Info</dt><dd className="text-navy-700 font-semibold break-words">{company.contactInfo}</dd></div> : null}
              {company.socialProof ? <div><dt className="text-gray-500 uppercase tracking-wider text-[10px]">Social Proof</dt><dd className="text-navy-700 font-semibold break-words">{company.socialProof}</dd></div> : null}
              <div><dt className="text-gray-500 uppercase tracking-wider text-[10px]">Internal Record</dt><dd className="text-navy-700 font-semibold">{company.internal ? 'Yes' : 'No'}</dd></div>
            </dl>
          </aside>
        </div>
      </section>

      {company.businessModel?.length || company.certifications?.length || company.notableClients?.length || company.keyFacts?.length ? (
        <section className="bg-white py-10 sm:py-14 px-4 sm:px-6 md:px-10 border-t border-slate-200">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4 sm:gap-6">
            {company.businessModel?.length ? (
              <article className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6">
                <h3 className="text-lg font-bold text-navy-700 mb-3">Business Model</h3>
                <ul className="space-y-2">
                  {company.businessModel.map((item) => (
                    <li key={item} className="text-sm text-gray-700 flex gap-2">
                      <span className="text-gold-600">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ) : null}

            {company.certifications?.length ? (
              <article className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6">
                <h3 className="text-lg font-bold text-navy-700 mb-3">Certifications</h3>
                <div className="flex flex-wrap gap-2">
                  {company.certifications.map((item) => (
                    <span key={item} className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs sm:text-sm text-slate-700">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ) : null}

            {company.notableClients?.length ? (
              <article className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6">
                <h3 className="text-lg font-bold text-navy-700 mb-3">Notable Clients</h3>
                <div className="flex flex-wrap gap-2">
                  {company.notableClients.map((item) => (
                    <span key={item} className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs sm:text-sm text-slate-700">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ) : null}

            {company.keyFacts?.length ? (
              <article className="bg-slate-50 border border-slate-200 rounded-xl p-5 sm:p-6">
                <h3 className="text-lg font-bold text-navy-700 mb-3">Key Facts</h3>
                <ul className="space-y-2">
                  {company.keyFacts.map((item) => (
                    <li key={item} className="text-sm text-gray-700 flex gap-2">
                      <span className="text-gold-600">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ) : null}
          </div>
        </section>
      ) : null}

      {company.sourceUrls?.length ? (
        <section className="bg-white py-10 px-4 sm:px-6 md:px-10">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-lg font-bold text-navy-700 mb-3">Data Sources</h3>
            <div className="flex flex-wrap gap-2">
              {company.sourceUrls.map((url) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm px-3 py-1.5 rounded border border-slate-200 text-slate-600 hover:text-gold-600 hover:border-gold-500/40 break-all"
                >
                  {url}
                </a>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <Footer />
    </main>
  )
}
