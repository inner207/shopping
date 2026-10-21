import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import { productsById } from '../../data/products';

export type CartItem = { productId: string; quantity: number };
const STORAGE_KEY = 'northstar-cart-v1';
const MAX_QUANTITY = 99;

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotalCents: number;
  storageAvailable: boolean;
  addItem: (productId: string, quantity?: number) => void;
  setQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function validQuantity(value: unknown): value is number {
  return Number.isInteger(value) && typeof value === 'number' && value > 0 && value <= MAX_QUANTITY;
}

function readStoredCart(): CartItem[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    const merged = new Map<string, number>();
    for (const entry of parsed) {
      if (!entry || typeof entry !== 'object') continue;
      const { productId, quantity } = entry as Partial<CartItem>;
      if (typeof productId !== 'string' || !productsById.has(productId) || !validQuantity(quantity)) continue;
      merged.set(productId, Math.min(MAX_QUANTITY, (merged.get(productId) ?? 0) + quantity));
    }
    return [...merged].map(([productId, quantity]) => ({ productId, quantity }));
  } catch {
    return [];
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(readStoredCart);
  const [storageAvailable, setStorageAvailable] = useState(true);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
      setStorageAvailable(true);
    } catch {
      setStorageAvailable(false);
    }
  }, [items]);

  const value = useMemo<CartContextValue>(() => ({
    items,
    itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
    subtotalCents: items.reduce((sum, item) => sum + (productsById.get(item.productId)?.priceCents ?? 0) * item.quantity, 0),
    storageAvailable,
    addItem(productId, quantity = 1) {
      if (!productsById.has(productId) || !validQuantity(quantity)) return;
      setItems((current) => {
        const found = current.find((item) => item.productId === productId);
        if (!found) return [...current, { productId, quantity }];
        return current.map((item) => item.productId === productId
          ? { ...item, quantity: Math.min(MAX_QUANTITY, item.quantity + quantity) }
          : item);
      });
    },
    setQuantity(productId, quantity) {
      if (!validQuantity(quantity)) return;
      setItems((current) => current.map((item) => item.productId === productId ? { ...item, quantity } : item));
    },
    removeItem(productId) {
      setItems((current) => current.filter((item) => item.productId !== productId));
    },
  }), [items, storageAvailable]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
}
