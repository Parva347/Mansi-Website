import { LayoutPlaceholder } from '../components/home/LayoutPlaceholder';
import { Button } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { Heading } from '../components/ui/Heading';
import { Section } from '../components/ui/Section';

export function HomePage() {
  return (
    <>
      <section aria-labelledby="home-hero-heading" className="overflow-hidden py-section">
        <Container width="wide">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-5">
              <p className="mb-4 text-xs tracking-[var(--token-letter-spacing-label)] text-ink-muted uppercase">
                Mansi Industries
              </p>
              <Heading as="h1" id="home-hero-heading" size="display">
                100% Melamine Tableware for Hospitality Buyers.
              </Heading>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <LayoutPlaceholder aspect="portrait" className="mx-auto max-w-xl" />
            </div>
          </div>
        </Container>
      </section>

      <Section aria-labelledby="brand-introduction-heading" spacing="compact">
        <Container>
          <div className="grid gap-6 border-y border-border py-10 md:grid-cols-12 md:items-end">
            <div className="md:col-span-4">
              <p className="text-xs tracking-[var(--token-letter-spacing-label)] text-ink-muted uppercase">
                Brand introduction
              </p>
            </div>
            <div className="md:col-span-7 md:col-start-6">
              <Heading as="h2" id="brand-introduction-heading" size="xl">
                Premium Indian manufacturer of melamine tableware for commercial hospitality.
              </Heading>
            </div>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="featured-collections-heading">
        <Container width="wide">
          <div className="mb-10">
            <Heading as="h2" id="featured-collections-heading" size="xl">
              Featured Collections
            </Heading>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <LayoutPlaceholder aspect="portrait" />
            <LayoutPlaceholder aspect="portrait" className="sm:translate-y-8" />
            <LayoutPlaceholder aspect="portrait" className="lg:translate-y-16" />
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="manufacturing-excellence-heading" spacing="generous">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <LayoutPlaceholder aspect="wide" />
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <p className="mb-4 text-xs tracking-[var(--token-letter-spacing-label)] text-ink-muted uppercase">
                Manufacturing
              </p>
              <Heading as="h2" id="manufacturing-excellence-heading" size="xl">
                Manufacturing Excellence
              </Heading>
            </div>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="catalogue-preview-heading">
        <Container width="wide">
          <div className="mb-10 grid gap-4 md:grid-cols-12 md:items-end">
            <div className="md:col-span-7">
              <Heading as="h2" id="catalogue-preview-heading" size="xl">
                Product Catalogue
              </Heading>
            </div>
            <p className="font-mono text-xs text-ink-subtle md:col-span-3 md:col-start-10">
              Preview
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <LayoutPlaceholder aspect="square" />
            <LayoutPlaceholder aspect="square" />
            <LayoutPlaceholder aspect="square" />
            <LayoutPlaceholder aspect="square" />
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="why-mansi-heading" spacing="generous">
        <Container>
          <div className="grid gap-10 border-y border-border py-10 lg:grid-cols-12 lg:py-16">
            <div className="lg:col-span-4">
              <Heading as="h2" id="why-mansi-heading" size="xl">
                Why Mansi
              </Heading>
            </div>
            <div className="grid gap-4 sm:grid-cols-3 lg:col-span-7 lg:col-start-6">
              <LayoutPlaceholder aspect="square" />
              <LayoutPlaceholder aspect="square" />
              <LayoutPlaceholder aspect="square" />
            </div>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="home-cta-heading" spacing="generous">
        <Container width="narrow">
          <div className="flex flex-col items-start gap-8 border-l border-border-strong pl-6 sm:pl-10">
            <Heading as="h2" id="home-cta-heading" size="xl">
              Request Quote
            </Heading>
            <Button disabled>Request Quote</Button>
          </div>
        </Container>
      </Section>
    </>
  );
}
