import { decrease, deleteItem, increase } from "@/features/cart/CartSlice.ts";
import type { CartItem as CartItemType } from "@/features/types";
import {
  Button,
  HStack,
  Heading,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { IoTrashBinOutline } from "react-icons/io5";
import { LuMinusCircle, LuPlusCircle } from "react-icons/lu";
import { useDispatch } from "react-redux";

export const CartItem = ({ id, name, price, url, amount }: CartItemType) => {
  const subtotal = price * amount;
  const dispatch = useDispatch();

  const handleDecrease = (id: number, amount: number) => {
    if (amount > 1) {
      dispatch(decrease(id));
    } else {
      dispatch(deleteItem(id));
    }
  };

  const decreaseIcon = (amount: number) => {
    return amount > 1 ? (
      <LuMinusCircle size={24} />
    ) : (
      <IoTrashBinOutline size={24} />
    );
  };

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
          <HStack gap={0}>
            <Heading as="h4" size="sm">
              数量
            </Heading>
            <IconButton
              aria-label={`increase ${name}`}
              p={1}
              icon={decreaseIcon(amount)}
              variant="ghost"
              sx={{ _hover: { bg: "transparent" } }}
              onClick={() => handleDecrease(id, amount)}
            />
            <Text w={8}>{amount}</Text>
            <IconButton
              aria-label={`increase ${name}`}
              p={1}
              icon={<LuPlusCircle size={24} />}
              variant="ghost"
              sx={{ _hover: { bg: "transparent" } }}
              onClick={() => dispatch(increase(id))}
            />
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
