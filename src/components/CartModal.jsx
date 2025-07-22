import React, { useState } from "react";
import { useCartCtx } from "../context/CartContext";
import "../styles/CartModal.css";

export default function CartModal({ open = true, onClose, product }) {
  const { cart, addToCart, removeFromCart, updateQty, clearCart } = useCartCtx();

  // Если передан product — показываем выбор количества и кнопку "Добавить"
  const [qty, setQty] = useState(1);

  if (!open && !product) return null;

  // Сумма заказа
  const total = cart.reduce((sum, p) => sum + p.price * p.qty, 0);

  // Добавление нового товара с выбранным количеством
  const handleAdd = () => {
    addToCart(product, qty);
    setQty(1);
    onClose();
  };

  return (
    <div className="cart-modal-bg" onClick={onClose}>
      <div className="cart-modal" onClick={e => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>✕</button>
        {/* Если есть product — режим добавления товара */}
        {product ? (
          <>
            <div className="cart-modal-title">Добавить в корзину</div>
            <div style={{ textAlign: "center", margin: 20 }}>
              <img src={product.images[0]} alt={product.name} style={{ width: 120, borderRadius: 12, marginBottom: 16 }} />
              <div style={{ fontWeight: 600, marginBottom: 6 }}>{product.name}</div>
              <div style={{ color: "#444", marginBottom: 12 }}>{product.price} ₽</div>
              <label>
                Количество:{" "}
                <input
                  type="number"
                  min={1}
                  value={qty}
                  onChange={e => setQty(Number(e.target.value))}
                  style={{ width: 60, textAlign: "center" }}
                />
              </label>
              <div>
                <button className="checkout-btn" style={{ marginTop: 18 }} onClick={handleAdd}>
                  Добавить в корзину
                </button>
              </div>
            </div>
          </>
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
                      <img src={item.images[0]} alt={item.name} className="cart-item-img"/>
                      <div className="cart-item-info">
                        <div>{item.name}</div>
                        <div>{item.price} ₽ × {item.qty}</div>
                        <div>
                          <button onClick={() => updateQty(item.id, Math.max(1, item.qty-1))}>-</button>
                          <span style={{ margin: "0 7px" }}>{item.qty}</span>
                          <button onClick={() => updateQty(item.id, item.qty+1)}>+</button>
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
