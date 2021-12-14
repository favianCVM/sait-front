import React from "react";
import { PageHeader, SpinnerScreen } from "@components/common";
import DeviceTable from "@components/devices/DeviceTable";
import { Box, useDisclosure, useToast, useBoolean } from "@chakra-ui/react";
import { AiFillFileAdd } from "react-icons/ai";
import ManageDevice from "@components/devices/ManageDevice";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "@actions/";

const DisplayDevices = ({ actions }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [devices, setDevices] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  const [updateDevice, setUpdateDevice] = React.useState(null);
  const [isFetching, togleIsFetching] = useBoolean(true);
  const toast = useToast();

  React.useEffect(() => {
    getDevices();
    getUsers();
  }, []);

  const getDevices = () => {};

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

  const handleSubmitDevice = (values) => {
    console.log(values)
  };

  const handleEditDevice = () => {};

  const handleDeleteDevice = () => {};

  return (
    <Box>
      <SpinnerScreen open={isFetching} />

      <PageHeader
        title="Equipos"
        actionName="Registrar equipo"
        action={onOpen}
        actionIcon={<AiFillFileAdd />}
      />

      <DeviceTable
        data={devices}
        isFetching={false}
        handleDeleteDevice={handleDeleteDevice}
        handleEditDevice={handleEditDevice}
      />

      <ManageDevice
        handleSubmit={handleSubmitDevice}
        isOpen={isOpen}
        onClose={onClose}
        users={users}
      />
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(null, mapDispatchToProps)(DisplayDevices);
