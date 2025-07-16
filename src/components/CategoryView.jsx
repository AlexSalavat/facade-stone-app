import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "./products";
import { categories } from "./categories";
import CategoryCard from "./CategoryCard";
import ProductCard from "./ProductCard";
import "./CategoryView.css";

export default function CategoryView() {
  const { category } = useParams();
  const navigate = useNavigate();

  if (!category) {
    return (
      <div className="container category-list-page">
        <h2 className="category-list-title">Категории</h2>
        <div className="category-cards-grid">
          {categories.map((cat) => (
            <CategoryCard
              key={cat.key}
              image={cat.image}
              name={cat.name}
              onClick={() => navigate(`/category/${cat.key}`)}
            />
          ))}
        </div>
      </div>
    );
  }

  // Правильный заголовок!
  const catObj = categories.find(c => c.key === category);

  const filtered = products.filter((p) => p.category === (catObj?.name || category));

  return (
    <div className="container category-view-page">
      <div className="category-view-top-row">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Назад
        </button>
        <h2 style={{ marginLeft: 12 }}>
          {catObj?.name || category}
        </h2>
      </div>
      <div className="products-grid">
        {filtered.length === 0 && (
          <div style={{ fontSize: 20, color: "#b35" }}>
            Нет товаров в этой категории.
          </div>
        )}
        {filtered.map((item) => (
          <ProductCard
            key={item.id}
            image={item.images[0]}
            name={item.name}
            onMore={() => navigate(`/product/${item.id}`)}
          />
        ))}
      </div>
    </div>
  );
}
