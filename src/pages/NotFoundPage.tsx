import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css';

export function NotFoundPage({ product = false }: { product?: boolean }) {
  return <div className={`shell ${styles.page}`}>
    <div className={styles.symbol} aria-hidden="true">✳</div>
    <p className="eyebrow">走错了路也没关系</p>
    <h1>{product ? '没有找到这件商品。' : '没有找到这个页面。'}</h1>
    <p>回到商品列表，看看还有什么值得带回家。</p>
    <Link className="button button--dark" to="/">返回商品列表 <span aria-hidden="true">↗</span></Link>
  </div>;
}
