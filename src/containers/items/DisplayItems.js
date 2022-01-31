import React from "react";
import { useDisclosure, useBoolean, Grid, useToast } from "@chakra-ui/react";
import PageHeader from "@components/common/PageHeader";
import ItemCardDisplayer from "@components/items/ItemCardDisplayer";
import { SpinnerScreen, ConfirmDialog } from "@components/common";
import ManageItemCategory from "@components/items/ManageItemCategory";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "@actions/";

const DisplayItems = ({ actions }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: confirmIsOpen,
    onOpen: confirmOnOpen,
    onClose: confirmOnClose,
  } = useDisclosure();
  const [isFetching, togleIsFetching] = useBoolean(false);
  const [items, setItems] = React.useState([]);

  const toast = useToast();

  React.useEffect(() => {
    getAllItems();
  }, []);

  // item category methods
  const getAllItems = async () => {
    togleIsFetching.on();

    let response = await actions.getAllItems();

    if (response.success) setItems(response.data);
    else
      toast({
        title: response.title || "",
        description: response.description || "",
        status: response.status,
        duration: 5000,
        isClosable: true,
      });

    togleIsFetching.off();
  };

  const handleRegisterItemCategory = async (values) => {
    togleIsFetching.on();

    let response = await actions.registerItemCategory(values);

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

    togleIsFetching.off();
  };

  const handleDisableItemCategory = async (id) => {
    togleIsFetching.on();

    let response = await actions.disableItemCategory(id);

    await toast({
      title: response.title || "",
      description: response.description || "",
      status: response.status,
      duration: 5000,
      isClosable: true,
    });

    if (response.success) {
      getAllItems();
    }

    togleIsFetching.off();
  };

  return (
    <>
      <SpinnerScreen open={isFetching} />

      <PageHeader
        title="Elementos"
        action={onOpen}
        actionName="Registrar categoria de elemento"
      />

      <ManageItemCategory
        handleSubmit={handleRegisterItemCategory}
        isOpen={isOpen}
        onClose={() => {
          onClose();
        }}
      />

      <ItemCardDisplayer
        getAllItems={getAllItems}
        handleDisableItemCategory={handleDisableItemCategory}
        data={items}
      />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(null, mapDispatchToProps)(DisplayItems);
