import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { ImagePlaceholder } from './ImagePlaceholder';
import type { HomeAction, HomeCardContent, HomeImageContent } from '../../types/home';
export function Hero({
  actions,
  description,
  eyebrow,
  image,
  title,
}: HomeCardContent & { actions: readonly HomeAction[]; eyebrow: string; image: HomeImageContent }) {
  return (
    <section aria-labelledby="hero-heading" className="overflow-hidden py-section">
      <Container width="wide">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            <p className="mb-4 text-xs tracking-[var(--token-letter-spacing-label)] text-ink-muted uppercase">
              {eyebrow}
            </p>
            <Heading as="h1" id="hero-heading" size="display">
              {title}
            </Heading>
            <p className="mt-6 max-w-md text-lg leading-[var(--token-line-height-body)] text-ink-muted">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {actions.map((action, index) => (
                <Button
                  href={action.href}
                  key={action.href}
                  variant={index === 0 ? 'primary' : 'secondary'}
                >
                  {action.label}
                </Button>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <ImagePlaceholder aspect="portrait" className="mx-auto max-w-xl" label={image.label} />
          </div>
        </div>
      </Container>
    </section>
  );
}
