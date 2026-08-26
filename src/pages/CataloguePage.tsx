import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CatalogueToolbar, type SortOption } from '../components/catalogue/CatalogueToolbar';
import { ProductGrid } from '../components/catalogue/ProductGrid';
import { CallToAction } from '../components/home/CallToAction';
import { Container } from '../components/ui/Container';
import { Heading } from '../components/ui/Heading';
import { Section } from '../components/ui/Section';
import { catalogueContent } from '../data/catalogue-content';
import { collections, products } from '../data/catalogue';
import type { CataloguePlaceholderProduct } from '../types/catalogue-ui';

const collectionOptions = collections
  .map((collection) => ({ id: collection.id, name: collection.name }))
  .sort((a, b) => a.name.localeCompare(b.name));

const collectionNameById = new Map(collections.map((collection) => [collection.id, collection.name]));

export function CataloguePage() {
  const { hero, emptyState, callToAction } = catalogueContent;
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const [selectedCollection, setSelectedCollection] = useState(searchParams.get('collection') ?? '');
  const [sort, setSort] = useState<SortOption>('name-asc');

  const handleCollectionChange = (collectionId: string) => {
    setSelectedCollection(collectionId);
    const nextParams = new URLSearchParams(searchParams);
    if (collectionId) nextParams.set('collection', collectionId);
    else nextParams.delete('collection');
    setSearchParams(nextParams, { replace: true });
  };

  const viewProducts: CataloguePlaceholderProduct[] = useMemo(() => {
    const query = search.trim().toLowerCase();

    const filtered = products.filter((product) => {
      if (selectedCollection && product.collectionId !== selectedCollection) return false;
      if (!query) return true;
      return (
        product.name.toLowerCase().includes(query) || product.sku.toLowerCase().includes(query)
      );
    });

    const sorted = [...filtered].sort((a, b) => {
      switch (sort) {
        case 'name-desc':
          return b.name.localeCompare(a.name);
        case 'price-asc':
          return (a.referencePrice ?? 0) - (b.referencePrice ?? 0);
        case 'price-desc':
          return (b.referencePrice ?? 0) - (a.referencePrice ?? 0);
        case 'name-asc':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return sorted.map((product) => ({
      id: product.id,
      title: product.name,
      code: product.sku,
      category: collectionNameById.get(product.collectionId) ?? '',
      imageLabel: `${product.name} image`,
      image: product.image,
      dimensions: product.dimensions,
      referencePrice: product.referencePrice,
    }));
  }, [search, selectedCollection, sort]);

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
            <p className="mt-3 text-xs text-ink-muted">
              Prices shown are M.R.P. (suggested retail) for reference. Wholesale rates are quoted
              separately based on order volume — use the quote list to request yours.
            </p>
          </div>
        </Container>
      </Section>
      <Section spacing="default">
        <Container>
          <CatalogueToolbar
            collectionOptions={collectionOptions}
            onCollectionChange={handleCollectionChange}
            onSearchChange={setSearch}
            onSortChange={setSort}
            resultCount={viewProducts.length}
            searchValue={search}
            selectedCollection={selectedCollection}
            sortValue={sort}
          />
          <div className="mt-10 sm:mt-14">
            <ProductGrid emptyState={emptyState} products={viewProducts} />
          </div>
        </Container>
      </Section>
      <CallToAction {...callToAction} />
    </>
  );
}
