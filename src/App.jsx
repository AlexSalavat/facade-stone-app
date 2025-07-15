import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Catalog from "./components/Catalog";
import CategoryView from "./components/CategoryView";
import ProductPage from "./components/ProductPage"; // Создадим после проверки
import BottomNav from "./components/BottomNav";

// Пример корзины (создашь Cart.js позже)
function Cart() {
  return (
    <div style={{ color: "#fff", padding: 32 }}>
      Корзина — скоро!
    </div>
  );
}

function News() {
  return (
    <div style={{ color: "#fff", padding: 32 }}>
      Новости — скоро!
    </div>
  );
}

function Info() {
  return (
    <div style={{ color: "#fff", padding: 32 }}>
      Полезное — скоро!
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <div style={{ minHeight: "100vh" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:category" element={<CategoryView />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/news" element={<News />} />
          <Route path="/info" element={<Info />} />
          {/* Любой несуществующий адрес ведет на Home */}
          <Route path="*" element={<Home />} />
        </Routes>
        <BottomNav />
      </div>
    </Router>
  );
}
