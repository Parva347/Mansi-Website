import type { HomeCardContent } from '../../types/home';
import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Section } from '../ui/Section';
import { IconCard } from './IconCard';
export function WhyMansi({ items, title }: { items: readonly HomeCardContent[]; title: string }) {
  return (
    <Section aria-labelledby="why-mansi-heading" spacing="generous">
      <Container>
        <div className="border-y border-border py-10 lg:py-16">
          <Heading as="h2" id="why-mansi-heading" size="xl">
            {title}
          </Heading>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <IconCard {...item} key={item.title} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
