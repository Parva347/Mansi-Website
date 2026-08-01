import type { FormEvent } from 'react';

import { Button } from '../ui/Button';
import { Heading } from '../ui/Heading';

export function ContactForm() {
  const preventSubmission = (event: FormEvent<HTMLFormElement>) => event.preventDefault();

  return (
    <form aria-labelledby="contact-form-heading" onSubmit={preventSubmission}>
      <Heading as="h2" id="contact-form-heading" size="lg">
        Send an enquiry
      </Heading>
      <p className="mt-4 text-sm leading-relaxed text-ink-muted">
        This form is a UI foundation for a future contact workflow.
      </p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-ink">Name</span>
          <input
            className="w-full border border-ink/15 bg-surface px-4 py-3 text-sm"
            name="name"
            required
            type="text"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-ink">Company</span>
          <input
            className="w-full border border-ink/15 bg-surface px-4 py-3 text-sm"
            name="company"
            required
            type="text"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-ink">Email</span>
          <input
            className="w-full border border-ink/15 bg-surface px-4 py-3 text-sm"
            name="email"
            required
            type="email"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-ink">Phone</span>
          <input
            className="w-full border border-ink/15 bg-surface px-4 py-3 text-sm"
            name="phone"
            required
            type="tel"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="mb-2 block text-sm font-medium text-ink">Message</span>
          <textarea
            className="min-h-32 w-full resize-y border border-ink/15 bg-surface px-4 py-3 text-sm"
            name="message"
            required
          />
        </label>
      </div>
      <Button className="mt-7" type="submit">
        Send enquiry
      </Button>
    </form>
  );
}
