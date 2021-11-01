import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
} from "@chakra-ui/react";

const ConfirmDialog = ({
  isOpen,
  onClose,
  title,
  message,
  confirmMethod,
  confirmMessage = "Confirmar",
  cancelMessage = "Cancelar",
  confirmType = "red",
}) => {
  return (
    <Modal
      trapFocus={false}
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      isCentered
      size={`md`}
    >
      <ModalOverlay />

      <ModalContent>
        <ModalHeader textAlign="center">{title}</ModalHeader>

        <ModalBody>{message}</ModalBody>

        <ModalFooter justifyContent="center">
          <Button
            colorScheme={confirmType}
            mr={3}
            onClick={() => {
              confirmMethod();
              onClose();
            }}
          >
            {confirmMessage}
          </Button>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            {cancelMessage}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ConfirmDialog;
