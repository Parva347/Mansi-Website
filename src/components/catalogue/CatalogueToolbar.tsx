import type { CatalogueToolbarContent } from '../../types/catalogue-ui';

interface CatalogueToolbarProps {
  content: CatalogueToolbarContent;
}

export function CatalogueToolbar({ content }: CatalogueToolbarProps) {
  return (
    <section aria-label="Catalogue controls" className="border-y border-ink/10 py-5 sm:py-6">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_repeat(2,minmax(10rem,0.45fr))_auto] lg:items-end">
        <div>
          <label className="mb-2 block text-sm font-medium text-ink" htmlFor="catalogue-search">
            {content.searchLabel}
          </label>
          <input
            className="w-full border border-ink/15 bg-surface px-4 py-3 text-sm text-ink placeholder:text-ink-muted disabled:cursor-not-allowed disabled:opacity-70"
            disabled
            id="catalogue-search"
            placeholder={content.searchPlaceholder}
            type="search"
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-ink" htmlFor="catalogue-collection">
            {content.collectionLabel}
          </label>
          <select
            className="w-full border border-ink/15 bg-surface px-4 py-3 text-sm text-ink disabled:cursor-not-allowed disabled:opacity-70"
            disabled
            id="catalogue-collection"
            value=""
          >
            <option value="">{content.collectionPlaceholder}</option>
          </select>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-ink" htmlFor="catalogue-sort">
            {content.sortLabel}
          </label>
          <select
            className="w-full border border-ink/15 bg-surface px-4 py-3 text-sm text-ink disabled:cursor-not-allowed disabled:opacity-70"
            disabled
            id="catalogue-sort"
            value=""
          >
            <option value="">{content.sortPlaceholder}</option>
          </select>
        </div>
        <p className="pb-3 font-mono text-xs tracking-[0.1em] text-ink-muted lg:text-right">
          {content.productCountLabel}
        </p>
      </div>
    </section>
  );
}
