import { QuantityControl } from "@/features/cart/components/QuantityControl.tsx";
import { useCartItem } from "@/features/cart/hooks/useCartItem.ts";
import type { CartItem as CartItemType } from "@/features/types";
import { Button, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";

export const CartItem = ({ id, name, price, url, quantity }: CartItemType) => {
  const subtotal = price * quantity;
  const { handleDelete } = useCartItem(id, name, quantity);

  return (
    <HStack gap={12} justify="start" w="full">
      <Image src={url} alt={name} rounded="lg" />
      <VStack gap={4} w="65%">
        <Heading as="h3" size="md" textAlign="left" w="full">
          {name}
        </Heading>
        <HStack w="full">
          <Heading as="h4" size="sm">
            単価
          </Heading>
          <p>{price.toLocaleString()} 円</p>
        </HStack>
        <HStack w="full" gap={16}>
          <QuantityControl id={id} quantity={quantity} name={name} />
          <HStack>
            <Heading as="h4" size="sm">
              小計
            </Heading>
            <Text w={20}>{subtotal.toLocaleString()} 円</Text>
          </HStack>
          <Button colorScheme="teal" size="sm" onClick={handleDelete}>
            削除
          </Button>
        </HStack>
      </VStack>
    </HStack>
  );
};
