import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  if (!product) return null;

  return (
    <div className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
      <div className="product-card-image-wrap">
        <img
          src={product.images && product.images[0] ? product.images[0] : '/images/placeholder.webp'}
          alt={product.name}
          className="product-card-image"
          loading="lazy"
          style={{ width: "100%", height: "120px", objectFit: "cover" }}
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
