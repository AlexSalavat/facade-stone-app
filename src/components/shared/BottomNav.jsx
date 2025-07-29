import './BottomNav.css';
import { NavLink } from 'react-router-dom';

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" end>
        <span className="nav-ico">🏠</span>
        <span className="nav-label">Главная</span>
      </NavLink>
      <NavLink to="/catalog">
        <span className="nav-ico">🗂️</span>
        <span className="nav-label">Каталог</span>
      </NavLink>
      <NavLink to="/news">
        <span className="nav-ico">📰</span>
        <span className="nav-label">Новости</span>
      </NavLink>
      <NavLink to="/useful">
        <span className="nav-ico">💡</span>
        <span className="nav-label">Полезное</span>
      </NavLink>
      <NavLink to="/cart">
        <span className="nav-ico">🛒</span>
        <span className="nav-label">Корзина</span>
      </NavLink>
    </nav>
  );
}
