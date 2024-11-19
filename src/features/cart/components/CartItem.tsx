import { deleteItem } from "@/features/cart/CartSlice.ts";
import type { CartItem as CartItemType } from "@/features/types";
import { Button, HStack, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { LuMinusCircle, LuPlusCircle } from "react-icons/lu";
import { useDispatch } from "react-redux";

export const CartItem = ({ id, name, price, url, amount }: CartItemType) => {
  const subtotal = price * amount;
  const dispatch = useDispatch();

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
          <HStack>
            <Heading as="h4" size="sm" mr={4}>
              数量
            </Heading>
            <LuPlusCircle size={24} />
            <Text w={8}>{amount}</Text>
            <LuMinusCircle size={24} />
          </HStack>
          <HStack>
            <Heading as="h4" size="sm">
              小計
            </Heading>
            <Text w={20}>{subtotal.toLocaleString()} 円</Text>
          </HStack>
          <Button
            colorScheme="teal"
            size="sm"
            onClick={() => dispatch(deleteItem(id))}
          >
            削除
          </Button>
        </HStack>
      </VStack>
    </HStack>
  );
};
