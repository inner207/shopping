import { Link } from 'react-router-dom';
import { ProductArtwork } from '../components/ProductArtwork';
import { QuantityStepper } from '../components/QuantityStepper';
import { productsById } from '../data/products';
import { useCart } from '../features/cart/CartContext';
import { formatPrice } from '../utils/catalog';
import styles from './CartPage.module.css';

export function CartPage() {
  const { items, itemCount, subtotalCents, setQuantity, removeItem, storageAvailable } = useCart();
  return <div className={`shell ${styles.page}`}>
    <p className="eyebrow">挑选的好物</p>
    <div className={styles.heading}><h1>购物车<span className={styles.count}>({itemCount})</span></h1><Link to="/">继续逛逛 ↗</Link></div>
    {!storageAvailable && <p className={styles.warning} role="status">浏览器无法保存购物车，刷新后商品可能丢失。</p>}
    {items.length === 0 ? <div className={styles.empty}>
      <div className={styles.emptyIcon} aria-hidden="true">✳</div>
      <h2>购物车还是空的。</h2>
      <p>去挑几件喜欢的好物，它们会出现在这里。</p>
      <Link className="button button--dark" to="/">去逛逛商品 <span aria-hidden="true">↗</span></Link>
    </div> : <div className={styles.layout}>
      <div className={styles.items}>
        {items.map((item) => {
          const product = productsById.get(item.productId);
          if (!product) return null;
          return <article className={styles.item} key={item.productId}>
            <Link className={styles.art} to={`/products/${product.id}`} aria-label={`查看${product.name}`}><ProductArtwork product={product} /></Link>
            <div className={styles.itemInfo}>
              <p className="eyebrow">{product.category}</p>
              <h2><Link to={`/products/${product.id}`}>{product.name}</Link></h2>
              <p>单价 {formatPrice(product.priceCents)}</p>
              <button type="button" className={styles.remove} onClick={() => removeItem(product.id)}>移除商品</button>
            </div>
            <div className={styles.itemActions}>
              <div className={styles.itemPrice}>{formatPrice(product.priceCents * item.quantity)}</div>
              <QuantityStepper value={item.quantity} onChange={(value) => setQuantity(product.id, value)} label={product.name} />
            </div>
          </article>;
        })}
      </div>
      <aside className={styles.summary} aria-label="购物车金额汇总">
        <h2>金额汇总</h2>
        <div><span>商品（{itemCount} 件）</span><strong>{formatPrice(subtotalCents)}</strong></div>
        <div className={styles.total}><span>商品合计</span><strong>{formatPrice(subtotalCents)}</strong></div>
        <p>合计仅包含商品金额，未计算运费和税费。</p>
        <div className={styles.checkoutNote}>演示版暂不支持结账。</div>
      </aside>
    </div>}
  </div>;
}
