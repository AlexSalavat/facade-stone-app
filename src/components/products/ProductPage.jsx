// components/ProductPage.jsx
import React, { useState } from 'react';
import BackButton from './BackButton';
import './ProductPage.css';

const ProductPage = ({ product }) => {
  const [mainImg, setMainImg] = useState(product.images?.[0] || "");

  return (
    <div className="product-page">
      <BackButton className="mb-2" />

      <div className="product-gallery">
        <img src={mainImg} alt={product.name} className="product-main-img" />
        <div className="product-thumbnails">
          {product.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`img-${idx}`}
              className={`product-thumb ${img === mainImg ? "active" : ""}`}
              onClick={() => setMainImg(img)}
            />
          ))}
        </div>
      </div>

      <h2 className="product-title">{product.name}</h2>
      <div className="product-meta">
        <span className="product-price">{product.price} ₽</span>
        <span className="product-country">{product.country}</span>
        <span className="product-rating">★ {product.rating}</span>
      </div>

      {product.pdf && (
        <a href={product.pdf} target="_blank" rel="noopener noreferrer" className="product-pdf-link">
          📄 Открыть PDF
        </a>
      )}

      <div className="product-desc">{product.long_desc}</div>

      {product.advantages && (
        <>
          <div className="section-title adv-title">Преимущества:</div>
          <ul className="product-advantages">
            {product.advantages.map((adv, idx) => (
              <li key={idx}>{adv}</li>
            ))}
          </ul>
        </>
      )}

      {product.combo && (
        <>
          <div className="section-title combo-title">Лучше всего сочетается с:</div>
          <div className="product-combo">{product.combo}</div>
        </>
      )}

      <div className="product-buttons">
        <button className="btn ask-btn" onClick={() => window.Telegram?.WebApp?.openTelegramLink?.()}>Задать вопрос</button>
        <button className="btn cart-btn">В корзину</button>
      </div>
    </div>
  );
};

export default ProductPage;
