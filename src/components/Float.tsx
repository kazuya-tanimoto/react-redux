import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  position?: "fixed" | "absolute" | "relative" | "static" | "sticky";
  top?: string | number;
  right?: string | number;
  bottom?: string | number;
  left?: string | number;
};
export const Float = ({
  children,
  position = "fixed",
  top,
  right,
  bottom,
  left,
}: Props) => {
  return (
    <Box
      position={position}
      top={top}
      right={right}
      bottom={bottom}
      left={left}
      zIndex="1000"
    >
      {children}
    </Box>
  );
};
