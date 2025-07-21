// src/pages/ProductPage.jsx

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";
import "./ProductPage.css";

export default function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);
  const [modalImg, setModalImg] = useState(null);

  if (!product) return <div>Товар не найден</div>;

  return (
    <div className="product-page">
      <div className="top-bar">
        <button className="back-button" onClick={() => navigate(-1)}>
          Назад
        </button>
      </div>

      <div className="main-info">
        <div className="main-image-wrapper" onClick={() => setModalImg(product.images[0])}>
          <img src={product.images[0]} alt={product.name} className="main-image" />
        </div>

        <div className="product-details">
          <div className="product-title">{product.name}</div>
          <div className="price-label">{product.price} ₽</div>
          <div className="origin">
            🇰🇷 {product.country}
          </div>
          <div className="rating">
            {"\u2605".repeat(Math.floor(product.rating))} {product.rating.toFixed(1)}
          </div>
        </div>
      </div>

      <div className="gallery">
        {product.images.map((img, i) => (
          <img
            key={i}
            src={img}
            className="thumb"
            onClick={() => setModalImg(img)}
            alt=""
          />
        ))}
      </div>

      <div className="section description">{product.long_desc}</div>

      <div className="section">
        <h3>Преимущества:</h3>
        <ul className="description">
          {product.advantages.map((adv, i) => (
            <li key={i}>{adv}</li>
          ))}
        </ul>
      </div>

      <div className="section">
        <h3>Лучше всего сочетается с:</h3>
        <div className="description">{product.combo}</div>
      </div>

      <a href={product.pdf} className="pdf-link" target="_blank" rel="noopener noreferrer">
        📄 PDF протокол
      </a>

      <div className="actions">
        <button className="ask-btn">❓ Задать вопрос</button>
        <div className="stock">В наличии: {product.stock} шт.</div>
        <button className="buy-btn">
          🛒 В корзину
        </button>
      </div>

      {modalImg && (
        <div className="modal" onClick={() => setModalImg(null)}>
          <img src={modalImg} alt="" className="modal-img" />
        </div>
      )}
    </div>
  );
}
