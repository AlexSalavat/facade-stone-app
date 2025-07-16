import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "./products";
import "./ProductPage.css";

function getFlag(country) {
  if (country === "Корея") return "🇰🇷";
  return "";
}

const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === productId);

  const [showAll, setShowAll] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  if (!product) return <div className="product-notfound">Товар не найден</div>;

  const longDescShort = product.long_desc.length > 200 && !showAll
    ? product.long_desc.slice(0, 200) + '...'
    : product.long_desc;

  // Листалки для модалки галереи
  const galleryPrev = () => setGalleryIndex((i) => (i - 1 + product.images.length) % product.images.length);
  const galleryNext = () => setGalleryIndex((i) => (i + 1) % product.images.length);

  return (
    <div className="product-page-dark">
      <button className="back-btn" onClick={() => navigate(-1)}>← Назад</button>

      {/* Верхний блок: фото + инфо */}
      <div className="product-top-row">
        <div className="product-main-img-wrap">
          <img src={product.images[0]} alt={product.name} className="product-main-img" />
        </div>
        <div className="product-main-info">
          <div className="product-title-main">{product.name}</div>
          <div className="product-price">{product.price} ₽</div>
          <div className="product-country-row">
            <span>{getFlag(product.country)}</span> {product.country}
          </div>
          <div className="product-rating-row">
            <span className="star-rating">
              {"★".repeat(Math.round(product.rating)) +
                "☆".repeat(5 - Math.round(product.rating))}
            </span>
            <span className="product-rating-num">{product.rating}</span>
          </div>
        </div>
      </div>

      {/* Галерея свайпер */}
      <div className="product-gallery-swiper">
        {product.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={product.name + " фото " + (i+1)}
            className="swiper-img"
            onClick={() => { setGalleryIndex(i); setGalleryOpen(true); }}
          />
        ))}
      </div>

      {/* О препарате */}
      <div className="product-block-section">
        <div className="product-block-title">О препарате</div>
        <div className="product-block-text">
          {longDescShort}
          {product.long_desc.length > 200 && (
            <span
              className="show-more-link"
              onClick={() => setShowAll(v => !v)}
            >{showAll ? " Скрыть" : " Показать полностью"}</span>
          )}
        </div>
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

      {/* Лучше всего сочетается с */}
      {product.combo && (
        <div className="product-block-section">
          <div className="product-block-title">Лучше всего сочетается с</div>
          <div className="product-block-text">{product.combo}</div>
        </div>
      )}

      {/* PDF протокол — теперь после combo */}
      {product.pdf && (
        <div className="product-pdf-row">
          <a
            className="product-pdf-link"
            href={product.pdf}
            download
            target="_blank"
            rel="noopener noreferrer"
            title="Скачать PDF"
          >
            <span role="img" aria-label="pdf">📄</span> PDF протокол
          </a>
        </div>
      )}

      {/* Кнопка “Задать вопрос” */}
      <div className="product-question-row">
        <a
          href="https://t.me/your_manager" // ← заменишь на своего менеджера!
          className="question-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span role="img" aria-label="question">❓</span> Задать вопрос
        </a>
      </div>

      {/* Остаток и кнопка "В корзину" */}
      <div className="product-order-block">
        <div className="product-stock">
          {product.stock > 0 ? `В наличии: ${product.stock} шт.` : "Нет в наличии"}
        </div>
        {product.stock > 0 && (
          <div className="product-cart-row">
            <button className="add-to-cart-btn" onClick={() => alert('Добавлено в корзину!')}>
              <span role="img" aria-label="cart">🛒</span> В корзину
            </button>
          </div>
        )}
      </div>

      {/* Модалка галереи — листалка */}
      {galleryOpen && (
        <div className="gallery-modal-bg" onClick={() => setGalleryOpen(false)}>
          <div className="gallery-modal" onClick={e => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setGalleryOpen(false)}>✕</button>
            <div className="gallery-modal-arrows">
              <button className="gallery-arrow" onClick={galleryPrev}>&lt;</button>
              <img
                src={product.images[galleryIndex]}
                alt=""
                className="gallery-img"
              />
              <button className="gallery-arrow" onClick={galleryNext}>&gt;</button>
            </div>
            <div className="gallery-modal-dots">
              {product.images.map((_, i) => (
                <span
                  key={i}
                  className={i === galleryIndex ? "gallery-dot active" : "gallery-dot"}
                  onClick={() => setGalleryIndex(i)}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductPage;
