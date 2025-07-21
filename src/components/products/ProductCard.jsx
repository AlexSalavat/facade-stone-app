// src/components/products/ProductCard.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ id, name, images }) => {
  return (
    <Link to={`/product/${id}`} className="product-card">
      <img src={images[0]} alt={name} className="product-image" />
      <div className="product-name">{name}</div>
    </Link>
  );
};

export default ProductCard;
