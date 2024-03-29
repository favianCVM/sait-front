import React from "react";
import { PageHeader, SpinnerScreen } from "@components/common";
import DeviceTable from "@components/devices/DeviceTable";
import { Box, useDisclosure, useToast, useBoolean } from "@chakra-ui/react";
import ManageDevice from "@components/devices/ManageDevice";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "@actions/";

const DisplayDevices = ({ actions }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [devices, setDevices] = React.useState([]);
  const [items, setItems] = React.useState([]);
  const [deviceTypes, setDeviceTypes] = React.useState([]);

  const [updateDevice, setUpdateDevice] = React.useState(null);
  const [isFetching, togleIsFetching] = useBoolean(true);
  const toast = useToast();

  React.useEffect(() => {
    getDevices();
    getItems();
    getDeviceTypes();
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

  const getItems = async () => {
    togleIsFetching.on();

    let response = await actions.getAvailableItems();

    if (response.success) setItems(response.data.filter((el) => !el.disabled));
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

  const getDeviceTypes = async () => {
    togleIsFetching.on();

    let response = await actions.getAllDeviceTypes();

    if (response.success) setDeviceTypes(response.data);
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
      onClose();
    }

    togleIsFetching.off();
  };

  const handleEditDevice = (device) => {
    setUpdateDevice({
      ...device,
      components: device.deviceComponents?.map((el) => el?.component?.id) || [],
    });
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
        onClose={() => {
          setUpdateDevice(null);
          onClose();
        }}
        items={items}
        deviceTypes={deviceTypes}
      />
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(null, mapDispatchToProps)(DisplayDevices);
