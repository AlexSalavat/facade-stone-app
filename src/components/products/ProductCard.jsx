import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductsGrid.css"; // Используем те же стили, что и в сетке

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${product.id}`)}
      style={{ cursor: "pointer" }}
    >
      <img src={product.images[0]} alt={product.name} />
      <h3>{product.name}</h3>
    </div>
  );
};

export default ProductCard;
