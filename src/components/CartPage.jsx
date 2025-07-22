// src/components/CartPage.jsx

import React from "react";
import CartModal from "./CartModal";

const CartPage = () => {
  return (
    // CartModal без пропса product — просто выводит содержимое корзины
    <CartModal open={true} onClose={() => window.history.back()} />
  );
};

export default CartPage;
