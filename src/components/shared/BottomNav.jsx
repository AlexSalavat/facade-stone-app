import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCartCtx } from "../../context/CartContext";
import "../../styles/BottomNav.css";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cart } = useCartCtx();
  const cartCount = cart.reduce((sum, p) => sum + p.qty, 0);

  const navItems = [
    { label: "Каталог", path: "/catalog" },
    { label: "Новости", path: "/news" },
    { label: "Полезное", path: "/useful" },
    {
      label: (
        <span style={{ position: "relative", display: "inline-block" }}>
          Корзина
          {cartCount > 0 && (
            <span style={{
              position: "absolute",
              top: -9,
              right: -19,
              background: "#ff4b7a",
              color: "#fff",
              borderRadius: "10px",
              fontSize: 12,
              padding: "0 7px",
              fontWeight: 700,
              minWidth: 20,
              display: "inline-block",
              lineHeight: "18px",
              boxShadow: "0 2px 7px #0002"
            }}>
              {cartCount}
            </span>
          )}
        </span>
      ),
      path: "/cart"
    }
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map(item => (
        <button
          key={typeof item.label === "string" ? item.label : item.path}
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
