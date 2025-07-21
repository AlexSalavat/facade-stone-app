import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../BackButton';
import '../../styles/ProductPage.css';
import { products } from '../../data/products';

const ProductPage = () => {
  const { productId } = useParams();
  const product = products.find(p => String(p.id) === String(productId));
  const [modalImg, setModalImg] = useState(null);

  if (!product) {
    return (
      <div className="product-page">
        <BackButton />
        <h2>Товар не найден</h2>
      </div>
    );
  }

  // Вытаскиваем состав из описания если есть, иначе пишем дефолт.
  let composition = "";
  if (product.name === "Botulax 200") {
    composition = "Clostridium Botulinum Toxin Type A 200 units.";
  } else if (product.name === "Hutox 100") {
    composition = "Ботулинический токсин типа A (Clostridium Botulinum Toxin Type A)";
  } else if (product.name === "Belleera R15" || product.name === "Sosum Soft" || product.name === "Neuramis DEEP") {
    composition = "Гиалуроновая кислота, буферный раствор, вспомогательные компоненты.";
  } else if (product.name === "Kiara Reju") {
    composition = "PDRN, гиалуроновая кислота, коэнзимы, аминокислоты, витамины.";
  }

  // Преимущества (выделим по маркеру)
  let advantages = [];
  if (product.description && product.description.includes('Преимущества')) {
    const parts = product.description.split("Преимущества:");
    if (parts[1]) {
      advantages = parts[1]
        .split('\n')
        .map(line => line.trim().replace(/^[-–▪️•]+/, ""))
        .filter(Boolean);
    }
  }

  return (
    <div className="product-page">
      <BackButton className="mb-2" />

      <div className="product-header">
        {/* ФОТО СЛЕВА */}
        <div className="product-main-img-wrap">
          <img
            src={product.images[0]}
            alt={product.name}
            className="product-main-img"
          />
        </div>
        {/* ТЕКСТ СПРАВА */}
        <div className="product-header-info">
          <div className="product-title">{product.name}</div>
          <div className="product-price">{product.price} ₽</div>
          <div className="product-country">
            <span role="img" aria-label="Корея" className="emoji">🇰🇷</span> Корея
          </div>
          <div className="product-rating">
            <span role="img" aria-label="star" className="emoji">★</span> {product.rating}
          </div>
        </div>
      </div>

      {/* ГАЛЕРЕЯ */}
      <div className="product-gallery">
        {product.images.map((img, idx) => (
          <img
            key={idx}
            src={img}
            alt={`gallery-${idx}`}
            className="product-thumb"
            onClick={() => setModalImg(img)}
          />
        ))}
      </div>
      {/* МОДАЛКА ДЛЯ ФОТО */}
      {modalImg && (
        <div className="modal-img-bg" onClick={() => setModalImg(null)}>
          <img className="modal-img" src={modalImg} alt="fullsize" />
        </div>
      )}

      {/* Описание */}
      <div className="block">
        <div className="section-title violet">О препарате</div>
        <div className="product-desc">{product.description.split("Преимущества:")[0]}</div>
      </div>

      {/* Состав */}
      <div className="block">
        <div className="section-title blue">Состав</div>
        <div className="composition">
          <i>{composition}</i>
        </div>
      </div>

      {/* Преимущества */}
      {advantages.length > 0 && (
        <div className="block">
          <div className="section-title green">Преимущества</div>
          <ul className="product-advantages">
            {advantages.map((adv, idx) => (
              <li key={idx}>{adv}</li>
            ))}
          </ul>
        </div>
      )}

      {/* Комбо */}
      {product.combo && (
        <div className="block">
          <div className="section-title blue-2">Лучше всего сочетается с:</div>
          <div className="combo">{product.combo}</div>
        </div>
      )}

      {/* КНОПКИ */}
      <div className="product-buttons">
        {product.pdf && (
          <a
            href={product.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn pdf-btn"
          >
            📄 Открыть PDF
          </a>
        )}
        <button className="btn ask-btn">
          Задать вопрос
        </button>
      </div>
      {/* В корзину по центру */}
      <div className="cart-btn-wrap">
        <button className="btn cart-btn">В корзину</button>
      </div>
    </div>
  );
};

export default ProductPage;
