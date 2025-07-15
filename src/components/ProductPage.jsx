import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "./products";
import "./ProductPage.css";

function getFlag(country) {
  if (country === "Корея") return "🇰🇷";
  // Добавь другие страны, если нужно
  return "";
}

const ProductPage = () => {
  const { productId } = useParams();
  const product = products.find(p => p.id === productId);

  const [qty, setQty] = useState(1);

  if (!product) return <div className="product-notfound">Товар не найден</div>;

  return (
    <div className="container product-page">
      <div className="product-card">
        <img
          src={product.images[0]}
          alt={product.name}
          className="product-image"
        />

        <div className="product-info">
          <h1>{product.name}</h1>
          <div className="product-country">
            {getFlag(product.country)} {product.country}
          </div>
          <div className="product-rating">★ {product.rating}</div>
          <div className="product-price">{product.price} ₽</div>
          <div className="product-stock">
            {product.stock > 0 ? `В наличии: ${product.stock}` : "Нет в наличии"}
          </div>

          <div className="product-longdesc">{product.long_desc}</div>

          {product.advantages && product.advantages.length > 0 && (
            <div className="product-advantages">
              <strong>Преимущества:</strong>
              <ul>
                {product.advantages.map((adv, i) => <li key={i}>{adv}</li>)}
              </ul>
            </div>
          )}

          {product.composition && (
            <div className="product-composition">
              <strong>Состав:</strong>
              <span>{product.composition}</span>
            </div>
          )}

          {product.usage && (
            <div className="product-usage">
              <strong>Назначение:</strong>
              <span>{product.usage}</span>
            </div>
          )}

          <div className="product-qty-block">
            <button
              onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
              className="qty-btn"
            >-</button>
            <span className="qty-value">{qty}</span>
            <button
              onClick={() => setQty(qty < product.stock ? qty + 1 : qty)}
              className="qty-btn"
            >+</button>
          </div>

          <button className="add-to-cart-btn">Добавить в корзину</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
