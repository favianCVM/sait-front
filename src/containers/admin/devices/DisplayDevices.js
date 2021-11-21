import React from "react";
import { PageHeader } from "@components/common";
import DeviceTable from "@components/devices/DeviceTable";
import { Box, useDisclosure, useToast, useBoolean } from "@chakra-ui/react";
import { AiFillFileAdd } from "react-icons/ai";

const DisplayDevices = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [devices, setDevices] = React.useState([]);
  const [updateDevice, setUpdateDevice] = React.useState(null);
  const [isFetching, togleIsFetching] = useBoolean(true);
  const toast = useToast();

  React.useEffect(() => {
    getDevices()
  }, [])

  const getDevices = () => {};

  const handleSubmitDevice = () => {};

  const handleEditDevice = () => {};

  const handleDeleteDevice = () => {};

  return (
    <Box>
      <PageHeader
        title="Equipos"
        actionName="Registrar equipo"
        action={onOpen}
        actionIcon={<AiFillFileAdd />}
      />

      <DeviceTable
        data={[]}
        isFetching={false}
        handleDeleteDevice={handleDeleteDevice}
        handleEditDevice={handleEditDevice}
      />
    </Box>
  );
};

export default DisplayDevices;
