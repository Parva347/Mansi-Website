import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { SiteFooter } from '../components/layout/SiteFooter';
import { SiteHeader } from '../components/layout/SiteHeader';
import { QuoteDrawer } from '../components/quote/QuoteDrawer';
import { PageMetadata } from '../components/seo/PageMetadata';

export function PublicLayout() {
  const { pathname } = useLocation();
  const mainRef = useRef<HTMLElement>(null);
  const previousPathname = useRef(pathname);

  useEffect(() => {
    if (previousPathname.current !== pathname) mainRef.current?.focus();
    previousPathname.current = pathname;
  }, [pathname]);

  return (
    <div className="flex min-h-dvh flex-col">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <PageMetadata />
      <main className="flex-1" id="main-content" ref={mainRef} tabIndex={-1}>
        <Outlet />
      </main>
      <SiteFooter />
      <QuoteDrawer />
    </div>
  );
}
