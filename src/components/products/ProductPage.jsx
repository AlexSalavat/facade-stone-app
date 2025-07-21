// src/components/products/ProductPage.jsx

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../../data/products";
import "./ProductPage.css";

const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === productId);
  const [modalImage, setModalImage] = useState(null);

  if (!product) return <div className="not-found">Товар не найден</div>;

  return (
    <div className="product-page dark">
      <div className="top-bar">
        <button className="back-button" onClick={() => navigate(-1)}>← Назад</button>
      </div>

      <div className="main-info">
        <div className="main-image-wrapper" onClick={() => setModalImage(product.images[0])}>
          <img src={product.images[0]} alt={product.name} className="main-image clickable" />
        </div>
        <div className="product-details">
          <h1>{product.name}</h1>
          <div className="price">{product.price} ₽</div>
          <div className="origin">
            <span role="img" aria-label={product.country}>{product.country === "Корея" ? "🇰🇷" : ""}</span>
            <span>{product.country}</span>
          </div>
          <div className="rating">{"⭐".repeat(Math.round(product.rating))} {product.rating}</div>
        </div>
      </div>

      <div className="gallery">
        {product.images.slice(1).map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${product.name} ${idx + 2}`}
            className="thumb clickable"
            onClick={() => setModalImage(img)}
          />
        ))}
      </div>

      <div className="section">
        <p className="description">{product.description}</p>
      </div>

      <div className="section">
        <h3>Преимущества</h3>
        <ul>
          {product.description
            .split("\n")
            .filter(l => l.trim().startsWith("-"))
            .map((l, i) => <li key={i}>{l.replace(/^- /, "")}</li>)
          }
        </ul>
      </div>

      <div className="section">
        <h3>Лучше всего сочетается с:</h3>
        <p>{product.combo}</p>
      </div>

      {product.pdf && (
        <a href={product.pdf} target="_blank" rel="noopener noreferrer" className="pdf-link">
          📄 PDF протокол
        </a>
      )}

      <div className="actions">
        <button className="ask-btn">❓ Задать вопрос</button>
        <div className="stock">В наличии: {product.stock} шт.</div>
        <button className="buy-btn">🛒 В корзину</button>
      </div>

      {modalImage && (
        <div className="modal" onClick={() => setModalImage(null)}>
          <img src={modalImage} alt="modal" className="modal-img" />
        </div>
      )}
    </div>
  );
};

export default ProductPage;
