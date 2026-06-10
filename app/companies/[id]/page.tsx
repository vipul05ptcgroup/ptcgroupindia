import { notFound, permanentRedirect } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { COMPANIES } from '@/lib/companies'
import { getCanonicalUrl, getCompanyPath, resolveCompanySlug, SITE_URL } from '@/lib/routes'

interface CompanyDetailPageProps {
  params: {
    id: string
  }
}

const OG_IMAGE = `${SITE_URL}/Images/ptc-header-footer-logo.png`

function getCompanyById(id: string) {
  return COMPANIES.find((item) => item.id === id)
}

export function generateStaticParams() {
  return COMPANIES.map((company) => ({ id: resolveCompanySlug(company.id) }))
}

export function generateMetadata({ params }: CompanyDetailPageProps): Metadata {
  const resolvedId = resolveCompanySlug(params.id)
  const company = getCompanyById(resolvedId)

  if (!company) {
    return {
      title: 'Company Not Found | PTC Group India',
      description: 'The requested company page could not be found.',
      robots: { index: false, follow: false },
    }
  }

  const canonicalUrl = getCanonicalUrl(getCompanyPath(company))
  const title = `${company.name} | ${company.tagline} | PTC Group India`
  const description = company.longDesc || company.desc

  return {
    title,
    description,
    keywords: [company.name, company.category, company.tagline, ...(company.offerings || [])],
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: 'PTC Group India',
      type: 'website',
      images: [
        {
          url: OG_IMAGE,
          width: 1485,
          height: 1508,
          alt: `${company.name} - ${company.tagline}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [OG_IMAGE],
    },
  }
}

export default function CompanyDetailPage({ params }: CompanyDetailPageProps) {
  const resolvedId = resolveCompanySlug(params.id)
  const canonicalPath = getCompanyPath({ id: resolvedId })

  if (params.id !== resolvedId) {
    permanentRedirect(canonicalPath)
  }

  const company = getCompanyById(resolvedId)

  if (!company) notFound()

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Companies', item: `${SITE_URL}/companies` },
      { '@type': 'ListItem', position: 3, name: company.name, item: getCanonicalUrl(getCompanyPath(company)) },
    ],
  }

  const companySchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.name,
    description: company.longDesc || company.desc,
    url: company.url,
    logo: company.iconImage ? `${SITE_URL}${company.iconImage}` : OG_IMAGE,
    parentOrganization: company.parentGroup
      ? { '@type': 'Organization', name: company.parentGroup, url: SITE_URL }
      : undefined,
    address: company.headquarters,
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(companySchema) }} />
      <Navbar />

      <section className="company-detail-hero relative overflow-hidden bg-[#202a28] pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 md:px-10">
        <div className="companies-grid absolute inset-0 opacity-35 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/25 via-slate-700/10 to-black/20 pointer-events-none" />
        <div
          className="absolute -top-20 -right-16 h-[75vw] w-[75vw] max-h-80 max-w-80 rounded-full blur-3xl opacity-25 pointer-events-none"
          style={{ background: company.color }}
        />
        <div className="absolute -bottom-32 left-0 h-[85vw] w-[85vw] max-h-96 max-w-96 rounded-full bg-gold-500/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-[1fr_320px] gap-10 lg:gap-16 items-center">
          <div>
            <Link href="/companies" className="inline-flex min-h-11 items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] sm:tracking-[0.16em] text-slate-200 hover:text-gold-300 transition-colors mb-5 sm:mb-8">
              <span aria-hidden="true">&lt;-</span> All Companies
            </Link>
            <p className="text-[9px] sm:text-[10px] tracking-[0.12em] sm:tracking-[0.2em] uppercase text-gold-400 font-bold mb-3 break-words">
              {company.category} • PTC Group India
            </p>
            <h1 className="font-serif font-black text-white text-3xl min-[380px]:text-4xl sm:text-5xl md:text-7xl leading-[1.05] break-words">
              {company.name}
            </h1>
            <p className="mt-4 text-base min-[380px]:text-lg sm:text-xl md:text-2xl font-semibold text-slate-100 break-words">
              {company.cardSubtitle || company.tagline}
            </p>
            <p className="mt-6 max-w-3xl text-slate-200 text-sm sm:text-base md:text-lg leading-relaxed">
              {company.longDesc || company.desc}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-lg bg-gold-500 px-4 sm:px-6 text-center text-[11px] sm:text-xs font-black uppercase tracking-widest text-white hover:bg-gold-400 transition-colors"
              >
                Visit Official Website <span aria-hidden="true">-&gt;</span>
              </a>
              <a
                href="#company-overview"
                className="inline-flex min-h-12 w-full sm:w-auto items-center justify-center rounded-lg border border-white/20 bg-white/5 px-4 sm:px-6 text-center text-[11px] sm:text-xs font-bold uppercase tracking-widest text-white hover:bg-white/10 transition-colors"
              >
                Explore Company
              </a>
            </div>
          </div>

          <div className="relative mt-2 sm:mt-4 lg:mt-0">
            <div className="absolute inset-4 rounded-3xl blur-2xl opacity-30" style={{ background: company.color }} />
            <div className="relative rounded-3xl border border-slate-400/30 bg-slate-700/45 backdrop-blur-md p-4 min-[380px]:p-6 sm:p-9">
              <div className="mx-auto flex h-32 w-full max-w-[220px] items-center justify-center overflow-hidden rounded-2xl border border-white/20 bg-[#8d9995] p-5 shadow-2xl sm:h-36">
                {company.iconImage ? (
                  <Image
                    src={company.iconImage}
                    alt={`${company.name} logo`}
                    width={220}
                    height={140}
                    priority
                    sizes="(max-width: 640px) 188px, 220px"
                    className="max-h-full w-auto max-w-full object-contain drop-shadow-[0_2px_2px_rgba(0,0,0,0.35)]"
                  />
                ) : (
                  <span className="text-3xl font-black" style={{ color: company.color }}>{company.icon}</span>
                )}
              </div>
              <div className="mt-10 grid grid-cols-1 gap-3 text-center min-[380px]:grid-cols-2 sm:mt-8">
                <div className="rounded-xl border border-slate-300/20 bg-slate-900/35 p-4">
                  <p className="text-lg font-black text-gold-400">{company.stats}</p>
                  <p className="mt-1 text-[9px] uppercase tracking-wider text-slate-300">Key Strength</p>
                </div>
                <div className="rounded-xl border border-slate-300/20 bg-slate-900/35 p-4">
                  <p className="text-lg font-black text-slate-50">{company.founded || 'India'}</p>
                  <p className="mt-1 text-[9px] uppercase tracking-wider text-slate-300">{company.founded ? 'Founded' : 'Market'}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="company-overview" className="bg-slate-50 py-14 sm:py-20 px-4 sm:px-6 md:px-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_340px] gap-6 sm:gap-8">
          <article className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-5 min-[380px]:p-6 sm:p-9 shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gold-600 mb-3">Company Overview</p>
              <h2 className="font-serif text-2xl min-[380px]:text-3xl sm:text-4xl font-black text-navy-800 mb-5 break-words">About {company.name}</h2>
              <p className="text-sm sm:text-base text-slate-600 leading-7">{company.desc}</p>
            </div>

            {company.highlights?.length ? (
              <div className="bg-[#303b39] rounded-2xl border border-slate-500/25 p-5 min-[380px]:p-6 sm:p-9">
                <h3 className="font-serif text-xl min-[380px]:text-2xl font-black text-white mb-5 break-words">Why {company.name}</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {company.highlights.map((point) => (
                    <div key={point} className="flex gap-3 rounded-xl border border-slate-400/20 bg-slate-800/35 p-4">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold-500/15 text-xs font-black text-gold-400">+</span>
                      <span className="text-sm leading-relaxed text-slate-200">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {company.offerings?.length ? (
              <div className="bg-white border border-slate-200 rounded-2xl p-5 min-[380px]:p-6 sm:p-9 shadow-sm">
                <h3 className="font-serif text-2xl font-black text-navy-800 mb-5">Products & Solutions</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {company.offerings.map((item, index) => (
                    <div key={item} className="flex gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                      <span className="text-xs font-black text-gold-600">{String(index + 1).padStart(2, '0')}</span>
                      <span className="text-sm font-semibold leading-relaxed text-navy-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}

            {company.audience?.length ? (
              <div className="bg-white border border-slate-200 rounded-2xl p-5 min-[380px]:p-6 sm:p-9 shadow-sm">
                <h3 className="font-serif text-2xl font-black text-navy-800 mb-5">Built For</h3>
                <div className="flex flex-wrap gap-2">
                  {company.audience.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border px-4 py-2 text-xs font-bold"
                      style={{ borderColor: `${company.color}35`, color: company.color, background: `${company.color}0D` }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ) : null}
          </article>

          <aside className="h-fit min-w-0 rounded-2xl border border-slate-500/25 bg-[#303b39] p-5 min-[380px]:p-6 sm:p-7 lg:sticky lg:top-24">
            <h3 className="font-serif text-2xl font-black text-white">At a Glance</h3>
            <dl className="mt-6 divide-y divide-white/10 text-sm">
              <div className="py-4"><dt className="text-[10px] uppercase tracking-widest text-white/45">Industry</dt><dd className="mt-1 font-bold text-white break-words">{company.category}</dd></div>
              <div className="py-4"><dt className="text-[10px] uppercase tracking-widest text-white/45">Key Strength</dt><dd className="mt-1 font-bold text-gold-400 break-words">{company.stats}</dd></div>
              {company.founded ? <div className="py-4"><dt className="text-[10px] uppercase tracking-widest text-white/45">Established</dt><dd className="mt-1 font-bold text-white">{company.founded}</dd></div> : null}
              {company.geographicReach ? <div className="py-4"><dt className="text-[10px] uppercase tracking-widest text-slate-400">Market Reach</dt><dd className="mt-1 leading-relaxed text-slate-200">{company.geographicReach}</dd></div> : null}
              {company.headquarters ? <div className="py-4"><dt className="text-[10px] uppercase tracking-widest text-slate-400">Headquarters</dt><dd className="mt-1 leading-relaxed text-slate-200">{company.headquarters}</dd></div> : null}
              {company.parentGroup ? <div className="py-4"><dt className="text-[10px] uppercase tracking-widest text-white/45">Part of</dt><dd className="mt-1 font-bold text-white">{company.parentGroup}</dd></div> : null}
            </dl>
            <a
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-gold-500 px-5 text-xs font-black uppercase tracking-widest text-white hover:bg-gold-400 transition-colors"
            >
              Visit Website -&gt;
            </a>
          </aside>
        </div>
      </section>

      {company.businessModel?.length || company.certifications?.length || company.notableClients?.length || company.keyFacts?.length ? (
        <section className="bg-white py-14 sm:py-20 px-4 sm:px-6 md:px-10 border-t border-slate-200">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-4 sm:gap-6">
            {company.businessModel?.length ? (
              <article className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold-600 mb-2">How It Works</p>
                <h3 className="font-serif text-2xl font-black text-navy-800 mb-5">Business Model</h3>
                <ul className="space-y-3">
                  {company.businessModel.map((item) => (
                    <li key={item} className="text-sm text-slate-600 flex gap-3">
                      <span className="text-gold-600 font-black">+</span>
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
              <article className="bg-navy-900 rounded-2xl p-6 sm:p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold-400 mb-2">Good to Know</p>
                <h3 className="font-serif text-2xl font-black text-white mb-5">Key Facts</h3>
                <ul className="space-y-3">
                  {company.keyFacts.map((item) => (
                    <li key={item} className="text-sm text-navy-100/75 flex gap-3">
                      <span className="text-gold-400 font-black">+</span>
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
        <section className="bg-slate-100 py-8 px-4 sm:px-6 md:px-10 border-t border-slate-200">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-navy-700 mb-3">Official Links</h3>
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2">
              {company.sourceUrls.map((url) => (
                <a
                  key={url}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full sm:w-auto max-w-full text-xs px-3 py-2 rounded-lg border border-slate-300 bg-white text-slate-600 hover:text-gold-600 hover:border-gold-500/40 break-all transition-colors"
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

