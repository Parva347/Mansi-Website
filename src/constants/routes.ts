export interface PublicRoute {
  label: string;
  path: string;
}

export const publicRoutes: readonly PublicRoute[] = [
  { label: 'Home', path: '' },
  { label: 'Collections', path: 'collections' },
  { label: 'Catalogue', path: 'catalogue' },
  { label: 'About', path: 'about' },
  { label: 'Contact', path: 'contact' },
];
