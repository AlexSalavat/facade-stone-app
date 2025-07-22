import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../styles/BottomNav.css";

const navItems = [
  { label: "Каталог", path: "/catalog" },
  { label: "Новости", path: "/news" },
  { label: "Полезное", path: "/useful" },
  { label: "Корзина", path: "/cart" },
];

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="bottom-nav">
      {navItems.map(item => (
        <button
          key={item.path}
          onClick={() => navigate(item.path)}
          className={location.pathname.startsWith(item.path) ? "active" : ""}
          type="button"
          tabIndex={0}
        >
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;
