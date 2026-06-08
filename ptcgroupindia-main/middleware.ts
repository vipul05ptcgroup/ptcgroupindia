import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { normalizePathname, resolveCompanySlug } from '@/lib/routes'

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl

  if (pathname === '/') {
    return NextResponse.next()
  }

  if (pathname.startsWith('/api') || pathname.startsWith('/_next') || /\.[^/]+$/.test(pathname)) {
    return NextResponse.next()
  }

  let canonicalPathname = normalizePathname(pathname).toLowerCase()

  if (canonicalPathname.startsWith('/companies/')) {
    const segments = canonicalPathname.split('/')
    const companySlug = segments[2]

    if (companySlug) {
      segments[2] = resolveCompanySlug(companySlug)
      canonicalPathname = segments.join('/')
    }
  }

  if (pathname !== canonicalPathname) {
    const url = request.nextUrl.clone()
    url.pathname = canonicalPathname
    url.search = search
    return NextResponse.redirect(url, 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'],
}
