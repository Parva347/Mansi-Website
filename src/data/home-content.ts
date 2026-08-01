import type { HomeAction, HomeCardContent, HomeImageContent } from '../types/home';

interface HomeContent {
  brandIntro: HomeCardContent & { image: HomeImageContent };
  cataloguePreview: HomeCardContent & { action: HomeAction; image: HomeImageContent };
  callToAction: HomeCardContent & { action: HomeAction };
  featuredCollections: { items: readonly (HomeCardContent & { image: HomeImageContent })[]; title: string };
  hero: HomeCardContent & { actions: readonly HomeAction[]; eyebrow: string; image: HomeImageContent };
  manufacturing: { image: HomeImageContent; items: readonly HomeCardContent[]; title: string };
  whyMansi: { items: readonly HomeCardContent[]; title: string };
}

export const homeContent: HomeContent = {
  hero: {
    eyebrow: 'Mansi Industries',
    title: '100% Melamine Tableware for Hospitality Buyers.',
    description: 'Wholesale-only tableware for commercial hospitality.',
    image: { label: 'Hero image placeholder' },
    actions: [
      { label: 'Browse Catalogue', href: '#catalogue-preview' },
      { label: 'Request Quote', href: '#contact' },
    ],
  },
  brandIntro: {
    title: 'A considered foundation for commercial dining.',
    description: 'Brand introduction placeholder.',
    image: { label: 'Brand image placeholder' },
  },
  featuredCollections: {
    title: 'Featured Collections',
    items: [
      { title: 'Collection One', description: 'Collection placeholder.', image: { label: 'Collection one image placeholder' } },
      { title: 'Collection Two', description: 'Collection placeholder.', image: { label: 'Collection two image placeholder' } },
      { title: 'Collection Three', description: 'Collection placeholder.', image: { label: 'Collection three image placeholder' } },
    ],
  },
  manufacturing: {
    title: 'Manufacturing Excellence',
    image: { label: 'Manufacturing image placeholder' },
    items: [
      { title: 'Capability One', description: 'Capability placeholder.' },
      { title: 'Capability Two', description: 'Capability placeholder.' },
      { title: 'Capability Three', description: 'Capability placeholder.' },
    ],
  },
  cataloguePreview: {
    title: 'Product Catalogue',
    description: 'Catalogue preview placeholder.',
    image: { label: 'Catalogue preview image placeholder' },
    action: { label: 'Browse Catalogue', href: '#catalogue-preview' },
  },
  whyMansi: {
    title: 'Why Mansi',
    items: [
      { title: 'Benefit One', description: 'Benefit placeholder.' },
      { title: 'Benefit Two', description: 'Benefit placeholder.' },
      { title: 'Benefit Three', description: 'Benefit placeholder.' },
    ],
  },
  callToAction: {
    title: 'Request a quotation.',
    description: 'Wholesale enquiries only.',
    action: { label: 'Contact Sales', href: '#contact' },
  },
};
