import '../../styles/BottomNav.css';
import { NavLink } from 'react-router-dom';

export default function BottomNav() {
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
      <NavLink to="/market" className="nav-btn">
        <span className="nav-ico">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M16 6V4c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H2v2h2l3.6 7.59-1.35 2.45A2 2 0 0 0 7 19h10a2 2 0 0 0 1.75-2.96l-1.35-2.44L20 8h2V6h-6zm-6-2h4v2h-4V4z"/>
          </svg>
        </span>
        <span className="nav-label">Маркет</span>
      </NavLink>
      <NavLink to="/cart" className="nav-btn">
        <span className="nav-ico">
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path fill="currentColor" d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.16 14l.84-2h7.45c.75 0 1.41-.41 1.75-1.03l3.24-5.88A1 1 0 0 0 19.45 4H6.21l-.94-2H2v2h2l3.6 7.59-1.35 2.44A1.982 1.982 0 0 0 6 17h12v-2H7.42c-.14 0-.25-.11-.28-.25z"/>
          </svg>
        </span>
        <span className="nav-label">Корзина</span>
      </NavLink>
    </nav>
  );
}
