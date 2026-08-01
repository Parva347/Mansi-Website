import { Button } from '../ui/Button';

interface WhatsAppButtonProps {
  disabled?: boolean;
}

export function WhatsAppButton({ disabled = false }: WhatsAppButtonProps) {
  return (
    <Button className="w-full" disabled={disabled} size="lg" type="submit">
      Send WhatsApp enquiry
    </Button>
  );
}
