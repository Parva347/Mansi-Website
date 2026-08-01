import type { HomeAction, HomeCardContent, HomeImageContent } from './home';

export interface AboutContent {
  callToAction: HomeCardContent & { action: HomeAction };
  companyOverview: HomeCardContent & { image: HomeImageContent };
  hero: HomeCardContent & { eyebrow: string; image: HomeImageContent };
  industries: {
    items: string[];
    title: string;
  };
  manufacturing: HomeCardContent & {
    image: HomeImageContent;
    items: HomeCardContent[];
  };
  qualityCommitment: HomeCardContent & { image: HomeImageContent };
}
