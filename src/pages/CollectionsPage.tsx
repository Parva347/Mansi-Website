import { CallToAction } from '../components/home/CallToAction';
import { CollectionCard } from '../components/home/CollectionCard';
import { FeatureItem } from '../components/home/FeatureItem';
import { ImagePlaceholder } from '../components/home/ImagePlaceholder';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { Heading } from '../components/ui/Heading';
import { Section } from '../components/ui/Section';
import { collectionsContent } from '../data/collections-content';
export function CollectionsPage() {
  return (
    <>
      <section aria-labelledby="collections-title" className="py-section">
        <Container width="wide">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-xs tracking-[var(--token-letter-spacing-label)] text-ink-muted uppercase">
                Collections
              </p>
              <Heading as="h1" className="mt-4" id="collections-title" size="display">
                {collectionsContent.hero.title}
              </Heading>
              <p className="mt-6 max-w-md text-lg leading-[var(--token-line-height-body)] text-ink-muted">
                {collectionsContent.hero.description}
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <ImagePlaceholder aspect="portrait" label={collectionsContent.hero.image.label} />
            </div>
          </div>
        </Container>
      </section>
      <Section aria-labelledby="collection-grid-title">
        <Container width="wide">
          <Heading as="h2" id="collection-grid-title" size="xl">
            Explore Collections
          </Heading>
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {collectionsContent.items.map((item) => (
              <CollectionCard {...item} key={item.title} />
            ))}
          </div>
        </Container>
      </Section>
      <Section aria-labelledby="collection-detail-title" spacing="generous">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <ImagePlaceholder aspect="wide" label={collectionsContent.detail.image.label} />
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <Heading as="h2" id="collection-detail-title" size="xl">
                {collectionsContent.detail.title}
              </Heading>
              <p className="mt-5 text-base leading-[var(--token-line-height-body)] text-ink-muted">
                {collectionsContent.detail.description}
              </p>
              <Button
                className="mt-8"
                href={collectionsContent.detail.action.href}
                variant="secondary"
              >
                {collectionsContent.detail.action.label}
              </Button>
            </div>
          </div>
        </Container>
      </Section>
      <Section aria-labelledby="collections-manufacturing-title">
        <Container>
          <div className="grid gap-10 border-y border-border py-10 lg:grid-cols-12 lg:items-center lg:py-16">
            <div className="lg:col-span-4">
              <Heading as="h2" id="collections-manufacturing-title" size="xl">
                {collectionsContent.manufacturing.title}
              </Heading>
              <div className="mt-8 space-y-5">
                {collectionsContent.manufacturing.items.map((item) => (
                  <FeatureItem {...item} key={item.title} />
                ))}
              </div>
            </div>
            <div className="lg:col-span-7 lg:col-start-6">
              <ImagePlaceholder
                aspect="wide"
                label={collectionsContent.manufacturing.image.label}
              />
            </div>
          </div>
        </Container>
      </Section>
      <CallToAction {...collectionsContent.callToAction} />
    </>
  );
}
