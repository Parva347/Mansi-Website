import { Outlet } from 'react-router-dom';

import { SiteFooter } from '../components/layout/SiteFooter';
import { SiteHeader } from '../components/layout/SiteHeader';
import { QuoteDrawer } from '../components/quote/QuoteDrawer';

export function PublicLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main className="flex-1" id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <SiteFooter />
      <QuoteDrawer />
    </div>
  );
}
