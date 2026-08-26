export type SortOption = 'name-asc' | 'name-desc' | 'price-asc' | 'price-desc';

export interface CollectionOption {
  id: string;
  name: string;
}

interface CatalogueToolbarProps {
  collectionOptions: CollectionOption[];
  onCollectionChange: (collectionId: string) => void;
  onSearchChange: (value: string) => void;
  onSortChange: (value: SortOption) => void;
  resultCount: number;
  searchValue: string;
  selectedCollection: string;
  sortValue: SortOption;
}

export function CatalogueToolbar({
  collectionOptions,
  onCollectionChange,
  onSearchChange,
  onSortChange,
  resultCount,
  searchValue,
  selectedCollection,
  sortValue,
}: CatalogueToolbarProps) {
  return (
    <section aria-label="Catalogue controls" className="border-y border-ink/10 py-5 sm:py-6">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_repeat(2,minmax(10rem,0.45fr))_auto] lg:items-end">
        <div>
          <label className="mb-2 block text-sm font-medium text-ink" htmlFor="catalogue-search">
            Search catalogue
          </label>
          <input
            className="w-full border border-ink/15 bg-surface px-4 py-3 text-sm text-ink placeholder:text-ink-muted"
            id="catalogue-search"
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search by name or product code"
            type="search"
            value={searchValue}
          />
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-ink" htmlFor="catalogue-collection">
            Collection
          </label>
          <select
            className="w-full border border-ink/15 bg-surface px-4 py-3 text-sm text-ink"
            id="catalogue-collection"
            onChange={(event) => onCollectionChange(event.target.value)}
            value={selectedCollection}
          >
            <option value="">All collections</option>
            {collectionOptions.map((option) => (
              <option key={option.id} value={option.id}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-ink" htmlFor="catalogue-sort">
            Sort
          </label>
          <select
            className="w-full border border-ink/15 bg-surface px-4 py-3 text-sm text-ink"
            id="catalogue-sort"
            onChange={(event) => onSortChange(event.target.value as SortOption)}
            value={sortValue}
          >
            <option value="name-asc">Name (A–Z)</option>
            <option value="name-desc">Name (Z–A)</option>
            <option value="price-asc">Price (low to high)</option>
            <option value="price-desc">Price (high to low)</option>
          </select>
        </div>
        <p className="pb-3 font-mono text-xs tracking-[0.1em] text-ink-muted lg:text-right">
          {resultCount} {resultCount === 1 ? 'product' : 'products'}
        </p>
      </div>
    </section>
  );
}
