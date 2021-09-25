import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  ModalBody,
  ModalCloseButton,
  Input,
  InputGroup,
  InputLeftElement,
  Box,
} from "@chakra-ui/react"
import IncidenceForm from "@components/incidences/IncidenceForm";

const ManageIncidence = ({isOpen, onClose}) => {

  return(
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="5xl"
    >
      <ModalOverlay />

      <ModalHeader>Modal Title</ModalHeader>

      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>

        <ModalBody>
          <IncidenceForm/>
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