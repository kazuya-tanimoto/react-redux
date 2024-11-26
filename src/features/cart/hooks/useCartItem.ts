import { decrease, deleteItem, increase } from "@/features/cart/CartSlice.ts";
import { useDispatch } from "react-redux";

export const useCartItem = (id: number, name: string, quantity: number) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increase(id));
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      dispatch(decrease(id));
    } else {
      dispatch(deleteItem(id));
    }
  };

  const handleDelete = () => {
    dispatch(deleteItem(id));
  };

  const decreaseIconAriaLabel =
    quantity > 0 ? `decrease ${name}` : `delete ${name}`;

  return {
    handleIncrease,
    handleDecrease,
    handleDelete,
    decreaseIconAriaLabel,
  };
};
