import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "./products";
import { categories } from "./categories";
import "./CategoryView.css";

function StarRating({ value, max = 5 }) {
  const stars = [];
  for (let i = 1; i <= max; i++) {
    stars.push(i <= Math.round(value) ? "★" : "☆");
  }
  return <span className="star-rating">{stars.join("")}</span>;
}

export default function CategoryView() {
  const { category } = useParams();
  const navigate = useNavigate();

  if (!category) {
    // Сетка карточек категорий
    return (
      <div className="container category-list-page">
        <h2 className="category-list-title">Категории</h2>
        <div className="category-cards-grid">
          {categories.map((cat) => (
            <div
              key={cat.key}
              className="category-card"
              onClick={() => navigate(`/category/${cat.key}`)}
              tabIndex={0}
              role="button"
            >
              <img src={cat.image} alt={cat.name} className="category-card-img" />
              <div className="category-card-title">{cat.name}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Карточки товаров выбранной категории
  const filtered = products.filter((p) => p.category === category);

  return (
    <div className="container category-view-page">
      <div className="category-view-top-row">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Назад
        </button>
        <h2 style={{ marginLeft: 12 }}>{category}</h2>
      </div>
      <div className="category-products-grid">
        {filtered.length === 0 && (
          <div style={{ fontSize: 20, color: "#b35" }}>
            Нет товаров в этой категории.
          </div>
        )}
        {filtered.map((item) => (
          <div className="product-card" key={item.id}>
            <img
              src={item.images[0]}
              alt={item.name}
              className="product-card-img-large"
            />
            <div className="product-card-info-bottom">
              <div className="product-name-big">{item.name}</div>
              <div className="product-country">{item.country}</div>
              <div className="product-rating-row">
                <StarRating value={item.rating} />
                <span className="product-rating-num">{item.rating}</span>
              </div>
              <button
                className="product-more-btn"
                onClick={() => navigate(`/product/${item.id}`)}
              >
                Подробнее
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
