import type { ContactCardContent } from '../../types/contact';
import { Heading } from '../ui/Heading';

interface ContactCardProps {
  contact: ContactCardContent;
}

export function ContactCard({ contact }: ContactCardProps) {
  return (
    <article className="border border-ink/10 bg-surface p-6 sm:p-7">
      <p className="font-mono text-xs tracking-[0.14em] text-ink-muted uppercase">
        {contact.label}
      </p>
      <Heading as="h2" className="mt-4" size="sm">
        {contact.value}
      </Heading>
    </article>
  );
}
