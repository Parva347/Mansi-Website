import { Link } from 'react-router-dom';
import { CallToAction } from '../components/home/CallToAction';
import { ProductGallery } from '../components/product/ProductGallery';
import { ProductInfo } from '../components/product/ProductInfo';
import { QuoteButton } from '../components/quote/QuoteButton';
import { RelatedProducts } from '../components/product/RelatedProducts';
import { SpecificationTable } from '../components/product/SpecificationTable';
import { Container } from '../components/ui/Container';
import { Section } from '../components/ui/Section';
import { productDetailCallToAction, productDetailContent } from '../data/product-detail-content';

export function ProductDetailPage() {
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
              <li aria-current="page">Product detail</li>
            </ol>
          </nav>
          <div className="mt-10 grid gap-12 lg:mt-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-16 xl:gap-24">
            <ProductGallery {...productDetailContent.gallery} />
            <div>
              <ProductInfo product={productDetailContent.product} />
              <QuoteButton
                className="mt-8"
                product={{
                  id: productDetailContent.product.id,
                  name: productDetailContent.product.title,
                  code: productDetailContent.product.code,
                }}
              />
            </div>
          </div>
        </Container>
      </Section>
      <Section spacing="default">
        <Container width="narrow">
          <SpecificationTable specifications={productDetailContent.specifications} />
        </Container>
      </Section>
      <Section spacing="generous">
        <Container>
          <RelatedProducts products={productDetailContent.relatedProducts} />
        </Container>
      </Section>
      <CallToAction {...productDetailCallToAction} />
    </>
  );
}
