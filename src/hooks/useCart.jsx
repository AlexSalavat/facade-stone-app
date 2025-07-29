import { useState, useEffect } from "react";

export function useCart() {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item, qty = 1) => {
    setCart(prev => {
      const exist = prev.find(p => p.id === item.id);
      if (exist) {
        return prev.map(p =>
          p.id === item.id ? { ...p, qty: p.qty + qty } : p
        );
      }
      return [...prev, { ...item, qty }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(p => p.id !== id));
  };

  const updateQty = (id, qty) => {
    setCart(prev =>
      prev.map(p => p.id === id ? { ...p, qty: Math.max(1, qty) } : p)
    );
  };

  const clearCart = () => setCart([]);

  return { cart, addToCart, removeFromCart, updateQty, clearCart };
}
