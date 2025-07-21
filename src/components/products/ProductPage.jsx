// src/components/products/ProductPage.jsx

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../BackButton";
import { products } from "../../data/products";
import "../../styles/ProductPage.css";

const getProductComposition = (product) => {
  // Можешь доработать парсинг или руками прописать для каждого продукта
  if (product.id === "botulax-200")
    return "Clostridium Botulinum Toxin Type A 200 units";
  if (product.id === "hutox-100")
    return "Ботулинический токсин типа A (Clostridium Botulinum Toxin Type A)";
  if (product.id === "belleera-r15")
    return "Гиалуроновая кислота, 3 мл";
  if (product.id === "sosum-soft")
    return "Гиалуроновая кислота (cross-linked), 3 мл";
  if (product.id === "neuramis-deep")
    return "Гиалуроновая кислота 20 мг/мл, лидокаин";
  if (product.id === "kiara-reju")
    return "PDRN, гиалуроновая кислота, коэнзимы";
  return "";
};

const ProductPage = () => {
  const { productId } = useParams();
  const product = products.find((p) => String(p.id) === String(productId));
  const [modalImg, setModalImg] = useState(null);

  if (!product) {
    return (
      <div className="product-page">
        <BackButton />
        <h2>Товар не найден</h2>
      </div>
    );
  }

  return (
    <div className="product-page">
      <BackButton />

      <div className="product-main-info">
        <div className="product-main-img-block">
          <img
            src={product.images[0]}
            alt={product.name}
            className="product-main-img"
          />
        </div>
        <div className="product-main-text">
          <div className="product-title">{product.name}</div>
          <div className="product-price">{product.price} ₽</div>
          <div className="product-meta">
            <span className="product-country">🇰🇷 Корея</span>
            <span className="product-rating">★ {product.rating}</span>
          </div>
        </div>
      </div>

      <div className="product-gallery-thumbs">
        {product.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`${product.name} thumb-${idx}`}
            className="product-thumb-img"
            onClick={() => setModalImg(img)}
          />
        ))}
      </div>

      {/* Модальное окно для большого фото */}
      {modalImg && (
        <div className="product-modal" onClick={() => setModalImg(null)}>
          <img src={modalImg} alt="big" className="product-modal-img" />
        </div>
      )}

      <div className="section">
        <div className="section-title about">О препарате</div>
        <div className="section-desc">{product.description?.split("Преимущества:")[0]?.trim()}</div>
      </div>

      <div className="section">
        <div className="section-title composition">Состав</div>
        <div className="section-desc italic">{getProductComposition(product)}</div>
      </div>

      {/* Преимущества */}
      {product.description?.includes("Преимущества:") && (
        <div className="section">
          <div className="section-title advantages">Преимущества</div>
          <ul className="advantages-list">
            {product.description
              .split("Преимущества:")[1]
              .split("\n")
              .map((adv, i) => adv.trim())
              .filter(Boolean)
              .map((adv, idx) => (
                <li key={idx}>{adv.replace(/^[-–▪️•]+/g, "")}</li>
              ))}
          </ul>
        </div>
      )}

      {/* Сочетается с */}
      {product.combo && (
        <div className="section">
          <div className="section-title combo">Лучше всего сочетается с:</div>
          <div className="section-desc">{product.combo}</div>
        </div>
      )}

      {/* PDF + кнопки */}
      <div className="product-btns-row">
        {product.pdf && (
          <a
            className="product-pdf-link"
            href={product.pdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            📄 Открыть PDF
          </a>
        )}
        <button className="btn ask-btn">Задать вопрос</button>
        <button className="btn cart-btn">В корзину</button>
      </div>
    </div>
  );
};

export default ProductPage;
