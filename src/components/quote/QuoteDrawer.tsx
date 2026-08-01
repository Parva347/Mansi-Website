import { useEffect, useState, type FormEvent } from 'react';

import { useQuote } from '../../hooks/useQuote';
import { openWhatsAppEnquiry, type QuoteCustomerDetails } from '../../services/whatsapp-enquiry';
import { EmptyQuote } from './EmptyQuote';
import { QuoteItem } from './QuoteItem';
import { QuoteSummary } from './QuoteSummary';
import { WhatsAppButton } from './WhatsAppButton';

type RequiredCustomerField = Exclude<keyof QuoteCustomerDetails, 'notes'>;
type QuoteFormErrors = Partial<Record<RequiredCustomerField, string>>;

const initialCustomer: QuoteCustomerDetails = {
  name: '',
  company: '',
  phone: '',
  city: '',
  notes: '',
};

const requiredFields: { key: RequiredCustomerField; label: string }[] = [
  { key: 'name', label: 'Name' },
  { key: 'company', label: 'Company' },
  { key: 'phone', label: 'Phone' },
  { key: 'city', label: 'City' },
];

export function QuoteDrawer() {
  const { clearQuote, closeDrawer, isDrawerOpen, items } = useQuote();
  const [customer, setCustomer] = useState<QuoteCustomerDetails>(initialCustomer);
  const [errors, setErrors] = useState<QuoteFormErrors>({});

  useEffect(() => {
    if (!isDrawerOpen) return undefined;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeDrawer();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [closeDrawer, isDrawerOpen]);

  if (!isDrawerOpen) return null;

  const updateCustomer = (field: keyof QuoteCustomerDetails, value: string) => {
    setCustomer((currentCustomer) => ({ ...currentCustomer, [field]: value }));
    if (field !== 'notes') {
      setErrors((currentErrors) => ({ ...currentErrors, [field]: undefined }));
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = requiredFields.reduce<QuoteFormErrors>((fieldErrors, { key, label }) => {
      if (!customer[key].trim()) fieldErrors[key] = `${label} is required.`;
      return fieldErrors;
    }, {});

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0 || items.length === 0) return;

    openWhatsAppEnquiry(items, customer);
  };

  return (
    <div className="fixed inset-0 [z-index:var(--token-z-drawer)]">
      <button
        aria-label="Close quote drawer"
        className="absolute inset-0 bg-ink/30"
        onClick={closeDrawer}
        type="button"
      />
      <aside
        aria-labelledby="quote-drawer-heading"
        aria-modal="true"
        className="absolute inset-y-0 right-0 flex w-full max-w-xl flex-col bg-surface shadow-raised"
        role="dialog"
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-5 py-5 sm:px-7">
          <div>
            <p className="font-mono text-xs tracking-[0.14em] text-ink-muted uppercase">
              Wholesale enquiry
            </p>
            <h2 className="mt-2 font-display text-2xl text-ink" id="quote-drawer-heading">
              Your quote
            </h2>
          </div>
          <button
            aria-label="Close quote drawer"
            className="grid size-10 place-items-center border border-ink/15 text-xl transition-colors hover:bg-surface-muted"
            onClick={closeDrawer}
            type="button"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-6 sm:px-7">
          {items.length === 0 ? (
            <EmptyQuote />
          ) : (
            <>
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm text-ink-muted">Selected products</p>
                <button
                  className="text-xs tracking-[var(--token-letter-spacing-label)] text-ink-muted uppercase transition-colors hover:text-ink"
                  onClick={clearQuote}
                  type="button"
                >
                  Clear all
                </button>
              </div>
              <ul className="mt-6 list-none p-0">
                {items.map((item) => (
                  <QuoteItem item={item} key={item.id} />
                ))}
              </ul>
              <QuoteSummary />

              <form className="mt-8" noValidate onSubmit={handleSubmit}>
                <fieldset className="m-0 border-0 p-0">
                  <legend className="font-display text-xl text-ink">Your details</legend>
                  <div className="mt-5 grid gap-4">
                    {requiredFields.map(({ key, label }) => (
                      <label className="block" key={key}>
                        <span className="mb-2 block text-sm font-medium text-ink">{label}</span>
                        <input
                          aria-describedby={errors[key] ? `${key}-error` : undefined}
                          aria-invalid={Boolean(errors[key])}
                          className="w-full border border-ink/15 bg-surface px-4 py-3 text-sm text-ink"
                          name={key}
                          onChange={(event) => updateCustomer(key, event.target.value)}
                          required
                          type={key === 'phone' ? 'tel' : 'text'}
                          value={customer[key]}
                        />
                        {errors[key] ? (
                          <span
                            className="mt-2 block text-sm text-ink"
                            id={`${key}-error`}
                            role="alert"
                          >
                            {errors[key]}
                          </span>
                        ) : null}
                      </label>
                    ))}
                    <label className="block">
                      <span className="mb-2 block text-sm font-medium text-ink">Notes</span>
                      <textarea
                        className="min-h-28 w-full resize-y border border-ink/15 bg-surface px-4 py-3 text-sm text-ink"
                        name="notes"
                        onChange={(event) => updateCustomer('notes', event.target.value)}
                        value={customer.notes}
                      />
                    </label>
                  </div>
                </fieldset>
                <WhatsAppButton />
              </form>
            </>
          )}
        </div>
      </aside>
    </div>
  );
}
