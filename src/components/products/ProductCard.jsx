import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  if (product.placeholder) {
    return (
      <div className="product-card placeholder-card">
        <div className="product-card-title">Новинка в пути</div>
      </div>
    );
  }

  return (
    <div
      className="product-card"
      onClick={() => navigate(`/product/${product.id}`)}
      tabIndex={0}
      role="button"
    >
      <div className="product-card-img-wrap">
        <img
          src={product.images?.[0]}
          alt={product.name}
          className="product-card-img"
          loading="lazy"
        />
      </div>
      <div className="product-card-title">{product.name}</div>
    </div>
  );
};

export default ProductCard;
