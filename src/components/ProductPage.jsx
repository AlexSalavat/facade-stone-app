import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "./products";
import ProductCarousel from "./ProductCarousel"; // для карусели
import "./ProductPage.css";

function getFlag(country) {
  if (country === "Корея") return "🇰🇷";
  // Можно добавить другие страны
  return "";
}

const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = products.find(p => p.id === productId);

  const [qty, setQty] = useState(1);

  if (!product) return <div className="product-notfound">Товар не найден</div>;

  return (
    <div className="product-page-wrap">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Назад
      </button>

      <div className="product-main-block">
        {/* Фото-карусель */}
        <div className="product-carousel-block">
          <ProductCarousel images={product.images} />
        </div>

        {/* Инфо справа от фото */}
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

      {/* Описание */}
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

      {/* PDF протокол */}
      {product.pdf && (
        <div className="product-block-section">
          <a
            className="product-protocol-btn"
            href={product.pdf}
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            📄 Скачать протокол (PDF)
          </a>
        </div>
      )}

      {/* Остаток на складе и заказ */}
      <div className="product-order-block">
        <div className="product-stock">
          {product.stock > 0 ? `В наличии: ${product.stock} шт.` : "Нет в наличии"}
        </div>
        {product.stock > 0 && (
          <div className="product-order-form">
            <button className="qty-btn" onClick={() => setQty(Math.max(1, qty - 1))}>-</button>
            <span className="qty-value">{qty}</span>
            <button className="qty-btn" onClick={() => setQty(Math.min(product.stock, qty + 1))}>+</button>
            <button className="add-to-cart-btn">
              В корзину
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
