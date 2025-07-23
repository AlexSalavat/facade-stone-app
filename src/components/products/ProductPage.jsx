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
      const { data, error } = await supabase
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

  // Состав — бери из product.composition, если есть, иначе оставь пустым
  let composition = product.composition || "";

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

      {composition && (
        <div className="section-block">
          <div className="section-title blue">Состав</div>
          <div className="product-composition">
            <em>{composition}</em>
          </div>
        </div>
      )}

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

      {/* Кнопки PDF/вопрос */}
      <div className="product-buttons-row">
        {product.pdf && (
          <a
            href={product.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn pdf-btn custom-btn"
          >
            📄 Открыть PDF
          </a>
        )}
        <button
          className="btn ask-btn custom-btn"
          onClick={() => window.Telegram?.WebApp?.openTelegramLink?.()}
        >
          💬 Задать вопрос
        </button>
      </div>
      {/* Кнопка в корзину */}
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
