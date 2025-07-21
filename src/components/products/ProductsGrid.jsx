import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../../data/products";
import ProductCard from "./ProductCard";
import "./ProductsGrid.css";

const ProductsGrid = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const filtered = products.filter(p => p.category === category);

  return (
    <div className="products-page">
      <div className="top-bar">
        <button className="back-button" onClick={() => navigate("/catalog")}>Назад</button>
      </div>

      <div className="products-grid">
        {filtered.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsGrid;
