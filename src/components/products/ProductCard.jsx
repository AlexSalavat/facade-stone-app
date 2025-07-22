import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  if (product.placeholder) {
    return (
      <div className="product-card placeholder-card">
        <div className="product-card-info">
          <span className="product-card-title">Новинка в пути</span>
        </div>
      </div>
    );
  }

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
        <span className="product-card-more">Подробнее</span>
      </div>
    </div>
  );
};

export default ProductCard;
