import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "./products";
import "./ProductPage.css";

function getFlag(country) {
  if (country === "Корея") return "🇰🇷";
  // Добавь другие страны при необходимости
  return "";
}

const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === productId);
  const [galleryOpen, setGalleryOpen] = useState(false);

  if (!product) return <div className="product-notfound">Товар не найден</div>;

  return (
    <div className="product-page-dark">
      <button className="back-btn" onClick={() => navigate(-1)}>← Назад</button>
      <div className="product-main-flex">
        {/* Фото слева */}
        <div className="product-image-block">
          <img src={product.images[0]} alt={product.name} className="product-main-img" />
        </div>
        {/* Информация справа */}
        <div className="product-main-info">
          <div className="product-title-main">{product.name}</div>
          <div className="product-price">{product.price} ₽</div>
          <div className="product-rating-row">
            <span className="star-rating">
              {"★".repeat(Math.round(product.rating)) +
                "☆".repeat(5 - Math.round(product.rating))}
            </span>
            <span className="product-rating-num">{product.rating}</span>
          </div>
          <div className="product-country-main">
            {getFlag(product.country)} {product.country}
          </div>
        </div>
      </div>

      {/* О препарате */}
      <div className="product-block-section">
        <div className="product-block-title">О препарате</div>
        <div className="product-block-text">{product.long_desc}</div>
        {product.composition && (
          <div className="product-block-composition">
            <strong>Состав:</strong> {product.composition}
          </div>
        )}
        {product.usage && (
          <div className="product-block-usage">
            <strong>Показания:</strong> {product.usage}
          </div>
        )}
        {product.advantages && product.advantages.length > 0 && (
          <ul className="product-advantages-list">
            {product.advantages.map((adv, i) => (
              <li key={i}>{adv}</li>
            ))}
          </ul>
        )}
      </div>

      {/* Галерея */}
      <div className="product-gallery-row">
        <span className="product-gallery-link" onClick={() => setGalleryOpen(true)}>
          📷 Смотреть фото
        </span>
      </div>

      {/* PDF-протокол */}
      {product.pdf && (
        <div className="product-pdf-row">
          <a
            className="product-pdf-link"
            href={product.pdf}
            download
            target="_blank"
            rel="noopener noreferrer"
            title="Скачать протокол PDF"
          >
            <span role="img" aria-label="pdf">📄</span> PDF протокол
          </a>
        </div>
      )}

      {/* Остаток и заказ */}
      <div className="product-order-block">
        <div className="product-stock">
          {product.stock > 0 ? `В наличии: ${product.stock} шт.` : "Нет в наличии"}
        </div>
      </div>

      {/* Модалка с каруселью */}
      {galleryOpen && (
        <div className="gallery-modal-bg" onClick={() => setGalleryOpen(false)}>
          <div className="gallery-modal" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setGalleryOpen(false)}>✕</button>
            <div className="gallery-carousel">
              {product.images.map((img, i) => (
                <img key={i} src={img} alt="" className="gallery-img" />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
