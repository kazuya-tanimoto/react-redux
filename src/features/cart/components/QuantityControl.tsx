import { useCartItem } from "@/features/cart/hooks/useCartItem.ts";
import { HStack, Heading, IconButton, Text } from "@chakra-ui/react";
import type { JSX } from "react";
import { IoTrashBinOutline } from "react-icons/io5";
import { LuMinusCircle, LuPlusCircle } from "react-icons/lu";

type Props = {
  id: number;
  quantity: number;
  name: string;
};

export const QuantityControl = ({ id, quantity, name }: Props): JSX.Element => {
  const { handleIncrease, handleDecrease, decreaseIconAriaLabel } = useCartItem(
    id,
    name,
    quantity,
  );

  const decreaseIcon = (quantity: number) => {
    return quantity > 1 ? (
      <LuMinusCircle size={24} />
    ) : (
      <IoTrashBinOutline size={24} />
    );
  };

  return (
    <HStack gap={0}>
      <Heading as="h4" size="sm">
        数量
      </Heading>
      <IconButton
        aria-label={decreaseIconAriaLabel}
        p={1}
        icon={decreaseIcon(quantity)}
        variant="ghost"
        sx={{ _hover: { bg: "transparent" } }}
        onClick={() => handleDecrease()}
      />
      <Text w={8}>{quantity}</Text>
      <IconButton
        aria-label={`increase ${name}`}
        p={1}
        icon={<LuPlusCircle size={24} />}
        variant="ghost"
        sx={{ _hover: { bg: "transparent" } }}
        onClick={() => handleIncrease()}
      />
    </HStack>
  );
};
