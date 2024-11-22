import { clearCart } from "@/features/cart/CartSlice.ts";
import type { RootState } from "@/store.ts";
import { useDispatch, useSelector } from "react-redux";

export const useCart = () => {
  const dispatch = useDispatch();
  const { cartItems, total } = useSelector((state: RootState) => state.cart);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return { handleClearCart, cartItems, total };
};
