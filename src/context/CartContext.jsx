import { createContext, useContext } from "react";
import { useCart } from "../hooks/useCart";

const CartContext = createContext();

export function CartProvider({ children }) {
  const cartApi = useCart();
  return <CartContext.Provider value={cartApi}>{children}</CartContext.Provider>;
}
export const useCartCtx = () => useContext(CartContext);
