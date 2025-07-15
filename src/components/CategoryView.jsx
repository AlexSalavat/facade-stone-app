import React from "react";
import { products } from "./products";
import { useNavigate, useParams } from "react-router-dom";
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
  const filtered = products.filter((p) => p.category === category);

  return (
    <div className="category-view-page">
      <div className="category-view-top-row">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Назад
        </button>
      </div>
      <div className="category-products-grid">
        {filtered.map((item) => (
          <div className="product-card" key={item.id}>
            <img
              src={item.images[0]}
              alt={item.name}
              className="product-card-img-large"
            />
            <div className="product-card-info-bottom">
              <div className="product-name-big">{item.name}</div>
              <div className="product-country">Корея</div>
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
