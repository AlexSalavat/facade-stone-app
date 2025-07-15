import React from "react";
import { categories } from "./categories";
import { useNavigate } from "react-router-dom";
import "./Catalog.css";

export default function Catalog() {
  const navigate = useNavigate();

  return (
    <div className="catalog-page">
      <h2 className="catalog-title">Категории</h2>
      <div className="catalog-grid">
        {categories.map((cat) => (
          <div
            className="catalog-card"
            key={cat.name}
            onClick={() => navigate(`/catalog/${cat.name}`)}
            style={{ cursor: "pointer" }}
          >
            <img src={cat.image} alt={cat.name} className="catalog-card-img" />
            <div className="catalog-card-overlay">{cat.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
