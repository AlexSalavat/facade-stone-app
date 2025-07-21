// src/components/categories/CategoryView.jsx

import React from "react";
import { categories } from "../../data/categories";
import CategoryCard from "./CategoryCard";
import "./CategoryView.css";

const CategoryView = () => {
  console.log("Категории:", categories); // отладка

  return (
    <div className="category-cards-grid">
      {categories.map((cat) => (
        <CategoryCard
          key={cat.key}
          name={cat.name}
          image={cat.image}
          to={`/category/${cat.key}`}
        />
      ))}
    </div>
  );
};

export default CategoryView;
