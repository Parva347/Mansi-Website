import type { HomeCardContent, HomeImageContent } from '../../types/home';
import { Container } from '../ui/Container';
import { Heading } from '../ui/Heading';
import { Section } from '../ui/Section';
import { CollectionCard } from './CollectionCard';
export function FeaturedCollections({
  items,
  title,
}: {
  items: readonly (HomeCardContent & { image: HomeImageContent })[];
  title: string;
}) {
  return (
    <Section aria-labelledby="collections-heading">
      <Container width="wide">
        <Heading as="h2" id="collections-heading" size="xl">
          {title}
        </Heading>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <CollectionCard {...item} key={item.title} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
