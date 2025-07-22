import React, { useState } from "react";
import { useCartCtx } from "../context/CartContext";
import "../styles/CartModal.css";

// Чистые стрелочки (SVG, без обводки)
const IconMinus = () => (
  <svg width="18" height="18" viewBox="0 0 18 18">
    <rect x="4" y="8.1" width="10" height="1.8" rx="0.9" fill="#2be6a0"/>
  </svg>
);
const IconPlus = () => (
  <svg width="18" height="18" viewBox="0 0 18 18">
    <rect x="4" y="8.1" width="10" height="1.8" rx="0.9" fill="#2be6a0"/>
    <rect x="8.1" y="4" width="1.8" height="10" rx="0.9" fill="#2be6a0"/>
  </svg>
);

export default function CartModal({ open = true, onClose, product }) {
  const { cart, addToCart, removeFromCart, updateQty, clearCart } = useCartCtx();
  const [qty, setQty] = useState(1);
  if (!open && !product) return null;
  const total = cart.reduce((sum, p) => sum + p.price * p.qty, 0);

  // Стиль для стрелок
  const arrowBtn = {
    background: "#23272b", border: "none", borderRadius: 7,
    padding: "7px 7px", cursor: "pointer", margin: "0 2px", display: "flex", alignItems: "center"
  };

  const qtySelector = (
    <div style={{ display: "flex", alignItems: "center", gap: 9, justifyContent: "center" }}>
      <button style={arrowBtn} aria-label="-" onClick={() => setQty(Math.max(1, qty - 1))}><IconMinus /></button>
      <span style={{ fontSize: 19, fontWeight: 600, width: 23, textAlign: "center", color: "#fff" }}>{qty}</span>
      <button style={arrowBtn} aria-label="+" onClick={() => setQty(qty + 1)}><IconPlus /></button>
    </div>
  );

  const handleAdd = () => {
    addToCart(product, qty);
    setQty(1);
    onClose();
  };

  return (
    <div className="cart-modal-bg" onClick={onClose}>
      <div className="cart-modal" onClick={e => e.stopPropagation()} style={{ maxWidth: 350, minWidth: 0, padding: 0 }}>
        <button className="close-modal" onClick={onClose}>✕</button>
        {product ? (
          <div style={{ padding: "22px 16px 18px 16px" }}>
            <div className="cart-modal-title" style={{ marginBottom: 12, fontSize: 19, fontWeight: 700 }}>
              Добавить в корзину
            </div>
            <img src={product.images[0]} alt={product.name}
              style={{
                width: 74, height: 74, borderRadius: 10,
                display: "block", margin: "0 auto 7px auto", objectFit: "cover", background: "#16171c"
              }}
            />
            <div style={{ fontWeight: 600, marginBottom: 3, fontSize: 16, textAlign: "center", color: "#fff" }}>
              {product.name}
            </div>
            <div style={{ color: "#75f3c1", marginBottom: 6, textAlign: "center", fontWeight: 500 }}>
              {product.price} ₽
            </div>
            <div style={{ fontSize: 15, color: "#eee", margin: "7px 0 5px" }}>Количество:</div>
            {qtySelector}
            <button
              className="checkout-btn"
              style={{
                marginTop: 12, width: "100%", fontSize: 16,
                padding: "11px 0", borderRadius: 10, background: "#1be88c",
                color: "#191b1e", fontWeight: 700, marginBottom: 3
              }}
              onClick={handleAdd}
            >
              Добавить в корзину
            </button>
          </div>
        ) : (
          <div style={{ padding: "20px 8px 18px 8px" }}>
            <div className="cart-modal-title">Корзина</div>
            {cart.length === 0 ? (
              <div style={{ padding: 18, color: "#aaa", textAlign: "center" }}>Корзина пуста</div>
            ) : (
              <>
                <ul className="cart-list" style={{ padding: 0, margin: 0 }}>
                  {cart.map(item => (
                    <li key={item.id} className="cart-item" style={{ alignItems: "flex-start", gap: 10 }}>
                      <img src={item.images[0]} alt={item.name} className="cart-item-img"
                        style={{ width: 45, height: 45, borderRadius: 8, objectFit: "cover", marginTop: 2 }}
                      />
                      <div className="cart-item-info" style={{ flex: 1, fontSize: 15 }}>
                        <div style={{ fontWeight: 600 }}>{item.name}</div>
                        <div style={{ color: "#72e9b5", fontWeight: 500, fontSize: 14 }}>
                          {item.price} ₽ × {item.qty}
                        </div>
                        <div style={{ display: "flex", alignItems: "center", marginTop: 4 }}>
                          <button style={arrowBtn} onClick={() => updateQty(item.id, Math.max(1, item.qty - 1))}><IconMinus /></button>
                          <span style={{ margin: "0 5px", fontSize: 16, minWidth: 19, textAlign: "center" }}>{item.qty}</span>
                          <button style={arrowBtn} onClick={() => updateQty(item.id, item.qty + 1)}><IconPlus /></button>
                          <button className="remove-btn" onClick={() => removeFromCart(item.id)} style={{
                            background: "#2c2c38", color: "#f43c70", border: "none", borderRadius: 6, marginLeft: 8, fontWeight: 500, fontSize: 14, padding: "6px 12px"
                          }}>Удалить</button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="cart-modal-total" style={{ fontSize: 15, color: "#7ffbc5", margin: "12px 0 7px" }}>
                  Итого: <b style={{ fontSize: 17 }}>{total} ₽</b>
                </div>
                <button className="checkout-btn" style={{
                  background: "#1be88c", color: "#191b1e", borderRadius: 9,
                  fontWeight: 700, fontSize: 16, padding: "10px 0", width: "100%"
                }}>Оформить заказ</button>
                <button className="clear-btn" style={{
                  background: "#23272b", color: "#bbb", borderRadius: 9, fontSize: 15, marginTop: 7, padding: "8px 0", width: "100%"
                }} onClick={clearCart}>Очистить корзину</button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
