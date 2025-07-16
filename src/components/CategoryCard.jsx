import React from "react";
import "./CategoryCard.css";

export default function CategoryCard({ image, name, onClick }) {
  return (
    <div
      className="category-card"
      onClick={onClick}
      tabIndex={0}
      role="button"
    >
      <img src={image} alt={name} className="category-card-img" />
      <div className="category-card-title">{name}</div>
    </div>
  );
}
