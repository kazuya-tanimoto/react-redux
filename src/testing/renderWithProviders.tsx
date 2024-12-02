import cartReducer from "@/features/cart/CartSlice";
import { ChakraProvider } from "@chakra-ui/react";
import { configureStore } from "@reduxjs/toolkit";
import { render } from "@testing-library/react";
import type { ReactElement } from "react";
import { Provider } from "react-redux";

export const renderWithProviders = (ui: ReactElement) => {
  const store = configureStore({ reducer: { cart: cartReducer } });
  return render(
    <Provider store={store}>
      <ChakraProvider>{ui}</ChakraProvider>
    </Provider>,
  );
};
