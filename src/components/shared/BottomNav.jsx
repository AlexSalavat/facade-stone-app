import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCartCtx } from "../../context/CartContext";
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
  const { cart } = useCartCtx();
  const cartQty = cart.reduce((sum, item) => sum + item.qty, 0);

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
          {item.path === "/cart" && cartQty > 0 && (
            <span className="cart-badge">{cartQty}</span>
          )}
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;
