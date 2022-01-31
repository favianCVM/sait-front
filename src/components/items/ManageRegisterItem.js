import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  ModalBody,
  useMediaQuery,
} from "@chakra-ui/react";
import RegisterItemForm from "./RegisterItemForm";

const ManageRegisterItem = ({
  isOpen = false,
  onClose = () => {},
  handleRegisterItem = () => {},
  name = "",
}) => {
  const [isMobile] = useMediaQuery("(max-width: 680px)");

  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      trapFocus={false}
      isCentered
      size={`${isMobile ? "full" : "2xl"}`}
    >
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>Registrar {name}</ModalHeader>

        <ModalBody>
          <RegisterItemForm handleSubmit={handleRegisterItem} name={name} />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Cerrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ManageRegisterItem;
