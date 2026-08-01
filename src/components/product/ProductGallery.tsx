import { ImagePlaceholder } from '../home/ImagePlaceholder';

interface ProductGalleryProps {
  primaryImageLabel: string;
  thumbnailImageLabels: string[];
}

export function ProductGallery({ primaryImageLabel, thumbnailImageLabels }: ProductGalleryProps) {
  return (
    <section aria-label="Product gallery">
      <figure>
        <ImagePlaceholder aspect="portrait" label={primaryImageLabel} />
        <figcaption className="mt-3 font-mono text-2xs tracking-[var(--token-letter-spacing-label)] text-ink-subtle uppercase">
          Primary image placeholder
        </figcaption>
      </figure>
      <ul className="mt-5 grid grid-cols-4 gap-3" aria-label="Product thumbnails">
        {thumbnailImageLabels.map((label) => (
          <li key={label}>
            <ImagePlaceholder aspect="square" label={label} />
          </li>
        ))}
      </ul>
    </section>
  );
}
