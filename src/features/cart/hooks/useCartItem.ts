import { decrease, deleteItem, increase } from "@/features/cart/CartSlice.ts";
import { useDispatch } from "react-redux";

export const useCartItem = (id: number, name: string, amount: number) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increase(id));
  };

  const handleDecrease = () => {
    if (amount > 1) {
      dispatch(decrease(id));
    } else {
      dispatch(deleteItem(id));
    }
  };

  const handleDelete = () => {
    dispatch(deleteItem(id));
  };

  const decreaseIconAriaLabel =
    amount > 0 ? `decrease ${name}` : `delete ${name}`;

  return {
    handleIncrease,
    handleDecrease,
    handleDelete,
    decreaseIconAriaLabel,
  };
};
