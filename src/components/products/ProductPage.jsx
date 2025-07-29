import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import BackButton from '../BackButton';
import CartModal from '../CartModal';
import '../../styles/ProductPage.css';

const flagKR = "🇰🇷";

const badgeColors = {
  new: "#64b5f6",
  hit: "#f06292",
  top: "#fbc02d",
  expert: "#00e676"
};

function getBadge(status) {
  if (!status) return null;
  let text = "";
  let color = "";
  switch (status) {
    case "new": text = "Новинка"; color = badgeColors.new; break;
    case "hit": text = "Хит продаж"; color = badgeColors.hit; break;
    case "top": text = "Топ"; color = badgeColors.top; break;
    case "expert": text = "Выбор экспертов"; color = badgeColors.expert; break;
    default: text = status; color = "#333";
  }
  return <span className="product-badge" style={{ background: color }}>{text}</span>;
}

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

  // Преимущества (разделяем если есть)
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

  // Динамический бейдж
  const badge = getBadge(product.status);

  return (
    <div className="product-page">
      <BackButton />

      {/* --- Главный блок --- */}
      <div className="product-main-compact">
        <div className="product-main-img-wrap large">
          <img
            src={product.images?.[0]}
            alt={product.name}
            className="product-main-img"
            draggable={false}
          />
          {badge}
        </div>
        <div className="product-main-info">
          <div className="product-title">{product.name}</div>
          <div className="product-price">{product.price} ₽</div>
          <div className="product-meta">
            <span className="product-country">{flagKR} {product.country}</span>
            <span className="product-rating">★ {product.rating}</span>
          </div>
        </div>
      </div>

      {/* Галерея (если есть еще фото) */}
      {product.images && product.images.length > 1 && (
        <div className="product-gallery-thumbs">
          {product.images.slice(1).map((img, idx) => (
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
      )}

      {modalImg && (
        <div className="img-modal" onClick={() => setModalImg(null)}>
          <img src={modalImg} alt="big" />
        </div>
      )}

      {/* Почему выбирают */}
      <div className="section-block why-block">
        <div className="section-title purple">Почему выбирают этот препарат?</div>
        <ul className="why-list">
          <li>Оригинальная поставка из Кореи</li>
          <li>Высокая чистота и безопасность</li>
          <li>Эффект 6–9 месяцев</li>
          <li>Рекомендовано ведущими экспертами</li>
        </ul>
      </div>

      {/* Описание */}
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

      {/* PDF/Сертификаты в одну строку */}
      {(product.passport_pdf || product.protocol_pdf) && (
        <div className="product-buttons-row pdf-row pdf-row-inline">
          {product.passport_pdf && (
            <a
              href={product.passport_pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn pdf-btn custom-btn"
            >
              📄 Паспорт препарата
            </a>
          )}
          {product.protocol_pdf && (
            <a
              href={product.protocol_pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="btn pdf-btn custom-btn"
              style={{ background: "#f3b421", color: "#1c1c1f" }}
            >
              📑 Протокол безопасности
            </a>
          )}
        </div>
      )}

      {/* Бонус/Подарок */}
      <div className="bonus-block">
        🎁 Пробник в подарок при покупке от 3 шт!
      </div>

      {/* Нижний action-блок — вопросы и корзина рядом! */}
      <div className="action-row-bottom">
        <button
          className="btn ask-btn custom-btn"
          onClick={() => window.Telegram?.WebApp?.openTelegramLink?.()}
        >
          💬 Задать вопрос
        </button>
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
