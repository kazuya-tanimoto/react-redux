import { Float } from "@/components/Float.tsx";
import type { RootState } from "@/store.ts";
import { Badge, Flex, Heading } from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

export const Header = () => {
  const { amount } = useSelector((store: RootState) => store.cart);

  return (
    <Flex w="full" justify="space-around" align="center" py={4} bg="gray.700">
      <Heading as="h1" size="3xl" color="white">
        React Redux
      </Heading>
      <Flex align="center">
        <FaShoppingCart size={40} color="white" />
        <Float position="relative" bottom={4} right={2}>
          <Badge colorScheme="red" rounded="full" px={2} py={1}>
            {amount}
          </Badge>
        </Float>
      </Flex>
    </Flex>
  );
};
