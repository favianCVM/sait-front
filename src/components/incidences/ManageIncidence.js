import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  ModalBody,
  useMediaQuery,
  Box,
} from "@chakra-ui/react"

import IncidenceForm from "@components/incidences/IncidenceForm";

const ManageIncidence = ({isOpen, onClose, handleSubmit}) => {
  const [isMobile] = useMediaQuery("(max-width: 680px)")
  return(
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={`${isMobile ? 'full' : '2xl'}`}
      >
        <ModalOverlay />

        <ModalContent paddingTop={isMobile? 50 : 0}>
          <ModalHeader>Registro de incidencia</ModalHeader>

          <ModalBody>
            <IncidenceForm handleSubmit={handleSubmit}/>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>

      </Modal>
  )
}

export default ManageIncidence;