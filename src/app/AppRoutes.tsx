import { Route, Routes } from 'react-router-dom';

import { PublicLayout } from '../layouts/PublicLayout';
import { publicRoutes } from '../constants/routes';
import { HomePage } from '../pages/HomePage';
import { RouteSlot } from './RouteSlot';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        {publicRoutes
          .filter(({ path }) => path !== '')
          .map(({ path }) => (
            <Route key={path} path={path} element={<RouteSlot />} />
          ))}
      </Route>
    </Routes>
  );
}
