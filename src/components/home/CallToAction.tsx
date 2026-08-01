import type { HomeAction, HomeCardContent } from '../../types/home';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Section } from '../ui/Section';
export function CallToAction({
  action,
  description,
  title,
}: HomeCardContent & { action: HomeAction }) {
  return (
    <Section aria-labelledby="contact-heading" id="contact" spacing="generous">
      <Container width="narrow">
        <div className="border-y border-border py-12 text-center sm:py-16">
          <Heading as="h2" id="contact-heading" size="xl">
            {title}
          </Heading>
          <p className="mt-5 text-base text-ink-muted">{description}</p>
          <Button className="mt-8" href={action.href}>
            {action.label}
          </Button>
        </div>
      </Container>
    </Section>
  );
}
