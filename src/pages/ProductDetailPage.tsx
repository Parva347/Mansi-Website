import { Link, useParams } from 'react-router-dom';
import { CallToAction } from '../components/home/CallToAction';
import { ProductGallery } from '../components/product/ProductGallery';
import { ProductInfo } from '../components/product/ProductInfo';
import { QuoteButton } from '../components/quote/QuoteButton';
import { RelatedProducts } from '../components/product/RelatedProducts';
import { SpecificationTable } from '../components/product/SpecificationTable';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { Heading } from '../components/ui/Heading';
import { productDetailCallToAction } from '../data/product-detail-content';
import { collections, products } from '../data/catalogue';
import type { CataloguePlaceholderProduct } from '../types/catalogue-ui';
import type { ProductSpecification } from '../types/product-detail';

const collectionById = new Map(collections.map((collection) => [collection.id, collection]));

export function ProductDetailPage() {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((item) => item.id === productId);

  if (!product) {
    return (
      <Section spacing="generous">
        <Container width="narrow">
          <Heading as="h1" size="lg">
            Product not found
          </Heading>
          <p className="mt-4 text-ink-muted">
            We couldn't find that product. It may have been renamed or removed from the catalogue.
          </p>
          <Link className="mt-6 inline-block text-sm underline" to="/catalogue">
            Back to catalogue
          </Link>
        </Container>
      </Section>
    );
  }

  const collection = collectionById.get(product.collectionId);

  const specifications: ProductSpecification[] = [
    { label: 'Product code', value: product.sku },
    { label: 'Collection', value: collection?.name ?? '—' },
    ...(product.dimensions ? [{ label: 'Dimensions', value: product.dimensions }] : []),
    ...(product.referencePrice
      ? [{ label: 'M.R.P (reference)', value: `₹${product.referencePrice}` }]
      : []),
  ];

  const relatedProducts: CataloguePlaceholderProduct[] = products
    .filter((item) => item.collectionId === product.collectionId && item.id !== product.id)
    .slice(0, 4)
    .map((item) => ({
      id: item.id,
      title: item.name,
      code: item.sku,
      category: collection?.name ?? '',
      imageLabel: `${item.name} image`,
      image: item.image,
      dimensions: item.dimensions,
      referencePrice: item.referencePrice,
    }));

  return (
    <>
      <Section spacing="generous">
        <Container>
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 font-mono text-xs tracking-[0.1em] text-ink-muted uppercase">
              <li>
                <Link className="transition-colors hover:text-ink focus-visible:text-ink" to="/">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link
                  className="transition-colors hover:text-ink focus-visible:text-ink"
                  to="/catalogue"
                >
                  Catalogue
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">{product.name}</li>
            </ol>
          </nav>
          <div className="mt-10 grid gap-12 lg:mt-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16 xl:gap-24">
            <ProductGallery image={product.image} label={product.name} />
            <div>
              <ProductInfo
                product={{
                  id: product.id,
                  title: product.name,
                  code: product.sku,
                  collection: collection?.name ?? '—',
                  category: collection?.description ?? '—',
                  description: `${product.name} from the ${collection?.name ?? ''} collection. Manufactured in unbreakable melamine, available for bulk wholesale order.`,
                }}
              />
              <QuoteButton
                className="mt-8"
                product={{ id: product.id, name: product.name, code: product.sku }}
              />
            </div>
          </div>
        </Container>
      </Section>
      <Section spacing="default">
        <Container width="narrow">
          <SpecificationTable specifications={specifications} />
        </Container>
      </Section>
      {relatedProducts.length > 0 ? (
        <Section spacing="generous">
          <Container>
            <RelatedProducts products={relatedProducts} />
          </Container>
        </Section>
      ) : null}
      <CallToAction {...productDetailCallToAction} />
    </>
  );
}
