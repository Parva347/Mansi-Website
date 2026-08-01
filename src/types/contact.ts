import type { HomeAction, HomeCardContent, HomeImageContent } from './home';

export interface ContactCardContent {
  label: string;
  value: string;
}

export interface BusinessHoursItem {
  hours: string;
  label: string;
}

export interface ContactContent {
  businessHours: {
    items: BusinessHoursItem[];
    title: string;
  };
  callToAction: HomeCardContent & { action: HomeAction };
  cards: ContactCardContent[];
  hero: HomeCardContent & { eyebrow: string; image: HomeImageContent };
  map: HomeImageContent;
}
