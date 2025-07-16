import React from "react";
import { useCartCtx } from "../context/CartContext";
import "./CartModal.css";

export default function CartModal({ open, onClose }) {
  const { cart, removeFromCart, updateQty, clearCart } = useCartCtx();
  if (!open) return null;
  const total = cart.reduce((sum, p) => sum + p.price * p.qty, 0);

  return (
    <div className="cart-modal-bg" onClick={onClose}>
      <div className="cart-modal" onClick={e => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>✕</button>
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
      </div>
    </div>
  );
}
