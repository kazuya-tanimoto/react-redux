import { clearCart } from "@/features/cart/CartSlice.ts";
import {
  selectCartItems,
  selectTotalPrice,
} from "@/features/cart/selectors.ts";
import { useDispatch, useSelector } from "react-redux";

export const useCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return { handleClearCart, cartItems, totalPrice };
};
