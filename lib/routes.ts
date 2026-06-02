const LEGACY_COMPANY_SLUGS: Record<string, string> = {
  ptclogistics: 'ptc-logistics',
  thefuturex: 'the-futurex',
  devangorganics: 'devang-organics',
  'himalayan-brewery': 'the-himalayan-brewery',
  'himalayan-store': 'the-himalayan-store',
  zauracare: 'zaura-care',
  sspackaging: 'ss-packaging',
}

export const SITE_URL =
  (process.env.SITE_URL || process.env.NEXT_PUBLIC_SITE_URL || 'https://ptcgroupindia.in').replace(/\/+$/, '')

export function normalizeRouteSegment(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .replace(/--+/g, '-')
}

export function normalizePathname(pathname: string) {
  if (!pathname || pathname === '/') return '/'

  const cleanedPath = pathname.replace(/\/{2,}/g, '/')
  const normalizedPath = cleanedPath.endsWith('/') ? cleanedPath.slice(0, -1) : cleanedPath

  return (normalizedPath || '/').toLowerCase()
}

export function resolveCompanySlug(slug: string) {
  const normalizedSlug = normalizeRouteSegment(slug)
  return LEGACY_COMPANY_SLUGS[normalizedSlug] || normalizedSlug
}

export function getCompanyPath(company: { id: string }) {
  return `/companies/${resolveCompanySlug(company.id)}`
}

export function getCanonicalUrl(pathname: string) {
  const normalizedPath = normalizePathname(pathname)
  return normalizedPath === '/' ? `${SITE_URL}/` : `${SITE_URL}${normalizedPath}`
}
