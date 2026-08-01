import { WHATSAPP_BASE_URL, WHATSAPP_NUMBER } from '../constants/quote';
import type { QuoteItemData } from '../context/QuoteContext';

export interface QuoteCustomerDetails {
  city: string;
  company: string;
  name: string;
  notes: string;
  phone: string;
}

export function buildWhatsAppEnquiryMessage(
  items: QuoteItemData[],
  customer: QuoteCustomerDetails,
) {
  const selectedProducts = items
    .map((item) => `- ${item.name}\n  Product Code: ${item.code}\n  Quantity: ${item.quantity}`)
    .join('\n');

  return [
    'Company: Mansi Industries',
    '',
    'Products selected:',
    selectedProducts,
    '',
    `Customer Name: ${customer.name}`,
    `Company Name: ${customer.company}`,
    `Phone Number: ${customer.phone}`,
    `City: ${customer.city}`,
    `Additional Notes: ${customer.notes || 'None'}`,
  ].join('\n');
}

export function openWhatsAppEnquiry(items: QuoteItemData[], customer: QuoteCustomerDetails) {
  const message = buildWhatsAppEnquiryMessage(items, customer);
  const numberPath = WHATSAPP_NUMBER ? `${WHATSAPP_NUMBER}/` : '';
  const url = `${WHATSAPP_BASE_URL}${numberPath}?text=${encodeURIComponent(message)}`;

  window.open(url, '_blank', 'noopener,noreferrer');
}
