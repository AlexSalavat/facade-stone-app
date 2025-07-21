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

  // Парсим преимущества
  let description = product.description || "";
  let descMain = description;
  let advantages = [];
  if (description.includes("Преимущества")) {
    descMain = description.split("Преимущества")[0].trim();
    advantages = description.split("Преимущества:")[1]
      ?.split('\n')
      .filter(x => x && x.trim().length > 2 && !x.includes('Форма выпуска'))
      .map(x => x.replace(/^[-–▪️•]+/, '').trim());
  }

  return (
    <div className="productpage-root">
      <BackButton />
      {/* Новый красивый блок — фото слева, инфо справа */}
      <div className="productpage-headerrow">
        <div className="productpage-header-imgcol">
          <div className="productpage-header-photo" onClick={() => setShowFullImg(true)}>
            <img src={activeImg} alt={product.name} />
          </div>
        </div>
        <div className="productpage-header-infocol">
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
        <div className="productpage-desc">{descMain}</div>
      </div>

      {/* Преимущества */}
      {advantages.length > 0 && (
        <div className="productpage-descblock">
          <div className="productpage-section-title green">Преимущества</div>
          <ul className="productpage-advantages">
            {advantages.map((x, i) => <li key={i}>{x}</li>)}
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
