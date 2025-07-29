import './BottomNav.css';
import { NavLink } from 'react-router-dom';

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" end>Главная</NavLink>
      <NavLink to="/catalog">Каталог</NavLink>
      <NavLink to="/news">Новости</NavLink>
      <NavLink to="/useful">Полезное</NavLink>
      <NavLink to="/cart">Корзина</NavLink>
    </nav>
  );
}
