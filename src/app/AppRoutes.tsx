import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PublicLayout } from '../layouts/PublicLayout';
import { PageLoading } from '../components/ui/PageLoading';

const HomePage = lazy(async () => ({ default: (await import('../pages/HomePage')).HomePage }));
const CollectionsPage = lazy(async () => ({
  default: (await import('../pages/CollectionsPage')).CollectionsPage,
}));
const CataloguePage = lazy(async () => ({
  default: (await import('../pages/CataloguePage')).CataloguePage,
}));
const ProductDetailPage = lazy(async () => ({
  default: (await import('../pages/ProductDetailPage')).ProductDetailPage,
}));
const AboutPage = lazy(async () => ({ default: (await import('../pages/AboutPage')).AboutPage }));
const ContactPage = lazy(async () => ({
  default: (await import('../pages/ContactPage')).ContactPage,
}));
const NotFoundPage = lazy(async () => ({
  default: (await import('../pages/NotFoundPage')).NotFoundPage,
}));

export function AppRoutes() {
  return (
    <Suspense fallback={<PageLoading />}>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="collections" element={<CollectionsPage />} />
          <Route path="catalogue" element={<CataloguePage />} />
          <Route path="catalogue/:productId" element={<ProductDetailPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
