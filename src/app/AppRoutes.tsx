import { Route, Routes } from 'react-router-dom';

import { PublicLayout } from '../layouts/PublicLayout';
import { publicRoutes } from '../constants/routes';
import { CataloguePage } from '../pages/CataloguePage';
import { CollectionsPage } from '../pages/CollectionsPage';
import { AboutPage } from '../pages/AboutPage';
import { ContactPage } from '../pages/ContactPage';
import { HomePage } from '../pages/HomePage';
import { ProductDetailPage } from '../pages/ProductDetailPage';
import { RouteSlot } from './RouteSlot';

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="collections" element={<CollectionsPage />} />
        <Route path="catalogue" element={<CataloguePage />} />
        <Route path="catalogue/:productId" element={<ProductDetailPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="contact" element={<ContactPage />} />
        {publicRoutes
          .filter(
            ({ path }) =>
              path !== '' &&
              path !== 'collections' &&
              path !== 'catalogue' &&
              path !== 'about' &&
              path !== 'contact',
          )
          .map(({ path }) => (
            <Route key={path} path={path} element={<RouteSlot />} />
          ))}
      </Route>
    </Routes>
  );
}
