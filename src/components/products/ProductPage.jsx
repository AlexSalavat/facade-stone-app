// src/components/products/ProductPage.jsx

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import BackButton from '../BackButton';
import CartModal from '../CartModal';
import '../../styles/ProductPage.css';

const flagKR = "🇰🇷";

const ProductPage = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [modalImg, setModalImg] = useState(null);
  const [showCartModal, setShowCartModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      const { data } = await supabase
        .from('products')
        .select('*')
        .eq('id', productId)
        .single();
      setProduct(data);
      setLoading(false);
    }
    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => setShowCartModal(true);

  if (loading) return <div>Загрузка...</div>;

  if (!product) {
    return (
      <div className="product-page">
        <BackButton />
        <h2>Товар не найден</h2>
      </div>
    );
  }

  // Описание
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

  let composition = product.composition || "";

  // DEMO-лейбл бонуса (можно вставлять логику для разных условий)
  const hasBonus = true;

  return (
    <div className="product-page">
      <BackButton />

      {/* Главное фото и блок справа */}
      <div className="product-main-row">
        <div className="product-img-wrap">
          <img
            src={product.images?.[0]}
            alt={product.name}
            className="product-main-img"
            draggable={false}
          />
        </div>
        <div className="product-main-info">
          <div className="product-title">{product.name}</div>
          <div className="product-price">{product.price} ₽</div>
          <div className="product-meta">
            <span className="product-country">{flagKR} Корея</span>
            <span className="product-rating">★ {product.rating}</span>
          </div>
          {/* Можно вынести сюда бейдж новинка, топ, хит */}
        </div>
      </div>

      {/* Галерея */}
      <div className="product-gallery-thumbs">
        {product.images?.slice(1).map((img, idx) => (
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

      {/* Блок “Почему выбирают этот препарат” */}
      <div className="section-block">
        <div className="section-title purple">Почему выбирают этот препарат?</div>
        <ul className="why-list">
          <li>Оригинальная поставка из Кореи</li>
          <li>Высокая чистота и безопасность</li>
          <li>Эффект 6–9 месяцев</li>
          <li>Рекомендовано ведущими экспертами</li>
        </ul>
      </div>

      {/* О препарате */}
      <div className="section-block">
        <div className="section-title purple">О препарате</div>
        <div className="product-desc">{descMain}</div>
      </div>

      {/* Преимущества */}
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

      {/* Сочетания */}
      {product.combo && (
        <div className="section-block">
          <div className="section-title blue">Лучше всего сочетается с:</div>
          <div>{product.combo}</div>
        </div>
      )}

      {/* Сертификаты */}
      <div className="section-block section-row">
        {product.passport_pdf && (
          <a
            href={product.passport_pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn pdf-btn passport"
          >
            📄 Паспорт препарата
          </a>
        )}
        {product.protocol_pdf && (
          <a
            href={product.protocol_pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn pdf-btn protocol"
          >
            📑 Протокол безопасности
          </a>
        )}
      </div>

      {/* Бонус-лейбл */}
      {hasBonus && (
        <div className="bonus-label-row">
          <span className="bonus-label">
            <span role="img" aria-label="gift">🎁</span> Подарок или скидка при оформлении заказа
          </span>
        </div>
      )}

      {/* Кнопки внизу */}
      <div className="action-row-bottom clean-row">
        <button
          className="btn ask-btn clean"
          onClick={() => window.Telegram?.WebApp?.openTelegramLink?.()}
        >
          <span role="img" aria-label="question">💬</span> Задать вопрос
        </button>
        <button className="btn cart-btn clean" onClick={handleAddToCart}>
          В корзину
        </button>
      </div>

      {/* Модалка корзины */}
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
