import type { ProductSpecification } from '../../types/product-detail';
import { Heading } from '../ui/Heading';

interface SpecificationTableProps {
  specifications: ProductSpecification[];
}

export function SpecificationTable({ specifications }: SpecificationTableProps) {
  return (
    <section aria-labelledby="product-specifications-heading">
      <Heading as="h2" id="product-specifications-heading" size="md">
        Product specifications
      </Heading>
      <div className="mt-7 overflow-x-auto border-y border-ink/10">
        <table className="w-full border-collapse text-left">
          <tbody>
            {specifications.map((specification) => (
              <tr className="border-b border-ink/10 last:border-b-0" key={specification.label}>
                <th
                  className="w-2/5 py-4 pr-6 font-mono text-xs font-normal tracking-[0.1em] text-ink-muted uppercase"
                  scope="row"
                >
                  {specification.label}
                </th>
                <td className="py-4 text-sm text-ink">{specification.value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
