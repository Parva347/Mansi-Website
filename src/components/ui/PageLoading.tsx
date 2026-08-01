import { Container } from './Container';

export function PageLoading() {
  return (
    <main
      aria-busy="true"
      aria-live="polite"
      className="flex min-h-dvh items-center"
      id="main-content"
    >
      <Container>
        <p className="font-mono text-xs tracking-[0.14em] text-ink-muted uppercase">Loading page</p>
      </Container>
    </main>
  );
}
