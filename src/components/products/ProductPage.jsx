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

  // Описание и преимущества
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

      {/* Верх: крупное фото слева, компактно текст справа */}
      <div className="product-header-row">
        <div className="product-header-img-wrap">
          <img
            src={product.images?.[0]}
            alt={product.name}
            className="product-header-img"
            draggable={false}
          />
        </div>
        <div className="product-header-info">
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
      {modalImg && (
        <div className="img-modal" onClick={() => setModalImg(null)}>
          <img src={modalImg} alt="big" />
        </div>
      )}

      {/* Почему выбирают */}
      <div className="section-block">
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

      {/* Состав */}
      {composition && (
        <div className="section-block">
          <div className="section-title blue">Состав</div>
          <div className="product-composition">
            <em>{composition}</em>
          </div>
        </div>
      )}

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

      {/* Сочетается с */}
      {product.combo && (
        <div className="section-block">
          <div className="section-title blue">Лучше всего сочетается с:</div>
          <div>{product.combo}</div>
        </div>
      )}

      {/* PDF/сертификаты - без выделения, просто ссылками */}
      <div className="product-buttons-row files-row">
        {product.passport_pdf && (
          <a
            href={product.passport_pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="file-link"
          >
            📄 Паспорт препарата
          </a>
        )}
        {product.protocol_pdf && (
          <a
            href={product.protocol_pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="file-link"
          >
            📄 Протокол (MSDS)
          </a>
        )}
      </div>

      {/* Бонус/подарок — без выделения */}
      <div className="bonus-simple">
        🎁 Подарок или скидка при оформлении заказа
      </div>

      {/* Кнопки в одну строку, обычные без заливки */}
      <div className="product-buttons-row btns-row">
        <button
          className="ask-btn"
          onClick={() => window.Telegram?.WebApp?.openTelegramLink?.()}
        >
          💬 Задать вопрос
        </button>
        <button
          className="cart-btn"
          onClick={handleAddToCart}
        >
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
