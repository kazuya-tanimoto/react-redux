import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import type { ReactNode } from "react";

type Props = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  children: ReactNode;
};

export const ConfirmModal = ({
  title,
  isOpen,
  onClose,
  onConfirm,
  children,
}: Props) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        {title && <ModalHeader>{title}</ModalHeader>}
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
        <ModalFooter>
          <Button colorScheme="teal" w={24} mr={3} onClick={onConfirm}>
            OK
          </Button>
          <Button w={24} onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
