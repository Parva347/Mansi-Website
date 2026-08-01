import { Route, Routes } from 'react-router-dom';

import { PublicLayout } from '../layouts/PublicLayout';
import { publicRoutes } from '../constants/routes';
import { CollectionsPage } from '../pages/CollectionsPage';
import { HomePage } from '../pages/HomePage';
import { RouteSlot } from './RouteSlot';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="collections" element={<CollectionsPage />} />
        {publicRoutes
          .filter(({ path }) => path !== '' && path !== 'collections')
          .map(({ path }) => (
            <Route key={path} path={path} element={<RouteSlot />} />
          ))}
      </Route>
    </Routes>
  );
}
