import { Link } from 'react-router-dom';
import { CatalogueToolbar } from '../components/catalogue/CatalogueToolbar';
import { Pagination } from '../components/catalogue/Pagination';
import { ProductGrid } from '../components/catalogue/ProductGrid';
import { CallToAction } from '../components/home/CallToAction';
import { Container } from '../components/ui/Container';
import { Heading } from '../components/ui/Heading';
import { Section } from '../components/ui/Section';
import { catalogueContent } from '../data/catalogue-content';

export function CataloguePage() {
  const { hero, toolbar, products, emptyState, pagination, callToAction } = catalogueContent;
  return (
    <>
      <Section spacing="generous">
        <Container>
          <nav aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 font-mono text-xs tracking-[0.1em] text-ink-muted">
              <li>
                <Link className="transition-colors hover:text-ink focus-visible:text-ink" to="/">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Catalogue</li>
            </ol>
          </nav>
          <div className="mt-10 max-w-3xl sm:mt-14">
            <p className="font-mono text-xs tracking-[0.16em] text-ink-muted">{hero.eyebrow}</p>
            <Heading as="h1" className="mt-5" size="xl">
              {hero.title}
            </Heading>
            <p className="mt-6 max-w-prose text-base leading-relaxed text-ink-muted sm:text-lg">
              {hero.description}
            </p>
          </div>
        </Container>
      </Section>
      <Section spacing="default">
        <Container>
          <CatalogueToolbar content={toolbar} />
          <div className="mt-10 sm:mt-14">
            <ProductGrid emptyState={emptyState} products={products} />
          </div>
          <div className="mt-10 sm:mt-14">
            <Pagination {...pagination} />
          </div>
        </Container>
      </Section>
      <CallToAction {...callToAction} />
    </>
  );
}
