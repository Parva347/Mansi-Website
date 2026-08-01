import { Link } from 'react-router-dom';

import { Container } from '../components/ui/Container';
import { Heading } from '../components/ui/Heading';
import { Section } from '../components/ui/Section';

export function NotFoundPage() {
  return (
    <Section aria-labelledby="not-found-heading" spacing="generous">
      <Container width="narrow">
        <p className="font-mono text-xs tracking-[0.16em] text-ink-muted uppercase">404</p>
        <Heading as="h1" className="mt-5" id="not-found-heading" size="display">
          Page not found
        </Heading>
        <p className="mt-6 max-w-prose text-base leading-relaxed text-ink-muted">
          The requested page is unavailable or has moved.
        </p>
        <Link
          className="mt-8 inline-flex min-h-11 items-center border border-ink bg-ink px-5 text-sm font-medium tracking-[var(--token-letter-spacing-label)] text-canvas uppercase transition-colors hover:border-accent-hover hover:bg-accent-hover"
          to="/"
        >
          Return home
        </Link>
      </Container>
    </Section>
  );
}
