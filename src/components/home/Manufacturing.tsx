import type { HomeCardContent, HomeImageContent } from '../../types/home';
import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Section } from '../ui/Section';
import { FeatureItem } from './FeatureItem';
import { ImagePlaceholder } from './ImagePlaceholder';
export function Manufacturing({
  image,
  items,
  title,
}: {
  image: HomeImageContent;
  items: readonly HomeCardContent[];
  title: string;
}) {
  return (
    <Section aria-labelledby="manufacturing-heading" spacing="generous">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="order-2 lg:order-1 lg:col-span-7">
            <ImagePlaceholder aspect="wide" label={image.label} />
          </div>
          <div className="order-1 lg:order-2 lg:col-span-4 lg:col-start-9">
            <p className="text-xs tracking-[var(--token-letter-spacing-label)] text-ink-muted uppercase">
              Manufacturing
            </p>
            <Heading as="h2" className="mt-4" id="manufacturing-heading" size="xl">
              {title}
            </Heading>
            <div className="mt-8 space-y-5">
              {items.map((item) => (
                <FeatureItem {...item} key={item.title} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
