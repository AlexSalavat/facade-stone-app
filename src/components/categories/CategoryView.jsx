import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { categories } from "../../data/categories";
import ProductsGrid from "../products/ProductsGrid";
import CategoryCard from "./CategoryCard";
import '../../styles/CategoryView.css';

const CategoryView = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  // Если в URL есть категория — показываем товары этой категории
  if (category) {
    const categoryObj = categories.find(c => c.key === category);
    return (
      <div className="category-view">
        <h2>{categoryObj?.name || "Категория"}</h2>
        <ProductsGrid category={category} />
      </div>
    );
  }

  // Если категории нет в URL — показываем сетку всех категорий
  return (
    <div className="category-view">
      <h2>Категории</h2>
      <div className="category-cards-grid">
        {categories.map(cat => (
          <div
            key={cat.key}
            style={{ width: "100%" }}
            onClick={() => navigate(`/catalog/${cat.key}`)}
          >
            <CategoryCard
              name={cat.name}
              image={cat.image}
              to={`/catalog/${cat.key}`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryView;
