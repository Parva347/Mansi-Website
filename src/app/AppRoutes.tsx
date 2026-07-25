import { Route, Routes } from 'react-router-dom';

import { PublicLayout } from '../layouts/PublicLayout';
import { RouteSlot } from './RouteSlot';
import { publicRoutes } from '../constants/routes';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        {publicRoutes.map(({ path }) => (
          <Route
            key={path || 'home'}
            index={path === ''}
            path={path || undefined}
            element={<RouteSlot />}
          />
        ))}
      </Route>
    </Routes>
  );
}
