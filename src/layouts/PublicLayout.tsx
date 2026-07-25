import { Outlet } from 'react-router-dom';

import { SiteFooter } from '../components/layout/SiteFooter';
import { SiteHeader } from '../components/layout/SiteHeader';

export function PublicLayout() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}
