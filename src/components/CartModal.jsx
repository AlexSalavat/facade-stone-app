import React, { useState } from "react";
import { useCartCtx } from "../context/CartContext";
import "../styles/CartModal.css";

// SVG стрелочки (без иконок — всегда рендерится!)
const ArrowLeft = () => (
  <svg width="22" height="22" viewBox="0 0 22 22">
    <circle cx="11" cy="11" r="11" fill="#1be88c" />
    <path d="M13.8 16l-4-4 4-4" stroke="#191b1e" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
const ArrowRight = () => (
  <svg width="22" height="22" viewBox="0 0 22 22">
    <circle cx="11" cy="11" r="11" fill="#1be88c" />
    <path d="M8.2 6l4 4-4 4" stroke="#191b1e" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function CartModal({ open = true, onClose, product }) {
  const { cart, addToCart, removeFromCart, updateQty, clearCart } = useCartCtx();
  const [qty, setQty] = useState(1);
  if (!open && !product) return null;
  const total = cart.reduce((sum, p) => sum + p.price * p.qty, 0);

  const qtySelector = (
    <div style={{
      display: "flex", alignItems: "center", gap: 18,
      justifyContent: "center", margin: "10px 0 18px"
    }}>
      <button
        onClick={() => setQty(Math.max(1, qty - 1))}
        style={{
          background: "none", border: "none", padding: 0, cursor: "pointer"
        }}
        aria-label="Уменьшить"
      ><ArrowLeft /></button>
      <span style={{
        fontSize: 20, minWidth: 32, textAlign: "center", fontWeight: 600, color: "#fff"
      }}>{qty}</span>
      <button
        onClick={() => setQty(qty + 1)}
        style={{
          background: "none", border: "none", padding: 0, cursor: "pointer"
        }}
        aria-label="Увеличить"
      ><ArrowRight /></button>
    </div>
  );

  const handleAdd = () => {
    addToCart(product, qty);
    setQty(1);
    onClose();
  };

  return (
    <div className="cart-modal-bg" onClick={onClose}>
      <div className="cart-modal" onClick={e => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>✕</button>
        {product ? (
          <div style={{ maxWidth: 340, margin: "auto", padding: 0 }}>
            <div className="cart-modal-title" style={{ marginBottom: 10, fontSize: 20, fontWeight: 700 }}>
              Добавить в корзину
            </div>
            <img src={product.images[0]} alt={product.name}
              style={{
                width: 110, height: 110, borderRadius: 14,
                display: "block", margin: "0 auto 11px auto", objectFit: "cover", background: "#151821"
              }}
            />
            <div style={{ fontWeight: 600, marginBottom: 3, fontSize: 17, textAlign: "center", color: "#fff" }}>
              {product.name}
            </div>
            <div style={{ color: "#8ef9cb", marginBottom: 6, textAlign: "center", fontWeight: 500 }}>
              {product.price} ₽
            </div>
            <div style={{ fontSize: 16, color: "#eee", margin: "7px 0 5px" }}>Количество:</div>
            {qtySelector}
            <button
              className="checkout-btn"
              style={{
                marginTop: 12, width: "100%", fontSize: 17,
                padding: "12px 0", borderRadius: 11, background: "#1be88c",
                color: "#191b1e", fontWeight: 700
              }}
              onClick={handleAdd}
            >
              Добавить в корзину
            </button>
          </div>
        ) : (
          <>
            <div className="cart-modal-title">Корзина</div>
            {cart.length === 0 ? (
              <div style={{ padding: 20, color: "#aaa" }}>Корзина пуста</div>
            ) : (
              <>
                <ul className="cart-list">
                  {cart.map(item => (
                    <li key={item.id} className="cart-item">
                      <img src={item.images[0]} alt={item.name} className="cart-item-img" />
                      <div className="cart-item-info">
                        <div>{item.name}</div>
                        <div>{item.price} ₽ × {item.qty}</div>
                        <div>
                          <button onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))}>-</button>
                          <span style={{ margin: "0 7px" }}>{item.qty}</span>
                          <button onClick={() => updateQty(item.id, item.qty + 1)}>+</button>
                          <button className="remove-btn" onClick={() => removeFromCart(item.id)}>Удалить</button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="cart-modal-total">Итого: <b>{total} ₽</b></div>
                <button className="checkout-btn">Оформить заказ</button>
                <button className="clear-btn" onClick={clearCart}>Очистить корзину</button>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}
