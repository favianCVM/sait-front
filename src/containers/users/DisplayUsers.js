import React from "react";
import { Box, useDisclosure, useToast, useBoolean } from "@chakra-ui/react";
import { AiOutlineUserAdd } from "react-icons/ai";
import UsersTable from "@components/users/UsersTable";
import ManageUser from "@components/users/ManageUser";
import { SpinnerScreen, PageHeader } from "@components/common";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "@actions/";

const DisplayUsers = ({ actions }) => {
  const [users, setUsers] = React.useState([]);
  const [updateUser, setUpdateUser] = React.useState(null);

  const [isFetching, togleIsFetching] = useBoolean(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  React.useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    togleIsFetching.on();

    let response = await actions.getAllUsers();

    if (response.success) setUsers(response.data);
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

  const handleSubmitUser = async (values) => {
    togleIsFetching.on();

    let response;

    if (values.id) response = await actions.updateUser(values);
    else response = await actions.createUser(values);

    await toast({
      title: response.title || "",
      description: response.description || "",
      status: response.status,
      duration: 5000,
      isClosable: true,
    });

    if (response.success) {
      getUsers();
      onClose();
    }

    togleIsFetching.off();
  };

  const handleDisableUser = async (id) => {
    togleIsFetching.on();

    let response = await actions.disableUser(id);

    await toast({
      title: response.title || "",
      description: response.description || "",
      status: response.status,
      duration: 5000,
      isClosable: true,
    });

    if (response.success) {
      getUsers();
    }
    togleIsFetching.off();
  };

  const handleEditUser = async (user) => {
    await setUpdateUser(user);
    onOpen();
  };

  return (
    <Box>
      <SpinnerScreen open={isFetching} />
      <PageHeader
        title="Usuarios"
        action={onOpen}
        actionIcon={<AiOutlineUserAdd />}
        actionName="Crear usuario"
      />

      <UsersTable
        data={users}
        handleEdit={handleEditUser}
        handleDisable={handleDisableUser}
        isFetching={isFetching}
      />

      <ManageUser
        updateUser={updateUser}
        handleSubmit={handleSubmitUser}
        isOpen={isOpen}
        onClose={async () => {
          setUpdateUser(null);
          onClose();
        }}
      />
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(null, mapDispatchToProps)(DisplayUsers);
