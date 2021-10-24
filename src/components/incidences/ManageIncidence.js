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

import IncidenceForm from "@components/incidences/IncidenceForm";

const ManageIncidence = ({ isOpen, onClose, handleSubmit, dialogBlocked }) => {
  const [isMobile] = useMediaQuery("(max-width: 680px)");
  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      trapFocus={false}
      isCentered
      size={`${isMobile ? 'full' : '2xl'}`}
    >
      <ModalOverlay />

      <ModalContent paddingTop={isMobile ? 50 : 0}>
        <ModalHeader>
          {dialogBlocked
            ? "Estamos procesando su peticion, espere unos segundos..."
            : "Registro de incidencia"}
        </ModalHeader>

        <ModalBody>
          <IncidenceForm handleSubmit={handleSubmit} />
        </ModalBody>

        <ModalFooter>
          <Button
            disabled={dialogBlocked}
            colorScheme="blue"
            mr={3}
            onClick={onClose}
          >
            Cerrar
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ManageIncidence;
