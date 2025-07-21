import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../../data/products";
import "./ProductPage.css";

const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === productId);

  if (!product) return <div>Товар не найден</div>;

  return (
    <div className="product-page">
      <button className="back-button" onClick={() => navigate(-1)}>← Назад</button>

      <h1>{product.name}</h1>
      <div className="price">{product.price} ₽</div>

      <div className="origin">
        <img src="/images/icons/flag-korea.png" alt="Корея" className="flag-icon" />
        <span>{product.country}</span>
      </div>

      <div className="rating">⭐⭐⭐⭐⭐ {product.rating}</div>

      <img src={product.images[0]} alt={product.name} className="main-image" />

      <div className="gallery">
        {product.images.map((img, idx) => (
          <img key={idx} src={img} alt={`img-${idx}`} />
        ))}
      </div>

      <div className="section">
        <h3>О препарате</h3>
        <p>{product.long_desc}</p>
        <p><strong>Состав:</strong> {product.composition}</p>
        <p><strong>Показания:</strong> {product.usage}</p>
        <ul>
          {product.advantages.map((a, i) => <li key={i}>{a}</li>)}
        </ul>
      </div>

      <div className="section">
        <h3>Лучше всего сочетается с</h3>
        <p>{product.combo}</p>
      </div>

      {product.pdf && (
        <a href={product.pdf} target="_blank" rel="noreferrer" className="pdf-link">
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
