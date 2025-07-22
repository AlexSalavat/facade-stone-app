import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/ProductCard.css';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  // Placeholder card
  if (product.placeholder) {
    return (
      <div className="product-card placeholder-card">
        <div className="placeholder-content">
          <span>Новинка<br />в пути</span>
        </div>
      </div>
    );
  }

  return (
    <div className="product-card" onClick={() => navigate(`/product/${product.id}`)}>
      <img
        src={product.images?.[0]}
        alt={product.name}
        className="product-card-img"
        draggable={false}
      />
      <div className="product-card-info">
        <div className="product-card-title">{product.name}</div>
        <div className="product-card-link">Подробнее</div>
      </div>
    </div>
  );
};

export default ProductCard;
