import { Container } from '../ui/Container';

export function SiteFooter() {
  return (
    <footer className="border-t border-border py-6 text-xs text-ink-muted">
      <Container>
        <p className="m-0">© {new Date().getFullYear()} Mansi Industries</p>
      </Container>
    </footer>
  );
}
