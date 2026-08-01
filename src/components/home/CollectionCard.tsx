import type { HomeCardContent, HomeImageContent } from '../../types/home';
import { Heading } from '../ui/Heading';
import { ImagePlaceholder } from './ImagePlaceholder';

export function CollectionCard({
  description,
  image,
  title,
}: HomeCardContent & { image: HomeImageContent }) {
  return (
    <article className="flex flex-col gap-5">
      <ImagePlaceholder aspect="portrait" label={image.label} />
      <div>
        <Heading as="h3" size="md">
          {title}
        </Heading>
        <p className="mt-3 text-sm leading-[var(--token-line-height-body)] text-ink-muted">
          {description}
        </p>
      </div>
    </article>
  );
}
