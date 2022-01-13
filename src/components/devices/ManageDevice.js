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

import DeviceForm from "@components/devices/DeviceForm";

const ManageDevice = ({
  isOpen,
  onClose,
  handleSubmit,
  dialogBlocked,
  users,
  components,
  updateDevice,
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
          {dialogBlocked
            ? "Estamos procesando su peticion, espere unos segundos..."
            : "Registro de equipo"}
        </ModalHeader>

        <ModalBody>
          <DeviceForm
            updateDevice={updateDevice}
            users={users}
            handleSubmit={handleSubmit}
            components={components}
          />
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

export default ManageDevice;
