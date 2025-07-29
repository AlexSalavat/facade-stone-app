import React from "react";
import CartModal from "./CartModal";

const CartPage = () => {
  return (
    <CartModal open={true} onClose={() => window.history.back()} />
  );
};

export default CartPage;
