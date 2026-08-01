import type { HomeAction, HomeCardContent, HomeImageContent } from '../../types/home';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Section } from '../ui/Section';
import { ImagePlaceholder } from './ImagePlaceholder';
export function CataloguePreview({
  action,
  description,
  image,
  title,
}: HomeCardContent & { action: HomeAction; image: HomeImageContent }) {
  return (
    <Section aria-labelledby="catalogue-preview-heading" id="catalogue-preview">
      <Container width="wide">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <Heading as="h2" id="catalogue-preview-heading" size="xl">
              {title}
            </Heading>
            <p className="mt-5 text-base leading-[var(--token-line-height-body)] text-ink-muted">
              {description}
            </p>
            <Button className="mt-8" href={action.href} variant="secondary">
              {action.label}
            </Button>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ImagePlaceholder aspect="wide" label={image.label} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
