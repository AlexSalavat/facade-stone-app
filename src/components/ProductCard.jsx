import React from "react";
import "./ProductCard.css";

export default function ProductCard({ image, name, onMore }) {
  return (
    <div className="product-card-root">
      <div className="product-card-img-wrap">
        <img src={image} alt={name} className="product-card-img" />
      </div>
      <div className="product-card-content">
        <div className="product-card-title">{name}</div>
        <button className="product-card-more-btn" onClick={onMore}>Подробнее</button>
      </div>
    </div>
  );
}
