import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../BackButton';
import { products } from '../../data/products';
import '../../styles/ProductPage.css';

const ProductPage = () => {
  const { productId } = useParams();
  const product = products.find(p => String(p.id) === String(productId));
  const [showImg, setShowImg] = useState(null);

  if (!product) {
    return (
      <div className="product-page">
        <BackButton />
        <h2>Товар не найден</h2>
      </div>
    );
  }

  // Парсинг описания, преимуществ, состава
  const description = product.description || "";
  let descMain = description;
  let advantages = [];
  let composition = "";

  // Вытаскиваем "Преимущества:" и "Состав:"
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
  if (descMain.includes("Состав:")) {
    const compSplit = descMain.split("Состав:");
    descMain = compSplit[0].trim();
    composition = compSplit[1]?.split('\n')[0] || "";
  }

  return (
    <div className="product-page">
      <BackButton />

      <div className="product-main-row">
        <div className="product-main-image">
          <img src={product.images?.[0]} alt={product.name} />
        </div>
        <div className="product-main-info">
          <div className="product-title">{product.name}</div>
          <div className="product-price">{product.price} ₽</div>
          <div className="product-meta">
            <span className="product-country">🇰🇷 Корея</span>
            <span className="product-rating">★ {product.rating}</span>
          </div>
        </div>
      </div>

      <div className="product-gallery">
        {product.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`img-${idx}`}
            className="product-thumb"
            onClick={() => setShowImg(img)}
          />
        ))}
      </div>

      {showImg && (
        <div className="product-img-modal" onClick={() => setShowImg(null)}>
          <img src={showImg} alt="big" />
        </div>
      )}

      <div className="product-section">
        <div className="section-title section-purple">О препарате</div>
        <div className="product-desc">{descMain}</div>
      </div>

      {composition && (
        <div className="product-section">
          <div className="section-title section-blue">Состав</div>
          <div className="product-composition">{composition}</div>
        </div>
      )}

      {advantages.length > 0 && (
        <div className="product-section">
          <div className="section-title section-green">Преимущества</div>
          <ul className="product-advantages">
            {advantages.map((adv, idx) => (
              <li key={idx}>{adv}</li>
            ))}
          </ul>
        </div>
      )}

      {product.combo && (
        <div className="product-section">
          <div className="section-title section-blue">Лучше всего сочетается с:</div>
          <div className="product-combo">{product.combo}</div>
        </div>
      )}

      <div className="product-buttons">
        {product.pdf && (
          <a href={product.pdf} target="_blank" rel="noopener noreferrer" className="pdf-btn">
            📄 Открыть PDF
          </a>
        )}
        <button
          className="ask-btn"
          onClick={() => window.Telegram?.WebApp?.openTelegramLink?.()}
        >
          Задать вопрос
        </button>
      </div>
      <button className="cart-btn">В корзину</button>
    </div>
  );
};

export default ProductPage;
