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

  // Для блока "Почему выбирают"
  const why = [
    "Оригинальная поставка из Кореи",
    "Высокая чистота и безопасность",
    "Эффект 6–9 месяцев",
    "Рекомендовано ведущими экспертами"
  ];

  // Преимущества
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

  return (
    <div className="product-page">
      <BackButton />

      {/* Главное фото — доминирующее */}
      <div className="product-main-photo-wrap">
        <img
          src={product.images?.[0]}
          alt={product.name}
          className="product-main-photo"
          draggable={false}
          onClick={() => setModalImg(product.images?.[0])}
        />
      </div>

      {/* Галерея — миниатюры */}
      {product.images && product.images.length > 1 && (
        <div className="product-gallery-thumbs">
          {product.images.map((img, idx) => (
            <img
              src={img}
              alt={`thumb-${idx}`}
              key={idx}
              className="product-thumb-img"
              onClick={() => setModalImg(img)}
              draggable={false}
            />
          ))}
        </div>
      )}

      {/* Модалка для фото */}
      {modalImg && (
        <div className="img-modal" onClick={() => setModalImg(null)}>
          <img src={modalImg} alt="big" />
        </div>
      )}

      {/* Информация о товаре */}
      <div className="product-top-info">
        <div className="product-title">{product.name}</div>
        <div className="product-price">{product.price} ₽</div>
        <div className="product-meta">
          <span className="product-country">{flagKR} Корея</span>
          <span className="product-rating">★ {product.rating}</span>
        </div>
      </div>

      {/* Почему выбирают */}
      <div className="section-block">
        <div className="section-title purple">Почему выбирают этот препарат?</div>
        <ul className="why-list">
          {why.map((txt, idx) => <li key={idx}>{txt}</li>)}
        </ul>
      </div>

      {/* Описание */}
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

      {/* Состав */}
      {composition && (
        <div className="section-block">
          <div className="section-title blue">Состав</div>
          <div className="product-composition">
            <em>{composition}</em>
          </div>
        </div>
      )}

      {/* Лучше всего сочетается */}
      {product.combo && (
        <div className="section-block">
          <div className="section-title blue">Лучше всего сочетается с:</div>
          <div>{product.combo}</div>
        </div>
      )}

      {/* PDF файлы */}
      {(product.passport_pdf || product.protocol_pdf) && (
        <div className="section-block pdf-links-row">
          {product.passport_pdf && (
            <a
              href={product.passport_pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="pdf-link"
            >
              <span role="img" aria-label="pdf">📄</span> Паспорт препарата
            </a>
          )}
          {product.protocol_pdf && (
            <a
              href={product.protocol_pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="pdf-link"
            >
              <span role="img" aria-label="pdf">📑</span> Протокол препарата
            </a>
          )}
        </div>
      )}

      {/* Бонус или подарок */}
      <div className="section-block bonus-label-row">
        <div className="bonus-label">
          <span role="img" aria-label="gift">🎁</span> Подарок или скидка при оформлении заказа
        </div>
      </div>

      {/* Кнопки внизу */}
      <div className="action-row-bottom clean-row">
        <button
          className="btn ask-btn clean"
          onClick={() => window.Telegram?.WebApp?.openTelegramLink?.()}
        >
          <span role="img" aria-label="ask">💬</span> Задать вопрос
        </button>
        <button className="btn cart-btn clean" onClick={handleAddToCart}>
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
