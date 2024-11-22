import "./App.css";
import { Header } from "@/components/Header.tsx";
import { calculate } from "@/features/cart/CartSlice.ts";
import { CartContainer } from "@/features/cart/components/CartContainer.tsx";
import type { RootState } from "@/store.ts";
import { VStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    dispatch(calculate(cartItems));
  }, [dispatch, cartItems]);

  return (
    <VStack w="full" justify="center" gap={4} color="gray.700">
      <Header />
      <CartContainer />
    </VStack>
  );
}

export default App;
