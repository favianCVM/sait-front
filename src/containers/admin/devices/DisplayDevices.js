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

  const getDevices = async () => {
    togleIsFetching.on();

    let response = await actions.getAllDevices();

    if (response.success) setDevices(response.data);
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

  const handleSubmitDevice = async (values) => {
    togleIsFetching.on();

    let response;

    if (values.id) response = await actions.updateDevice(values);
    else response = await actions.createDevice(values);

    await toast({
      title: response.title || "",
      description: response.description || "",
      status: response.status,
      duration: 5000,
      isClosable: true,
    });

    if (response.success) {
      getDevices();
      getUsers();
      onClose();
    }

    togleIsFetching.off();
  };

  const handleEditDevice = (device) => {
    setUpdateDevice(device);
    onOpen();
  };

  const handleDeleteDevice = async (id) => {
    togleIsFetching.on();

    let response = await actions.deleteDevice(id);

    await toast({
      title: response.title || "",
      description: response.description || "",
      status: response.status,
      duration: 5000,
      isClosable: true,
    });

    if (response.success) {
      getUsers();
      getDevices();
    }

    togleIsFetching.off();
  };

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
        handleDelete={handleDeleteDevice}
        handleEdit={handleEditDevice}
      />

      <ManageDevice
        handleSubmit={handleSubmitDevice}
        updateDevice={updateDevice}
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
