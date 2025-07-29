import '../../styles/BottomNav.css';
import { NavLink } from 'react-router-dom';

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" end>
        <span className="nav-ico">
          <svg width="26" height="26"><use xlinkHref="#icon-list" /></svg>
        </span>
        <span className="nav-label">Каталог</span>
      </NavLink>
      <NavLink to="/news">
        <span className="nav-ico">
          <svg width="26" height="26"><use xlinkHref="#icon-news" /></svg>
        </span>
        <span className="nav-label">Новости</span>
      </NavLink>
      <NavLink to="/market">
        <span className="nav-ico">
          <svg width="26" height="26"><use xlinkHref="#icon-market" /></svg>
        </span>
        <span className="nav-label">Маркет</span>
      </NavLink>
      <NavLink to="/profile">
        <span className="nav-ico">
          <svg width="26" height="26"><use xlinkHref="#icon-profile" /></svg>
        </span>
        <span className="nav-label">Профиль</span>
      </NavLink>
    </nav>
  );
}
