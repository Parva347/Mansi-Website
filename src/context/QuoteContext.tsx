import { createContext, useCallback, useMemo, useState, type ReactNode } from 'react';

export interface QuoteProduct {
  code: string;
  id: string;
  name: string;
}

export interface QuoteItemData extends QuoteProduct {
  quantity: number;
}

interface QuoteContextValue {
  addProduct: (product: QuoteProduct) => void;
  clearQuote: () => void;
  closeDrawer: () => void;
  decreaseQuantity: (productId: string) => void;
  increaseQuantity: (productId: string) => void;
  isDrawerOpen: boolean;
  items: QuoteItemData[];
  openDrawer: () => void;
  removeProduct: (productId: string) => void;
  totalProducts: number;
  totalQuantity: number;
}

const QuoteContext = createContext<QuoteContextValue | null>(null);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<QuoteItemData[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const addProduct = useCallback((product: QuoteProduct) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id);
      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [...currentItems, { ...product, quantity: 1 }];
    });
  }, []);

  const decreaseQuantity = useCallback((productId: string) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item,
      ),
    );
  }, []);

  const increaseQuantity = useCallback((productId: string) => {
    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  }, []);

  const removeProduct = useCallback((productId: string) => {
    setItems((currentItems) => currentItems.filter((item) => item.id !== productId));
  }, []);

  const clearQuote = useCallback(() => setItems([]), []);
  const openDrawer = useCallback(() => setIsDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setIsDrawerOpen(false), []);

  const value = useMemo<QuoteContextValue>(
    () => ({
      addProduct,
      clearQuote,
      closeDrawer,
      decreaseQuantity,
      increaseQuantity,
      isDrawerOpen,
      items,
      openDrawer,
      removeProduct,
      totalProducts: items.length,
      totalQuantity: items.reduce((total, item) => total + item.quantity, 0),
    }),
    [
      addProduct,
      clearQuote,
      closeDrawer,
      decreaseQuantity,
      increaseQuantity,
      isDrawerOpen,
      items,
      openDrawer,
      removeProduct,
    ],
  );

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>;
}

export { QuoteContext };
