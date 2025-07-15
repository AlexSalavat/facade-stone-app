import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CategoryView from "./components/CategoryView";
import ProductPage from "./components/ProductPage";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<CategoryView />} />
          <Route path="/category/:category" element={<CategoryView />} />
          <Route path="/product/:productId" element={<ProductPage />} />
        </Routes>
        <BottomNav />
      </>
    </BrowserRouter>
  );
}

export default App;
