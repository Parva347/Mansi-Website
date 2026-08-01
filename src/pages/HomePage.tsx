import { BrandIntro } from '../components/home/BrandIntro';
import { CallToAction } from '../components/home/CallToAction';
import { CataloguePreview } from '../components/home/CataloguePreview';
import { FeaturedCollections } from '../components/home/FeaturedCollections';
import { Hero } from '../components/home/Hero';
import { Manufacturing } from '../components/home/Manufacturing';
import { WhyMansi } from '../components/home/WhyMansi';
import { homeContent } from '../data/home-content';
export function HomePage() {
  return (
    <>
      <Hero {...homeContent.hero} />
      <BrandIntro {...homeContent.brandIntro} />
      <FeaturedCollections {...homeContent.featuredCollections} />
      <Manufacturing {...homeContent.manufacturing} />
      <CataloguePreview {...homeContent.cataloguePreview} />
      <WhyMansi {...homeContent.whyMansi} />
      <CallToAction {...homeContent.callToAction} />
    </>
  );
}
