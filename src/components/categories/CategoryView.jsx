import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { categories } from "../../data/categories";
import ProductsGrid from "../products/ProductsGrid";
import CategoryCard from "./CategoryCard";
import BackButton from "../BackButton";
import '../../styles/CategoryView.css';

const CategoryView = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  if (!category) {
    return (
      <div className="category-view">
        <h2>Категории</h2>
        <div className="category-cards-grid">
          {categories.map(cat => (
            <CategoryCard
              key={cat.key}
              name={cat.name}
              image={cat.image}
              to={`/category/${cat.key}`}
            />
          ))}
        </div>
      </div>
    );
  }

  const selected = categories.find(c => c.key === category);

  return (
    <div className="category-view">
      <div className="top-bar">
        <BackButton onClick={() => navigate("/catalog")} />
      </div>
      <h2>{selected?.name}</h2>
      {/* Передаём category как проп */}
      <ProductsGrid category={category || undefined} />
    </div>
  );
};

export default CategoryView;
