import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { getPageMetadata, siteName } from '../../constants/seo';

function setMetaTag(attribute: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attribute}="${key}"]`;
  const metaTag =
    document.head.querySelector<HTMLMetaElement>(selector) ?? document.createElement('meta');

  metaTag.setAttribute(attribute, key);
  metaTag.content = content;
  if (!metaTag.parentNode) document.head.append(metaTag);
}

export function PageMetadata() {
  const { pathname } = useLocation();
  const metadata = getPageMetadata(pathname);

  useEffect(() => {
    const canonicalUrl = `${window.location.origin}${pathname}`;
    const canonicalLink =
      document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]') ??
      document.createElement('link');

    document.title = metadata.title;
    canonicalLink.rel = 'canonical';
    canonicalLink.href = canonicalUrl;
    if (!canonicalLink.parentNode) document.head.append(canonicalLink);

    setMetaTag('name', 'description', metadata.description);
    setMetaTag('name', 'robots', 'index,follow');
    setMetaTag('property', 'og:type', 'website');
    setMetaTag('property', 'og:site_name', siteName);
    setMetaTag('property', 'og:title', metadata.title);
    setMetaTag('property', 'og:description', metadata.description);
    setMetaTag('property', 'og:url', canonicalUrl);
    setMetaTag('name', 'twitter:card', 'summary');
    setMetaTag('name', 'twitter:title', metadata.title);
    setMetaTag('name', 'twitter:description', metadata.description);
  }, [metadata.description, metadata.title, pathname]);

  return (
    <p aria-atomic="true" aria-live="polite" className="sr-only" role="status">
      {metadata.title}
    </p>
  );
}
