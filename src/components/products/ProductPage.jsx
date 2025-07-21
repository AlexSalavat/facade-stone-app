import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../BackButton';
import { products } from '../../data/products';
import '../../styles/ProductPage.css';

const ProductPage = () => {
  const { productId } = useParams();
  const product = products.find(p => String(p.id) === String(productId));
  const [showFullImg, setShowFullImg] = useState(false);
  const [imgToShow, setImgToShow] = useState("");

  if (!product) {
    return (
      <div className="productpage-root">
        <BackButton />
        <h2>Товар не найден</h2>
      </div>
    );
  }

  // Преимущества
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

      <div className="productpage-headerrow bigphoto">
        <div className="productpage-header-imgcol big">
          <div className="productpage-header-photo big">
            <img src={product.images[0]} alt={product.name} />
          </div>
        </div>
        <div className="productpage-header-infocol tight">
          <div className="productpage-title">{product.name}</div>
          <div className="productpage-price">{product.price} ₽</div>
          <div className="productpage-country">🇰🇷 {product.country}</div>
          <div className="productpage-rating">
            <span className="productpage-stars">
              {'★'.repeat(Math.round(product.rating))}
            </span>
            <span className="productpage-ratingnum">{product.rating}</span>
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
              className="productpage-gallery-img"
              onClick={() => {
                setShowFullImg(true);
                setImgToShow(img);
              }}
            />
          ))}
        </div>
      )}

      {/* Крупное фото (модалка) */}
      {showFullImg && (
        <div className="productpage-fullimg-modal" onClick={() => setShowFullImg(false)}>
          <img src={imgToShow} alt="" />
        </div>
      )}

      {/* Описание */}
      <div className="productpage-descblock">
        <div className="productpage-section-title">О препарате</div>
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
