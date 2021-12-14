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
} from "@chakra-ui/react"

import UserForm from '@components/users/UserForm'

const ManageUser = ({isOpen, onClose, handleSubmit, updateUser}) => {
  const [isMobile] = useMediaQuery("(max-width: 680px)")

  return(
      <Modal
        //blockScrollOnMount
        //preserveScrollBarGap
        //isCentered
        trapFocus={false}
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size={'full'}
      >
        <ModalOverlay />

        <ModalContent 
          //</Modal>paddingTop={isMobile? 50 : 0}
        >
          <ModalHeader fontSize="4xl">
            {
              updateUser 
                ? "Actualizacion de usuario"
                : "Registro de usuario"
            }
          </ModalHeader>

          <ModalBody>
            <UserForm handleSubmit={handleSubmit} updateUser={updateUser} />
          </ModalBody>

          <ModalFooter>
            <Button shadow="2xl" colorScheme="blue" mr={3} onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>

      </Modal>
  )
}

export default ManageUser;