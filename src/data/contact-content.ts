import type { ContactContent } from '../types/contact';

export const contactContent: ContactContent = {
  hero: {
    eyebrow: 'Contact',
    title: 'Connect with Mansi',
    description: 'A placeholder for future contact and wholesale enquiry information.',
    image: { label: 'Contact page hero image placeholder' },
  },
  cards: [
    { label: 'Phone', value: 'Phone placeholder' },
    { label: 'Email', value: 'Email placeholder' },
    { label: 'WhatsApp', value: 'WhatsApp placeholder' },
    { label: 'Address', value: 'Address placeholder' },
  ],
  map: { label: 'Map placeholder' },
  businessHours: {
    title: 'Business hours',
    items: [
      { label: 'Availability placeholder', hours: 'Hours placeholder' },
      { label: 'Availability placeholder', hours: 'Hours placeholder' },
    ],
  },
  callToAction: {
    title: 'Explore the catalogue',
    description: 'Continue to the catalogue while future contact details are added.',
    action: { label: 'View catalogue', href: '/catalogue' },
  },
};
