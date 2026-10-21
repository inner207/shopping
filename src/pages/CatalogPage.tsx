import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { ProductArtwork } from '../components/ProductArtwork';
import { categories, products } from '../data/products';
import { filterProducts, type SortOrder } from '../utils/catalog';
import styles from './CatalogPage.module.css';

export function CatalogPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('全部');
  const [sort, setSort] = useState<SortOrder>('featured');
  const [announcement, setAnnouncement] = useState('');
  const visibleProducts = useMemo(() => filterProducts(products, query, category, sort), [query, category, sort]);

  function clearFilters() { setQuery(''); setCategory('全部'); setSort('featured'); }

  return <>
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={`shell ${styles.heroInner}`}>
        <div className={styles.heroCopy}>
          <p className="eyebrow">认真挑选每一天</p>
          <h1 id="hero-title">给生活留一点<br /><em>更好的空间。</em></h1>
          <p className={styles.heroDescription}>从一盏灯到一只杯子，把喜欢的日常慢慢布置成家的样子。</p>
          <a className="button button--dark" href="#collection">逛逛精选好物 <span aria-hidden="true">↗</span></a>
          <div className={styles.heroFine}>好看，也要真正好用。</div>
        </div>
        <div className={styles.heroVisual}>
          <ProductArtwork product={products[0]} />
          <div className={styles.heroLabel}><span>01 / 08</span><span>为生活而选</span></div>
        </div>
      </div>
    </section>

    <section className={styles.promiseStrip} aria-label="商店介绍">
      <div className="shell">认真挑选日常好物 <span aria-hidden="true">✳</span> 好看也好用 <span aria-hidden="true">✳</span> 让家多一点从容</div>
    </section>

    <section id="collection" className={`shell ${styles.collection}`} aria-labelledby="collection-title">
      <div className={styles.sectionHeading}>
        <div><p className="eyebrow">精选商品</p><h2 id="collection-title">发现下一件心头好。</h2></div>
        <p>让用得上的好东西，走进每天的生活。</p>
      </div>

      <div className={styles.toolbar}>
        <label className={styles.search}>
          <span className="sr-only">搜索商品</span>
          <svg viewBox="0 0 24 24" aria-hidden="true" fill="none"><circle cx="10.8" cy="10.8" r="6.6" stroke="currentColor" strokeWidth="1.8" /><path d="m16 16 5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" /></svg>
          <input type="search" placeholder="搜索商品名称或描述" value={query} onChange={(event) => setQuery(event.target.value)} />
        </label>
        <label className={styles.sort}>
          <span>排序</span>
          <select value={sort} onChange={(event) => setSort(event.target.value as SortOrder)}>
            <option value="featured">精选推荐</option>
            <option value="price-asc">价格从低到高</option>
            <option value="price-desc">价格从高到低</option>
          </select>
        </label>
      </div>

      <div className={styles.categoryBar} role="group" aria-label="按分类筛选">
        {categories.map((item) => <button type="button" key={item} className={item === category ? styles.active : ''} aria-pressed={item === category} onClick={() => setCategory(item)}>{item}</button>)}
      </div>

      <div className={styles.resultRow}><span>共 {visibleProducts.length} 件商品</span><span>为每天的生活，挑点喜欢的</span></div>
      {visibleProducts.length ? <div className={styles.grid}>
        {visibleProducts.map((product) => <ProductCard key={product.id} product={product} onAdd={(name) => setAnnouncement(`已将${name}加入购物车`)} />)}
      </div> : <div className={styles.empty}>
        <div className={styles.emptyIcon} aria-hidden="true">✳</div>
        <h3>没有找到相关商品</h3>
        <p>试试其他关键词，或清除筛选条件查看全部商品。</p>
        <button type="button" className="button button--dark" onClick={clearFilters}>清除筛选 <span aria-hidden="true">↗</span></button>
      </div>}
      <p className="sr-only" role="status" aria-live="polite">{announcement}</p>
    </section>

    <section className={styles.closing}>
      <div className="shell"><p className="eyebrow">把日子过得有心一点</p><h2>喜欢的好东西，<br />就该用在每一天。</h2><Link to="/cart">查看购物车 <span aria-hidden="true">↗</span></Link></div>
    </section>
  </>;
}
