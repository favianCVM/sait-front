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
import ItemsTable from "@components/items/ItemsTable";

const ManageItems = ({
  isOpen = false,
  onClose = () => {},
  category = "",
  items = [],
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

      <ModalContent paddingTop={isMobile ? 50 : 0}>
        <ModalHeader>
          {category}
        </ModalHeader>

        <ModalBody>
          <ItemsTable data={items} />
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

export default ManageItems;
