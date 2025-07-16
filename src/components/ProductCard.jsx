import React from "react";
import "./ProductCard.css";

export default function ProductCard({ image, name, onMore }) {
  return (
    <div className="product-card">
      <div className="product-img-wrap">
        <img src={image} alt={name} className="product-img" />
      </div>
      <div className="product-card-content">
        <div className="product-title">{name}</div>
        <button className="product-more-btn" onClick={onMore}>
          Подробнее
        </button>
      </div>
    </div>
  );
}
