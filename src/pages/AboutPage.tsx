import { IndustryList } from '../components/about/IndustryList';
import { CallToAction } from '../components/home/CallToAction';
import { FeatureItem } from '../components/home/FeatureItem';
import { ImagePlaceholder } from '../components/home/ImagePlaceholder';
import { Container } from '../components/ui/Container';
import { Heading } from '../components/ui/Heading';
import { Section } from '../components/ui/Section';
import { aboutContent } from '../data/about-content';

export function AboutPage() {
  return (
    <>
      <Section aria-labelledby="about-title" spacing="generous">
        <Container width="wide">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="font-mono text-xs tracking-[0.16em] text-ink-muted uppercase">
                {aboutContent.hero.eyebrow}
              </p>
              <Heading as="h1" className="mt-5" id="about-title" size="display">
                {aboutContent.hero.title}
              </Heading>
              <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-muted">
                {aboutContent.hero.description}
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <ImagePlaceholder aspect="portrait" label={aboutContent.hero.image.label} />
            </div>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="company-overview-heading">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-6 lg:order-2">
              <ImagePlaceholder
                aspect="landscape"
                label={aboutContent.companyOverview.image.label}
              />
            </div>
            <div className="lg:col-span-5">
              <Heading as="h2" id="company-overview-heading" size="xl">
                {aboutContent.companyOverview.title}
              </Heading>
              <p className="mt-6 max-w-prose text-base leading-relaxed text-ink-muted">
                {aboutContent.companyOverview.description}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="manufacturing-heading" spacing="generous">
        <Container>
          <div className="grid gap-10 border-y border-ink/10 py-10 lg:grid-cols-12 lg:items-center lg:py-16">
            <div className="lg:col-span-4">
              <Heading as="h2" id="manufacturing-heading" size="xl">
                {aboutContent.manufacturing.title}
              </Heading>
              <p className="mt-5 text-base leading-relaxed text-ink-muted">
                {aboutContent.manufacturing.description}
              </p>
              <div className="mt-8 space-y-5">
                {aboutContent.manufacturing.items.map((item) => (
                  <FeatureItem {...item} key={item.title} />
                ))}
              </div>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <ImagePlaceholder aspect="wide" label={aboutContent.manufacturing.image.label} />
            </div>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="quality-commitment-heading">
        <Container width="wide">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
            <div className="lg:col-span-6">
              <ImagePlaceholder
                aspect="landscape"
                label={aboutContent.qualityCommitment.image.label}
              />
            </div>
            <div className="lg:col-span-5 lg:col-start-8">
              <Heading as="h2" id="quality-commitment-heading" size="xl">
                {aboutContent.qualityCommitment.title}
              </Heading>
              <p className="mt-6 max-w-prose text-base leading-relaxed text-ink-muted">
                {aboutContent.qualityCommitment.description}
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="industries-served-heading">
        <Container width="wide">
          <Heading as="h2" id="industries-served-heading" size="xl">
            {aboutContent.industries.title}
          </Heading>
          <div className="mt-8">
            <IndustryList items={aboutContent.industries.items} />
          </div>
        </Container>
      </Section>

      <CallToAction {...aboutContent.callToAction} />
    </>
  );
}
