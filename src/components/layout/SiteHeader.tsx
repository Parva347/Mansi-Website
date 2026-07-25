import { NavLink } from 'react-router-dom';

import { publicRoutes } from '../../constants/routes';

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-container site-header__content">
        <NavLink aria-label="Mansi Industries home" className="site-wordmark" to="/">
          Mansi Industries
        </NavLink>
        <nav aria-label="Primary navigation">
          <ul className="site-navigation">
            {publicRoutes.map(({ label, path }) => (
              <li key={path || 'home'}>
                <NavLink className="site-navigation__link" to={`/${path}`}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
