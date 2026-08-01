import type { AboutContent } from '../types/about';

export const aboutContent: AboutContent = {
  hero: {
    eyebrow: 'About',
    title: 'A foundation for Mansi’s story',
    description: 'A considered placeholder for future company introduction content.',
    image: { label: 'About page hero image placeholder' },
  },
  companyOverview: {
    title: 'Company overview',
    description: 'A placeholder for a concise introduction to the company and its future direction.',
    image: { label: 'Company overview image placeholder' },
  },
  manufacturing: {
    title: 'Manufacturing excellence',
    description: 'A framework for future capability information.',
    image: { label: 'Manufacturing image placeholder' },
    items: [
      {
        title: 'Capability placeholder A',
        description: 'A placeholder for a future manufacturing capability.',
      },
      {
        title: 'Capability placeholder B',
        description: 'A placeholder for a future manufacturing capability.',
      },
      {
        title: 'Capability placeholder C',
        description: 'A placeholder for a future manufacturing capability.',
      },
    ],
  },
  qualityCommitment: {
    title: 'Quality commitment',
    description: 'A placeholder for future quality principles and supporting information.',
    image: { label: 'Quality commitment image placeholder' },
  },
  industries: {
    title: 'Industries served',
    items: ['Hospitality', 'Restaurants', 'Hotels', 'Catering', 'Institutions'],
  },
  callToAction: {
    title: 'Start a conversation',
    description: 'A clear next step for future wholesale enquiries.',
    action: { label: 'Contact Mansi', href: '/contact' },
  },
};
