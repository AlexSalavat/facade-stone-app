// src/App.jsx

import React from "react";
import "./styles/Global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import CategoryView from "./components/categories/CategoryView";
import ProductsGrid from "./components/products/ProductsGrid";
import ProductPage from "./components/products/ProductPage";
import BottomNav from "./components/shared/BottomNav";
import NewsList from "./components/news/NewsList";
import UsefulList from "./components/useful/UsefulList";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<CategoryView />} />
        <Route path="/category/:category" element={<ProductsGrid />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/news" element={<NewsList />} />
        <Route path="/useful" element={<UsefulList />} />
      </Routes>
      <BottomNav />
    </Router>
  );
};

export default App;
