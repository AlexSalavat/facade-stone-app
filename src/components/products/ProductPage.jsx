import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../BackButton';
import { products } from '../../data/products';
import '../../styles/ProductPage.css';

const ProductPage = () => {
  const { productId } = useParams();
  const product = products.find(p => String(p.id) === String(productId));
  const [fullImg, setFullImg] = useState(null);

  if (!product) {
    return (
      <div className="productpage-root">
        <BackButton />
        <h2>Товар не найден</h2>
      </div>
    );
  }

  // Парсим преимущества
  let descMain = product.description;
  let advantages = [];
  if (product.description?.includes("Преимущества:")) {
    const [main, adv] = product.description.split("Преимущества:");
    descMain = main.trim();
    advantages = adv
      .split('\n')
      .map(x => x.replace(/^[-–▪️•]+/, '').trim())
      .filter(x => x.length > 1);
  }

  return (
    <div className="productpage-root">
      <BackButton />

      {/* Хедер — фото и текст в линию */}
      <div className="productpage-header">
        <div className="productpage-mainimg">
          <img src={product.images[0]} alt={product.name} />
        </div>
        <div className="productpage-headinfo">
          <div className="productpage-title">{product.name}</div>
          <div className="productpage-price">{product.price} ₽</div>
          <div className="productpage-country">🇰🇷 {product.country}</div>
          <div className="productpage-rating">
            <span>★</span>
            <span>{product.rating}</span>
          </div>
        </div>
      </div>

      {/* Галерея — отдельные фото, кликабельные */}
      {product.images.length > 1 && (
        <div className="productpage-gallery">
          {product.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt=""
              className="productpage-gallery-img"
              onClick={() => setFullImg(img)}
            />
          ))}
        </div>
      )}
      {fullImg && (
        <div className="productpage-fullimg-modal" onClick={() => setFullImg(null)}>
          <img src={fullImg} alt="gallery" />
        </div>
      )}

      {/* Описание */}
      <div className="productpage-section">
        <div className="productpage-section-title">О препарате</div>
        <div className="productpage-desc">{descMain}</div>
      </div>

      {/* Преимущества */}
      {advantages.length > 0 && (
        <div className="productpage-section">
          <div className="productpage-section-title green">Преимущества</div>
          <ul className="productpage-advantages">
            {advantages.map((x, i) => <li key={i}>{x}</li>)}
          </ul>
        </div>
      )}

      {/* Сочетаемость */}
      {product.combo && (
        <div className="productpage-section">
          <div className="productpage-section-title blue">Лучше всего сочетается с:</div>
          <div className="productpage-combo">{product.combo}</div>
        </div>
      )}

      {/* PDF и кнопки */}
      <div className="productpage-btns">
        {product.pdf && (
          <a href={product.pdf} className="productpage-pdf" target="_blank" rel="noopener noreferrer">
            📄 Открыть протокол препарата (PDF)
          </a>
        )}
        <button className="btn ask-btn" onClick={() => window.Telegram?.WebApp?.openTelegramLink?.()}>Задать вопрос</button>
        <button className="btn cart-btn">В корзину</button>
      </div>
    </div>
  );
};

export default ProductPage;
