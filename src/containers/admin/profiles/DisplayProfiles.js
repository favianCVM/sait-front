import React from "react";
import { Box, useDisclosure, useToast, useBoolean } from "@chakra-ui/react";
import PageHeader from "@components/common/PageHeader";
import { AiOutlineUserAdd } from "react-icons/ai";
import ProfileTable from "@components/profiles/ProfileTable";
import ManageProfile from "@components/profiles/ManageProfile";
import {SpinnerScreen} from '@components/common'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "@actions/";

const DisplayProfiles = ({ actions }) => {
  const [profiles, setProfiles] = React.useState([]);
  const [updateProfile, setUpdateProfile] = React.useState(null);
  const [isFetching, togleIsFetching] = useBoolean(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  React.useEffect(() => {
    getProfiles();
  }, []);

  const getProfiles = async () => {
    togleIsFetching.on()

    let response = await actions.getAllProfiles();

    if (response.success) setProfiles(response.data);
    else
      toast({
        title: response.title || "",
        description: response.description || "",
        status: response.status,
        duration: 5000,
        isClosable: true,
      });

    togleIsFetching.off()
  };

  const handleSubmitProfile = async (values) => {
    let response;

    if (values.id) response = await actions.updateProfile(values);
    else response = await actions.createProfile(values);

    await toast({
      title: response.title || "",
      description: response.description || "",
      status: response.status,
      duration: 5000,
      isClosable: true,
    });

    if (response.success) {
      getProfiles();
      onClose();
    }
  };

  const handleDeleteProfile = async (id) => {
    let response = await actions.deleteProfile(id);

    await toast({
      title: response.title || "",
      description: response.description || "",
      status: response.status,
      duration: 5000,
      isClosable: true,
    });

    if (response.success) {
      getProfiles();
    }
  };

  const handleEditProfile = async (profile) => {
    await setUpdateProfile(profile);
    onOpen();
  };

  return (
    <Box>
      <SpinnerScreen open={isFetching} />
      <PageHeader
        title="Perfiles"
        action={onOpen}
        actionIcon={<AiOutlineUserAdd />}
        actionName="Crear perfil"
      />

      <ProfileTable
        data={profiles}
        handleEdit={handleEditProfile}
        handleDelete={handleDeleteProfile}
        isFetching={isFetching}
      />

      <ManageProfile
        updateProfile={updateProfile}
        handleSubmit={handleSubmitProfile}
        isOpen={isOpen}
        onClose={async () => {
          await setUpdateProfile(null);
          onClose();
        }}
      />
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(null, mapDispatchToProps)(DisplayProfiles);
