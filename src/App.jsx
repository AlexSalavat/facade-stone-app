import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import CategoryView from "./components/categories/CategoryView";
import ProductPage from "./components/products/ProductPage";
import FacadePreview from "./components/FacadePreview"; // Импорт твоей примерки!
import UsefulGrid from "./components/useful/UsefulGrid";
import CartPage from "./components/CartPage";
import BottomNav from "./components/shared/BottomNav";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<CategoryView />} />
        <Route path="/catalog/:category" element={<CategoryView />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/preview" element={<FacadePreview />} />    {/* Примерка фасада */}
        <Route path="/useful" element={<UsefulGrid />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <BottomNav />
    </>
  );
}
