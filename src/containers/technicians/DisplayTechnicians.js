import React from "react";
import { Box, useDisclosure, useBoolean, useToast } from "@chakra-ui/react";
import PageHeader from "@components/common/PageHeader";
import TechniciansTable from "@components/technicians/TechniciansTable";
import { SpinnerScreen } from "@components/common";
import history from "@utils/history";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "@actions/";

const DisplayTechnicians = ({ actions }) => {
  const [technicians, setTechnicians] = React.useState([]);
  const [isFetching, togleIsFetching] = useBoolean(false);

  const toast = useToast();

  React.useEffect(() => {
    getTechnicians();
  }, []);

  const handleTechnicianProfile = (technician) => {
    history.push({
      pathname: "/admin/technician-profile",
      state: {
        user: technician,
        isTechnician: true
      },
    });
  };

  const getTechnicians = async () => {
    togleIsFetching.on();

    let response = await actions.getAllTechnicians();

    if (response.success) setTechnicians(response.data);
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

  return (
    <Box>
      <SpinnerScreen open={isFetching} />

      <PageHeader title="Técnicos" />

      <TechniciansTable
        data={technicians}
        handleTechnicianProfile={handleTechnicianProfile}
      />
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(null, mapDispatchToProps)(DisplayTechnicians);
