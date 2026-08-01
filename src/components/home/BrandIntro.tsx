import type { HomeCardContent, HomeImageContent } from '../../types/home';
import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Section } from '../ui/Section';
import { ImagePlaceholder } from './ImagePlaceholder';
export function BrandIntro({
  description,
  image,
  title,
}: HomeCardContent & { image: HomeImageContent }) {
  return (
    <Section aria-labelledby="brand-intro-heading" spacing="compact">
      <Container>
        <div className="grid gap-8 border-y border-border py-10 md:grid-cols-2 md:items-center">
          <ImagePlaceholder aspect="landscape" label={image.label} />
          <div>
            <p className="text-xs tracking-[var(--token-letter-spacing-label)] text-ink-muted uppercase">
              Brand introduction
            </p>
            <Heading as="h2" className="mt-4" id="brand-intro-heading" size="xl">
              {title}
            </Heading>
            <p className="mt-5 text-base leading-[var(--token-line-height-body)] text-ink-muted">
              {description}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
