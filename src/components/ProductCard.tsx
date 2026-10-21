import { Link } from 'react-router-dom';
import type { Product } from '../data/products';
import { useCart } from '../features/cart/CartContext';
import { formatPrice } from '../utils/catalog';
import { ProductArtwork } from './ProductArtwork';
import styles from './ProductCard.module.css';

export function ProductCard({ product, onAdd }: { product: Product; onAdd: (name: string) => void }) {
  const { addItem } = useCart();
  return <article className={styles.card}>
    <Link to={`/products/${product.id}`} className={styles.imageLink} aria-label={`查看${product.name}`}>
      <ProductArtwork product={product} />
      <span className={styles.view}>查看详情 <span aria-hidden="true">↗</span></span>
    </Link>
    <div className={styles.info}>
      <div className={styles.category}>{product.category}</div>
      <div className={styles.nameRow}>
        <h3><Link to={`/products/${product.id}`}>{product.name}</Link></h3>
        <span>{formatPrice(product.priceCents)}</span>
      </div>
      <button className={styles.add} type="button" onClick={() => { addItem(product.id); onAdd(product.name); }}>
        加入购物车 <span aria-hidden="true">+</span>
      </button>
    </div>
  </article>;
}
