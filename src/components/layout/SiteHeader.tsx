import { NavLink } from 'react-router-dom';

import { publicRoutes } from '../../constants/routes';
import { Container } from '../ui/Container';
import { QuoteButton } from '../quote/QuoteButton';

export function SiteHeader() {
  return (
    <header className="border-b border-border">
      <Container className="flex min-h-18 flex-col justify-center gap-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:py-0">
        <NavLink
          aria-label="Mansi Industries home"
          className="font-display text-lg no-underline"
          to="/"
        >
          Mansi Industries
        </NavLink>
        <div className="flex flex-wrap items-center gap-4">
          <nav aria-label="Primary navigation">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {publicRoutes.map(({ label, path }) => (
                <li key={path || 'home'}>
                  <NavLink
                    className={({ isActive }) =>
                      `text-xs tracking-[var(--token-letter-spacing-label)] uppercase no-underline transition-colors duration-[var(--token-duration-fast)] ease-standard hover:text-ink ${
                        isActive ? 'text-ink underline underline-offset-4' : 'text-ink-muted'
                      }`
                    }
                    to={`/${path}`}
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <QuoteButton />
        </div>
      </Container>
    </header>
  );
}
