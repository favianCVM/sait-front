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
  isOpen = false,
  onClose = false,
  handleSubmit = () => {},
  items = [],
  deviceTypes = [],
  updateDevice = null,
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
          {updateDevice ? "Actualización de equipo" : "Registro de equipo"}
        </ModalHeader>

        <ModalBody>
          <DeviceForm
            updateDevice={updateDevice}
            handleSubmit={handleSubmit}
            items={items}
            deviceTypes={deviceTypes}
          />
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

export default ManageDevice;
