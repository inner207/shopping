import { useEffect } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import { useCart } from '../features/cart/CartContext';
import { CatalogPage } from '../pages/CatalogPage';
import { ProductPage } from '../pages/ProductPage';
import { CartPage } from '../pages/CartPage';
import { NotFoundPage } from '../pages/NotFoundPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function Header() {
  const { itemCount } = useCart();
  return <header className="site-header">
    <div className="site-header__inner shell">
      <Link className="wordmark" to="/" aria-label="北极星商店首页">
        <span className="wordmark__icon" aria-hidden="true">✳</span>
        NORTHSTAR<span className="wordmark__dot">.</span>
      </Link>
      <nav className="site-nav" aria-label="主导航">
        <Link to="/">逛商品</Link>
        <Link className="cart-link" to="/cart" aria-label={`购物车，共 ${itemCount} 件商品`}>
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none"><path d="M4 8h16l-1.3 12H5.3L4 8Zm4 0V6a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></svg>
          <span>购物车</span><span className="cart-count">{itemCount}</span>
        </Link>
      </nav>
    </div>
  </header>;
}

function Footer() {
  return <footer className="site-footer">
    <div className="shell site-footer__inner">
      <div><span className="footer-mark">NORTHSTAR.</span><p>为日常生活，挑选用得上的好物。</p></div>
      <div className="footer-note">演示商店 · 暂不支持结账或付款</div>
    </div>
  </footer>;
}

export function App() {
  return <>
    <a className="skip-link" href="#main">跳转到主要内容</a>
    <ScrollToTop />
    <Header />
    <main id="main">
      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
    <Footer />
  </>;
}
