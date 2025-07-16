import React, { useState } from "react";
import { useCartCtx } from "../context/CartContext";
import CartModal from "./CartModal";
import { useNavigate, useLocation } from "react-router-dom";
import "./BottomNav.css";

const navs = [
  { key: "catalog", label: "Каталог", icon: "📦", to: "/catalog" },
  { key: "news", label: "Новости", icon: "📰", to: "/news" },
  { key: "useful", label: "Полезное", icon: "📖", to: "/useful" },
  { key: "cart", label: "Корзина", icon: "🛒", to: null },
];

export default function BottomNav() {
  const { cart } = useCartCtx();
  const [cartOpen, setCartOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const count = cart.reduce((acc, p) => acc + p.qty, 0);

  return (
    <>
      <nav className="bottom-nav">
        {navs.map(n => (
          n.key !== "cart" ? (
            <button
              className={`nav-btn${location.pathname.startsWith(n.to) ? " active" : ""}`}
              key={n.key}
              onClick={() => navigate(n.to)}
            >
              <span>{n.icon}</span>
              <span>{n.label}</span>
            </button>
          ) : (
            <button className="nav-btn" key="cart" onClick={() => setCartOpen(true)}>
              <span className="nav-cart-icon" style={{ position: "relative" }}>
                {n.icon}
                {count > 0 && <span className="cart-badge">{count}</span>}
              </span>
              <span>{n.label}</span>
            </button>
          )
        ))}
      </nav>
      <CartModal open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
