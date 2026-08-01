interface PaginationProps {
  currentLabel: string;
  pages: string[];
}

export function Pagination({ currentLabel, pages }: PaginationProps) {
  return (
    <nav aria-label="Catalogue pagination" className="flex items-center justify-center gap-2">
      <button
        aria-label="Previous page"
        className="border border-ink/15 px-3 py-2 text-sm text-ink-muted disabled:cursor-not-allowed disabled:opacity-50"
        disabled
        type="button"
      >
        Previous
      </button>
      {pages.map((page, index) => (
        <button
          aria-current={index === 0 ? 'page' : undefined}
          aria-label={index === 0 ? currentLabel : `Page ${page}`}
          className="min-w-10 border border-ink/15 px-3 py-2 text-sm text-ink disabled:cursor-not-allowed disabled:opacity-50"
          disabled
          key={page}
          type="button"
        >
          {page}
        </button>
      ))}
      <button
        aria-label="Next page"
        className="border border-ink/15 px-3 py-2 text-sm text-ink-muted disabled:cursor-not-allowed disabled:opacity-50"
        disabled
        type="button"
      >
        Next
      </button>
    </nav>
  );
}
