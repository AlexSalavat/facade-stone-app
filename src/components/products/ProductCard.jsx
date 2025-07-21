import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductsGrid.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
      <img src={product.images[0]} alt={product.name} />
      <h3>{product.name}</h3>
    </div>
  );
};

export default ProductCard;
