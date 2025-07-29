import '../../styles/BottomNav.css';
import { NavLink } from 'react-router-dom';
import { useCartCtx } from '../../context/CartContext';

export default function BottomNav() {
  const { cart } = useCartCtx();
  const cartCount = cart.reduce((sum, p) => sum + p.qty, 0);

  return (
    <nav className="bottom-nav">
      <NavLink to="/catalog" className="nav-btn">
        <span className="nav-ico">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z"/>
          </svg>
        </span>
        <span className="nav-label">Каталог</span>
      </NavLink>
      <NavLink to="/news" className="nav-btn">
        <span className="nav-ico">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
          </svg>
        </span>
        <span className="nav-label">Новости</span>
      </NavLink>
      <NavLink to="/useful" className="nav-btn">
        <span className="nav-ico">
          <svg width="24" height="24" viewBox="0 0 24 24">
            {/* bulb */}
            <path fill="currentColor" d="M12 2a7 7 0 0 0-7 7c0 2.87 2.09 5.22 5 5.8V17h4v-2.2c2.91-.58 5-2.93 5-5.8a7 7 0 0 0-7-7zm1 17h-2v2h2v-2z"/>
          </svg>
        </span>
        <span className="nav-label">Полезное</span>
      </NavLink>
      <NavLink to="/cart" className="nav-btn">
        <span className="nav-ico" style={{ position: "relative" }}>
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.16 14l.84-2h7.45c.75 0 1.41-.41 1.75-1.03l3.24-5.88A1 1 0 0 0 19.45 4H6.21l-.94-2H2v2h2l3.6 7.59-1.35 2.44A1.982 1.982 0 0 0 6 17h12v-2H7.42c-.14 0-.25-.11-.28-.25z"/>
          </svg>
          {cartCount > 0 && (
            <span className="cart-badge">{cartCount}</span>
          )}
        </span>
        <span className="nav-label">Корзина</span>
      </NavLink>
    </nav>
  );
}
