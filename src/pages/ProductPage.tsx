import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductArtwork } from '../components/ProductArtwork';
import { QuantityStepper } from '../components/QuantityStepper';
import { productsById } from '../data/products';
import { useCart } from '../features/cart/CartContext';
import { formatPrice } from '../utils/catalog';
import { NotFoundPage } from './NotFoundPage';
import styles from './ProductPage.module.css';

export function ProductPage() {
  const { id } = useParams();
  const product = id ? productsById.get(id) : undefined;
  const [quantity, setQuantity] = useState(1);
  const [announcement, setAnnouncement] = useState('');
  const { addItem } = useCart();

  if (!product) return <NotFoundPage product />;

  return <div className={`shell ${styles.page}`}>
    <nav className={styles.breadcrumb} aria-label="面包屑导航"><Link to="/">全部商品</Link><span aria-hidden="true">/</span><span>{product.category}</span><span aria-hidden="true">/</span><span aria-current="page">{product.name}</span></nav>
    <div className={styles.layout}>
      <div className={styles.art}><ProductArtwork product={product} /></div>
      <div className={styles.details}>
        <p className="eyebrow">{product.category} / 北极星精选</p>
        <h1>{product.name}</h1>
        <div className={styles.price}>{formatPrice(product.priceCents)}</div>
        <p className={styles.description}>{product.description}</p>
        <div className={styles.addRow}>
          <QuantityStepper value={quantity} onChange={setQuantity} label={product.name} />
          <button className="button button--dark" type="button" onClick={() => { addItem(product.id, quantity); setAnnouncement(`已将 ${quantity} 件${product.name}加入购物车`); }}>加入购物车 <span aria-hidden="true">↗</span></button>
        </div>
        <p className={styles.feedback} role="status" aria-live="polite">{announcement || '\u00a0'}</p>
        <div className={styles.specs}><h2>商品详情</h2><ul>{product.details.map((detail) => <li key={detail}>{detail}</li>)}</ul></div>
        <p className={styles.demoNote}>此商品仅用于演示，暂不支持结账。</p>
        <Link className={styles.back} to="/">← 返回全部商品</Link>
      </div>
    </div>
  </div>;
}
