import React from "react";
import "./CategoryCard.css";

export default function CategoryCard({ image, name, onClick }) {
  return (
    <div className="category-card-root" onClick={onClick} tabIndex={0} role="button">
      <img src={image} alt={name} className="category-card-image" />
      <div className="category-card-label">{name}</div>
    </div>
  );
}
