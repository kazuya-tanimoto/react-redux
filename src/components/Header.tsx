import { Float } from "@/components/Float.tsx";
import { selectTotalQuantity } from "@/features/cart/selectors.ts";
import { Badge, Flex, HStack, Heading } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

export const Header = () => {
  const totalQuantity = useSelector(selectTotalQuantity);

  return (
    <Flex w="full" justify="space-around" py={4} bg="gray.700">
      <Heading as="h1" size="3xl" color="white">
        React Redux
      </Heading>
      <HStack>
        <FaShoppingCart size={40} color="white" aria-label="Goto Cart" />
        <Float position="relative" bottom={4} right={4}>
          <Badge
            colorScheme="red"
            rounded="full"
            px={2}
            py={1}
            aria-label="cart item quantity"
          >
            {totalQuantity}
          </Badge>
        </Float>
      </HStack>
    </Flex>
  );
};
