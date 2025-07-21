// src/components/shared/BottomNav.jsx

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./BottomNav.css";

const BottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { label: "Каталог", path: "/catalog", emoji: "📦" },
    { label: "Новости", path: "/news", emoji: "📰" },
    { label: "Полезное", path: "/useful", emoji: "📚" },
    { label: "Корзина", path: "/cart", emoji: "🛒" },
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map(item => (
        <button
          key={item.path}
          className={location.pathname === item.path ? "active" : ""}
          onClick={() => navigate(item.path)}
        >
          <span style={{ fontSize: "20px" }}>{item.emoji}</span><br />
          {item.label}
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;
