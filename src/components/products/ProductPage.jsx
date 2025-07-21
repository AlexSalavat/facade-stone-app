// src/components/products/ProductPage.jsx

import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../../data/products";
import "./ProductPage.css";

const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === productId);

  if (!product) return <div className="not-found">Товар не найден</div>;

  return (
    <div className="product-page">
      <button className="back-button" onClick={() => navigate(-1)}>← Назад</button>
      <h1>{product.name}</h1>
      <div className="price">{product.price} ₽</div>

      <div className="origin">
        <span role="img" aria-label={product.country}>{product.country === "Корея" ? "🇰🇷" : ""}</span>
        <span>{product.country}</span>
      </div>

      <div className="rating">{"⭐".repeat(Math.round(product.rating))} {product.rating}</div>

      <img src={product.images[0]} alt={product.name} className="main-image" />

      <div className="gallery">
        {product.images.slice(1).map((img, idx) => (
          <img key={idx} src={img} alt={`${product.name} ${idx + 2}`} />
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
    </div>
  );
};

export default ProductPage;
