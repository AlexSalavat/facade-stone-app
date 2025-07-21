// src/components/products/ProductCard.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
      <div className="product-card-image-wrap">
        <img
          src={product.images?.[0]}
          alt={product.name}
          className="product-card-image"
          loading="lazy"
        />
      </div>
      <div className="product-card-info">
        <h3 className="product-card-title">{product.name}</h3>
        <span className="product-card-price">{product.price} ₽</span>
      </div>
    </div>
  );
};

export default ProductCard;
