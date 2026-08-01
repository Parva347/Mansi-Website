export interface PageMetadataContent {
  description: string;
  title: string;
}

const placeholderDescription = 'Placeholder metadata for future Mansi Industries website content.';

export const siteName = 'Mansi Industries';

export const pageMetadata: Record<string, PageMetadataContent> = {
  '/': { title: siteName, description: placeholderDescription },
  '/about': { title: `About | ${siteName}`, description: placeholderDescription },
  '/catalogue': { title: `Catalogue | ${siteName}`, description: placeholderDescription },
  '/collections': { title: `Collections | ${siteName}`, description: placeholderDescription },
  '/contact': { title: `Contact | ${siteName}`, description: placeholderDescription },
  '/not-found': { title: `Page not found | ${siteName}`, description: placeholderDescription },
};

export function getPageMetadata(pathname: string): PageMetadataContent {
  if (pathname.startsWith('/catalogue/')) {
    return { title: `Product detail | ${siteName}`, description: placeholderDescription };
  }

  return pageMetadata[pathname] ?? pageMetadata['/not-found'];
}
