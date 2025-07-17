import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "./products";
import { categories } from "./categories";
import CategoryCard from "./CategoryCard";
import ProductsGrid from "./ProductsGrid"; // вот он!
import "./CategoryView.css";
import "./ProductsGrid.css";

export default function CategoryView() {
  const { category } = useParams();
  const navigate = useNavigate();

  if (!category) {
    // Список категорий (грид)
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

  const catObj = categories.find(c => c.key === category);
  const filtered = products.filter((p) => p.category === category);

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
      <ProductsGrid
        products={filtered}
        onProductClick={(item) => navigate(`/product/${item.id}`)}
      />
    </div>
  );
}
