interface IndustryListProps {
  items: string[];
}

export function IndustryList({ items }: IndustryListProps) {
  return (
    <ul className="grid list-none gap-px border border-ink/10 bg-ink/10 p-0 sm:grid-cols-2 lg:grid-cols-5">
      {items.map((item) => (
        <li className="bg-surface px-5 py-6 text-center font-display text-xl text-ink" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
}
