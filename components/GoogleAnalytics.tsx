'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, Suspense } from 'react'

const GA_ID = 'G-6SXJZ1877M'

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    dataLayer: unknown[]
  }
}

/**
 * Inner tracker — must be wrapped in <Suspense> because useSearchParams()
 * opts the subtree into client-side rendering (Next.js App Router requirement).
 */
function GATracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const query = searchParams?.toString()
    const url = pathname + (query ? `?${query}` : '')

    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', GA_ID, { page_path: url })
    }
  }, [pathname, searchParams])

  return null
}

/**
 * GoogleAnalytics — drop into the root layout.
 *
 * • Loads the gtag.js script with strategy="afterInteractive" so it never
 *   blocks the critical rendering path or causes layout shift.
 * • Fires a page_view on every client-side route change via usePathname /
 *   useSearchParams (covers all App Router navigations).
 */
export default function GoogleAnalytics() {
  return (
    <>
      {/* 1. Load the gtag library — deferred until page is interactive */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />

      {/* 2. Initialise gtag and fire the first page_view */}
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              page_path: window.location.pathname,
              send_page_view: true
            });
          `,
        }}
      />

      {/* 3. Re-fire page_view on every client-side navigation */}
      <Suspense fallback={null}>
        <GATracker />
      </Suspense>
    </>
  )
}
