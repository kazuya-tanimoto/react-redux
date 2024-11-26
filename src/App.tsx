import "./App.css";
import { Header } from "@/components/Header.tsx";
import { CartContainer } from "@/features/cart/components/CartContainer.tsx";
import { VStack } from "@chakra-ui/react";

function App() {
  return (
    <VStack w="full" justify="center" gap={4} color="gray.700">
      <Header />
      <CartContainer />
    </VStack>
  );
}

export default App;
