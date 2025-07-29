import { Routes, Route, Navigate } from "react-router-dom";
import BottomNav from './components/shared/BottomNav';

// Импортируем основные страницы
import Home from './components/Home/Home';
import CategoryView from './components/categories/CategoryView';
import ProductPage from './components/products/ProductPage';
import CartPage from './components/CartPage';
import NewsGrid from './components/news/NewsGrid';
import UsefulGrid from './components/useful/UsefulGrid';

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Каталог */}
        <Route path="/catalog" element={<CategoryView />} />
        {/* Продуктовые страницы, если есть */}
        <Route path="/product/:id" element={<ProductPage />} />

        {/* Новости */}
        <Route path="/news" element={<NewsGrid />} />

        {/* Полезное */}
        <Route path="/useful" element={<UsefulGrid />} />

        {/* Корзина */}
        <Route path="/cart" element={<CartPage />} />

        {/* Fallback: редирект на главную */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <BottomNav />
    </>
  );
}
