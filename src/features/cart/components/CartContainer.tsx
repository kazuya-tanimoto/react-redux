import { CartItem } from "@/features/cart/components/CartItem.tsx";
import { useCart } from "@/features/cart/hooks/useCart.ts";
import {
  Button,
  Divider,
  HStack,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";

export const CartContainer = () => {
  const { handleClearCart, cartItems, totalPrice } = useCart();

  return (
    <VStack
      w="64rem"
      px={8}
      gap={4}
      divider={<Divider borderColor="gray.400" borderWidth={0.5} />}
    >
      <Heading as="h2" size="2xl">
        Cart
      </Heading>
      {cartItems.length === 0 ? (
        <Text fontSize="xl">カートに商品がありません</Text>
      ) : (
        <>
          <VStack w="full" px={8} gap={10}>
            {cartItems.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </VStack>
          <VStack w="full" px={8} gap={16}>
            <HStack justify="space-between" w="full">
              <Text fontSize="xl">合計金額</Text>
              <Text fontSize="xl">{totalPrice.toLocaleString()} 円</Text>
            </HStack>
            <HStack justify="space-around" w="full">
              <Button size="lg" w={32} onClick={() => handleClearCart()}>
                全削除
              </Button>
              <Button colorScheme="teal" size="lg" w={32}>
                購入手続き
              </Button>
            </HStack>
          </VStack>
        </>
      )}
    </VStack>
  );
};
