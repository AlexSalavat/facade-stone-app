import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../BackButton';
import { products } from '../../data/products';
import '../../styles/ProductPage.css';

const ProductPage = () => {
  const { productId } = useParams();
  const product = products.find(p => String(p.id) === String(productId));
  const [activeImg, setActiveImg] = useState(product?.images?.[0] || "");
  const [showFullImg, setShowFullImg] = useState(false);

  if (!product) {
    return (
      <div className="productpage-root">
        <BackButton />
        <h2>Товар не найден</h2>
      </div>
    );
  }

  return (
    <div className="productpage-root">
      <BackButton />
      <div className="productpage-mainrow">
        {/* Фото слева */}
        <div className="productpage-photo-col">
          <div
            className="productpage-photo"
            onClick={() => setShowFullImg(true)}
          >
            <img src={activeImg} alt={product.name} />
          </div>
        </div>
        {/* Инфо справа */}
        <div className="productpage-info-col">
          <h2 className="productpage-title">{product.name}</h2>
          <div className="productpage-meta">
            <span className="productpage-price">{product.price} ₽</span>
            <span className="productpage-country">🇰🇷 {product.country}</span>
            <span className="productpage-rating">★ {product.rating}</span>
          </div>
        </div>
      </div>

      {/* Галерея снизу */}
      {product.images?.length > 1 && (
        <div className="productpage-gallery">
          {product.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt=""
              className={`productpage-gallery-img${img === activeImg ? ' active' : ''}`}
              onClick={() => setActiveImg(img)}
            />
          ))}
        </div>
      )}

      {/* Крупное фото по тапу */}
      {showFullImg && (
        <div className="productpage-fullimg-modal" onClick={() => setShowFullImg(false)}>
          <img src={activeImg} alt="" />
        </div>
      )}

      {/* Описание */}
      <div className="productpage-descblock">
        <div className="productpage-section-title">Про препарат</div>
        <div className="productpage-desc">{(product.description || '').split('Преимущества')[0].trim()}</div>
      </div>

      {/* Преимущества */}
      {product.description && product.description.includes('Преимущества') && (
        <div className="productpage-descblock">
          <div className="productpage-section-title green">Преимущества</div>
          <ul className="productpage-advantages">
            {product.description
              .split('Преимущества:')[1]
              ?.split('\n')
              .filter(x => x && x.trim().length > 2 && !x.includes('Форма выпуска'))
              .map((x, i) => <li key={i}>{x.replace(/^[-–▪️•]+/,'').trim()}</li>)}
          </ul>
        </div>
      )}

      {/* Сочетается с */}
      {product.combo && (
        <div className="productpage-descblock">
          <div className="productpage-section-title blue">Лучше всего сочетается с:</div>
          <div className="productpage-combo">{product.combo}</div>
        </div>
      )}

      {/* PDF + Кнопки */}
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
