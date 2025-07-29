import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import CategoryView from "./components/categories/CategoryView";
import ProductPage from "./components/products/ProductPage";
import CartPage from "./components/CartPage";
import NewsGrid from "./components/news/NewsGrid";
import UsefulGrid from "./components/useful/UsefulGrid";
import BottomNav from "./components/shared/BottomNav";
// import другие нужные компоненты (если есть)

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Каталог и категория */}
      <Route path="/catalog" element={<CategoryView />} />
      <Route path="/catalog/:category" element={<CategoryView />} />

      {/* Страница товара */}
      <Route path="/product/:productId" element={<ProductPage />} />

      {/* Корзина */}
      <Route path="/cart" element={<CartPage />} />

      {/* Новости */}
      <Route path="/news" element={<NewsGrid />} />

      {/* Полезное */}
      <Route path="/useful" element={<UsefulGrid />} />

      {/* Редирект на главную для неизвестных маршрутов */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    <BottomNav />
  </>
);

export default App;
