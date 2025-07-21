import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../BackButton';
import '../../styles/ProductPage.css';
import { products } from '../../data/products';

const ProductPage = () => {
  const { productId } = useParams();
  const product = products.find(p => String(p.id) === String(productId));
  const [mainImg, setMainImg] = useState(product?.images?.[0] || "");

  if (!product) {
    return (
      <div className="product-page">
        <BackButton />
        <h2>Товар не найден</h2>
      </div>
    );
  }

  // Парсим преимущества
  let description = product.description || "";
  let advantages = [];
  let descMain = description;

  if (description.includes("Преимущества:")) {
    const parts = description.split("Преимущества:");
    descMain = parts[0].trim();
    const advText = parts[1]
      .replace(/Преимущества препарата:|Преимущества:/g, "")
      .replace(/^[-–▪️•]+/gm, "")
      .replace(/^\s+/gm, "")
      .split('\n')
      .filter(l => l.trim() && !l.trim().startsWith("Форма выпуска:") && !l.trim().startsWith("Показания:"));
    advantages = advText;
  }

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

      <div className="product-desc">{descMain}</div>

      {advantages.length > 0 && (
        <>
          <div className="section-title adv-title">Преимущества:</div>
          <ul className="product-advantages">
            {advantages.map((adv, idx) => (
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
        <button
          className="btn ask-btn"
          onClick={() => window.Telegram?.WebApp?.openTelegramLink?.()}
        >
          Задать вопрос
        </button>
        <button className="btn cart-btn">В корзину</button>
      </div>
    </div>
  );
};

export default ProductPage;
