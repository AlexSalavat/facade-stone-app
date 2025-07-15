import React from "react";
import { ShoppingBag, Newspaper, BookOpen, ShoppingCart } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import "./BottomNav.css";

const navItems = [
  { label: "Каталог", icon: <ShoppingBag size={22} />, to: "/catalog" },
  { label: "Новости", icon: <Newspaper size={22} />, to: "/news" },
  { label: "Полезное", icon: <BookOpen size={22} />, to: "/info" },
  { label: "Корзина", icon: <ShoppingCart size={22} />, to: "/cart" },
];

export default function BottomNav() {
  const location = useLocation();
  return (
    <nav className="bottom-nav">
      {navItems.map((item) => (
        <Link
          to={item.to}
          key={item.label}
          className={`bottom-nav-item${location.pathname === item.to ? " active" : ""}`}
        >
          {item.icon}
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
