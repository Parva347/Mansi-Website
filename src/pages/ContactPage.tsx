import { ContactCard } from '../components/contact/ContactCard';
import { ContactForm } from '../components/contact/ContactForm';
import { MapPlaceholder } from '../components/contact/MapPlaceholder';
import { CallToAction } from '../components/home/CallToAction';
import { ImagePlaceholder } from '../components/home/ImagePlaceholder';
import { Container } from '../components/ui/Container';
import { Heading } from '../components/ui/Heading';
import { Section } from '../components/ui/Section';
import { contactContent } from '../data/contact-content';

export function ContactPage() {
  return (
    <>
      <Section aria-labelledby="contact-page-title" spacing="generous">
        <Container width="wide">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="font-mono text-xs tracking-[0.16em] text-ink-muted uppercase">
                {contactContent.hero.eyebrow}
              </p>
              <Heading as="h1" className="mt-5" id="contact-page-title" size="display">
                {contactContent.hero.title}
              </Heading>
              <p className="mt-6 max-w-prose text-lg leading-relaxed text-ink-muted">
                {contactContent.hero.description}
              </p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <ImagePlaceholder aspect="portrait" label={contactContent.hero.image.label} />
            </div>
          </div>
        </Container>
      </Section>

      <Section aria-labelledby="contact-methods-heading">
        <Container width="wide">
          <Heading as="h2" id="contact-methods-heading" size="xl">
            Contact methods
          </Heading>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {contactContent.cards.map((card) => (
              <ContactCard contact={card} key={card.label} />
            ))}
          </div>
        </Container>
      </Section>

      <Section spacing="generous">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
            <div className="lg:col-span-4 lg:col-start-9">
              <MapPlaceholder label={contactContent.map.label} />
              <section
                aria-labelledby="business-hours-heading"
                className="mt-10 border-y border-ink/10 py-7"
              >
                <Heading as="h2" id="business-hours-heading" size="md">
                  {contactContent.businessHours.title}
                </Heading>
                <dl className="mt-5 space-y-4">
                  {contactContent.businessHours.items.map((item, index) => (
                    <div
                      className="flex items-baseline justify-between gap-5"
                      key={`${item.label}-${index}`}
                    >
                      <dt className="text-sm text-ink-muted">{item.label}</dt>
                      <dd className="font-mono text-xs tracking-[0.08em] text-ink">{item.hours}</dd>
                    </div>
                  ))}
                </dl>
              </section>
            </div>
          </div>
        </Container>
      </Section>

      <CallToAction {...contactContent.callToAction} />
    </>
  );
}
