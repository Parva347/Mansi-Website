import type { ProductImage } from '../../types/catalogue';
import { ImagePlaceholder } from '../home/ImagePlaceholder';

interface ProductGalleryProps {
  image?: ProductImage;
  label: string;
}

export function ProductGallery({ image, label }: ProductGalleryProps) {
  return (
    <section aria-label="Product gallery">
      <figure>
        {image ? (
          <img
            alt={image.alt}
            className="aspect-[4/5] w-full border border-border object-cover"
            height={image.height}
            src={image.src}
            width={image.width}
          />
        ) : (
          <ImagePlaceholder aspect="portrait" label={`${label} image`} />
        )}
      </figure>
    </section>
  );
}
