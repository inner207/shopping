import type { Product } from '../data/products';

export type SortOrder = 'featured' | 'price-asc' | 'price-desc';

export function filterProducts(items: Product[], query: string, category: string, sort: SortOrder) {
  const normalizedQuery = query.trim().toLocaleLowerCase('zh-CN');
  const filtered = items.filter((product) => {
    const matchesQuery = !normalizedQuery ||
      `${product.name} ${product.description}`.toLocaleLowerCase('zh-CN').includes(normalizedQuery);
    return matchesQuery && (category === '全部' || product.category === category);
  });

  return filtered.sort((a, b) => {
    if (sort === 'price-asc') return a.priceCents - b.priceCents || a.featured - b.featured;
    if (sort === 'price-desc') return b.priceCents - a.priceCents || a.featured - b.featured;
    return a.featured - b.featured;
  });
}

const currency = new Intl.NumberFormat('zh-CN', { style: 'currency', currency: 'USD' });

export function formatPrice(priceCents: number) {
  return currency.format(priceCents / 100);
}
