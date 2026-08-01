import { ImagePlaceholder } from '../home/ImagePlaceholder';

interface MapPlaceholderProps {
  label: string;
}

export function MapPlaceholder({ label }: MapPlaceholderProps) {
  return (
    <div>
      <ImagePlaceholder aspect="wide" label={label} />
      <p className="mt-3 font-mono text-2xs tracking-[var(--token-letter-spacing-label)] text-ink-subtle uppercase">
        Map placeholder
      </p>
    </div>
  );
}
