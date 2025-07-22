import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../BackButton';
import { products } from '../../data/products';
import CartModal from '../CartModal'; // Новый импорт
import '../../styles/ProductPage.css';

const flagKR = "🇰🇷";

const ProductPage = () => {
  const { productId } = useParams();
  const product = products.find(p => String(p.id) === String(productId));
  const [modalImg, setModalImg] = useState(null);

  // Состояние для модального окна корзины
  const [showCartModal, setShowCartModal] = useState(false);

  const handleAddToCart = () => setShowCartModal(true);

  if (!product) {
    return (
      <div className="product-page">
        <BackButton />
        <h2>Товар не найден</h2>
      </div>
    );
  }

  // Преимущества и прочее
  let description = product.description || "";
  let descMain = description;
  let advantages = [];

  if (description.includes("Преимущества:")) {
    const parts = description.split("Преимущества:");
    descMain = parts[0].trim();
    const advText = parts[1]
      .replace(/Преимущества препарата:|Преимущества:/g, "")
      .replace(/^[-–▪️•]+/gm, "")
      .replace(/^\s+/gm, "")
      .split('\n')
      .filter(l => l.trim());
    advantages = advText;
  }

  // Состав — демо (лучше прописать в product, если есть данные)
  let composition = "";
  if (product.id === "botulax-200") composition = "Clostridium Botulinum Toxin Type A 200 units";
  if (product.id === "hutox-100") composition = "Ботулинический токсин типа A (Clostridium Botulinum Toxin Type A)";
  if (product.id === "belleera-r15") composition = "Гиалуроновая кислота, 1 шприц 3 мл";
  if (product.id === "sosum-soft") composition = "Гиалуроновая кислота, 1 шприц 3 мл";
  if (product.id === "neuramis-deep") composition = "Гиалуроновая кислота с лидокаином 1 мл";
  if (product.id === "kiara-reju") composition = "PDRN, гиалуроновая кислота, коэнзимы";

  return (
    <div className="product-page">
      <BackButton />
      <div className="product-main-section">
        <img
          src={product.images?.[0]}
          alt={product.name}
          className="product-main-img"
          draggable={false}
        />
        <div className="product-info-block">
          <div className="product-title">{product.name}</div>
          <div className="product-price">{product.price} ₽</div>
          <div className="product-meta">
            <span className="product-country">{flagKR} Корея</span>
            <span className="product-rating">★ {product.rating}</span>
          </div>
        </div>
      </div>

      {/* Галерея */}
      <div className="product-gallery-thumbs">
        {product.images?.map((img, idx) => (
          <img
            src={img}
            alt={`${product.name}-thumb-${idx}`}
            key={idx}
            className="product-thumb-img"
            onClick={() => setModalImg(img)}
            draggable={false}
          />
        ))}
      </div>

      {/* Модалка для фото */}
      {modalImg && (
        <div className="img-modal" onClick={() => setModalImg(null)}>
          <img src={modalImg} alt="big" />
        </div>
      )}

      <div className="section-block">
        <div className="section-title purple">О препарате</div>
        <div className="product-desc">{descMain}</div>
      </div>

      <div className="section-block">
        <div className="section-title blue">Состав</div>
        <div className="product-composition">
          <em>{composition}</em>
        </div>
      </div>

      {advantages.length > 0 && (
        <div className="section-block">
          <div className="section-title green">Преимущества</div>
          <ul className="product-advantages">
            {advantages.map((adv, idx) => (
              <li key={idx}>{adv}</li>
            ))}
          </ul>
        </div>
      )}

      {product.combo && (
        <div className="section-block">
          <div className="section-title blue">Лучше всего сочетается с:</div>
          <div>{product.combo}</div>
        </div>
      )}

      {/* Кнопки */}
      <div className="product-buttons-row">
        {product.pdf && (
          <a
            href={product.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn pdf-btn"
          >
            <span role="img" aria-label="pdf">📄</span> Открыть PDF
          </a>
        )}
        <button
          className="btn ask-btn"
          onClick={() => window.Telegram?.WebApp?.openTelegramLink?.()}
        >
          Задать вопрос
        </button>
      </div>
      <div className="product-buttons-row cart-row">
        <button className="btn cart-btn" onClick={handleAddToCart}>
          В корзину
        </button>
      </div>
      {showCartModal && (
        <CartModal
          product={product}
          onClose={() => setShowCartModal(false)}
        />
      )}
    </div>
  );
};

export default ProductPage;
