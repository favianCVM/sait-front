import React from "react";
import { useDisclosure, useBoolean, Grid, useToast } from "@chakra-ui/react";
import PageHeader from "@components/common/PageHeader";
import ItemCardDisplayer from "@components/items/ItemCardDisplayer";
import { SpinnerScreen, ConfirmDialog } from "@components/common";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "@actions/";
import ManageItemCategory from "@components/items/ManageItemCategory";

const DisplayItems = ({ actions }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: confirmIsOpen,
    onOpen: confirmOnOpen,
    onClose: confirmOnClose,
  } = useDisclosure();
  const [isFetching, togleIsFetching] = useBoolean(false);
  const [components, setComponents] = React.useState([]);
  const [updateComponent, setUpdateComponent] = React.useState(null);
  const [deleteComponentId, setDeleteComponentId] = React.useState(null);

  const toast = useToast();

  React.useEffect(() => {
    getItemCategories();
  }, []);

  // item category methods

  const getItemCategories = () => {};

  const handleRegisterItemCategory = (values) => {};
  const handleDisableItemCategory = (id) => {};

  // items methods

  const handleRegisterItem = (values) => {};
  const handleDisableItem = (id) => {};

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
          setUpdateComponent(null);
          onClose();
        }}
        updateComponent={updateComponent}
      />

      <ItemCardDisplayer
        handleDisableItem={handleDisableItem}
        handleRegisterItem={handleRegisterItem}
        handleDisableItemCategory={handleDisableItemCategory}
        handleRegister={handleRegisterItem}
        data={components}
      />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(null, mapDispatchToProps)(DisplayItems);
