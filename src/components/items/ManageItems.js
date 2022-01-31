import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  ModalBody,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { PageHeader } from "@components/common";
import ItemsTable from "@components/items/ItemsTable";
import ManageRegisterItem from "@components/items/ManageRegisterItem";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "@actions/";

const ManageItems = ({
  isOpen = false,
  name = "",
  items = [],
  categoryId = null,
  actions,
  onClose = () => {},
  getAllItems = () => {},
}) => {
  const {
    isOpen: registerItemIsOpen,
    onOpen: registerItemOnOpen,
    onClose: registerItemOnClose,
  } = useDisclosure();
  const toast = useToast();

  // items methods
  const handleRegisterItem = async (values) => {
    values.item_category_id = categoryId;

    let response = await actions.registerItem(values);

    await toast({
      title: response.title || "",
      description: response.description || "",
      status: response.status,
      duration: 5000,
      isClosable: true,
    });

    if (response.success) {
      registerItemOnClose();
      onClose();
      getAllItems();
    }
  };

  const handleDisableItem = async (id) => {
    let response = await actions.disableItem(id);

    await toast({
      title: response.title || "",
      description: response.description || "",
      status: response.status,
      duration: 5000,
      isClosable: true,
    });

    if (response.success) {
      onClose();
      getAllItems();
    }
  };

  const handleReincorporateItem = async (id) => {
    let response = await actions.reincorporateItem(id);

    await toast({
      title: response.title || "",
      description: response.description || "",
      status: response.status,
      duration: 5000,
      isClosable: true,
    });

    if (response.success) {
      onClose();
      getAllItems();
    }
  };

  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={isOpen}
      onClose={onClose}
      trapFocus={false}
      isCentered
      size={`full`}
    >
      <ModalOverlay />

      <ModalContent>
        <ModalHeader>
          <PageHeader
            title={name}
            action={registerItemOnOpen}
            actionName={`Registrar ${name}`}
          />
        </ModalHeader>

        <ModalBody>
          <ItemsTable
            handleReincorporation={handleReincorporateItem}
            handleDisable={handleDisableItem}
            data={items}
          />
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Cerrar
          </Button>
        </ModalFooter>
      </ModalContent>

      <ManageRegisterItem
        handleRegisterItem={handleRegisterItem}
        handleDisableItem={handleDisableItem}
        isOpen={registerItemIsOpen}
        onClose={registerItemOnClose}
        name={name}
      />
    </Modal>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(null, mapDispatchToProps)(ManageItems);
