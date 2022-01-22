import React from "react";
import { useDisclosure, useBoolean, Grid, useToast } from "@chakra-ui/react";
import PageHeader from "@components/common/PageHeader";
import { IoAddCircleOutline } from "react-icons/io5";
import ManageComponent from "@components/components/ManageComponent";
import ComponentCardDisplayer from "@components/components/ComponentCardDisplayer";
import { SpinnerScreen, ConfirmDialog } from "@components/common";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "@actions/";

const data = [
  {
    serId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
    first_name: "some",
    last_name: "some",
    email: "some",
  },
  {
    serId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
    first_name: "some",
    last_name: "some",
    email: "some",
  },
  {
    serId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
    first_name: "some",
    last_name: "some",
    email: "some",
  },
  {
    serId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
    first_name: "some",
    last_name: "some",
    email: "some",
  },
  {
    serId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
    first_name: "some",
    last_name: "some",
    email: "some",
  },
  {
    serId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
    first_name: "some",
    last_name: "some",
    email: "some",
  },
  {
    serId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
    first_name: "some",
    last_name: "some",
    email: "some",
  },
];

const DisplayComponents = ({ actions }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: confirmIsOpen, onOpen: confirmOnOpen, onClose: confirmOnClose } = useDisclosure();
  const [isFetching, togleIsFetching] = useBoolean(false);
  const [components, setComponents] = React.useState([]);
  const [updateComponent, setUpdateComponent] = React.useState(null);
  const [deleteComponentId, setDeleteComponentId] = React.useState(null);

  const toast = useToast();

  React.useEffect(() => {
    getComponents();
  }, []);

  const getComponents = async () => {
    togleIsFetching.on();

    let response = await actions.getAllComponents();

    if (response.success) setComponents(response.data);
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

  const handleSubmit = async (values) => {
    togleIsFetching.on();

    let response;

    if (values.id) response = await actions.updateComponent(values);
    else response = await actions.createComponent(values);

    await toast({
      title: response.title || "",
      description: response.description || "",
      status: response.status,
      duration: 5000,
      isClosable: true,
    });

    if (response.success) {
      getComponents();
      onClose();
    }

    togleIsFetching.off();
  };

  const handleEditComponent = (component) => {
    setUpdateComponent(component);
    onOpen();
  };

  const handleDeleteModal = (id) => {
    setDeleteComponentId(id)
    confirmOnOpen()
  };

  const handleDeleteComponent = async () => {
    togleIsFetching.on();

    let response = await actions.deleteComponent(deleteComponentId);

    await toast({
      title: response.title || "",
      description: response.description || "",
      status: response.status,
      duration: 5000,
      isClosable: true,
    });

    await getComponents();

    setDeleteComponentId(null)
    togleIsFetching.off();
  };

  return (
    <>
      <SpinnerScreen open={isFetching} />

      <PageHeader
        title="Componentes"
        action={onOpen}
        actionIcon={<IoAddCircleOutline />}
        actionName="Añadir componente"
      />

      <ManageComponent
        handleSubmit={handleSubmit}
        isOpen={isOpen}
        onClose={() => {
          setUpdateComponent(null);
          onClose();
        }}
        updateComponent={updateComponent}
      />

      <ComponentCardDisplayer
        handleEdit={handleEditComponent}
        handleDelete={handleDeleteModal}
        data={components}
      />

      <ConfirmDialog
        isOpen={confirmIsOpen}
        onClose={confirmOnClose}
        confirmMethod={handleDeleteComponent}
        title="¿Desea eliminar este componente?"
      />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(null, mapDispatchToProps)(DisplayComponents);
