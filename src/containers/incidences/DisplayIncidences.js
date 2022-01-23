import React from "react";
import { Box, useDisclosure, useBoolean, useToast } from "@chakra-ui/react";
import { PageHeader, SpinnerScreen } from "@components/common";
import IncidenceTable from "@components/incidences/IncidenceTable";
import history from "@utils/history";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "@actions/";

const DisplayIncidences = ({ actions, isAdmin, isTechnician, userId }) => {
  const [incidences, setIncidences] = React.useState([]);
  const [isFetching, togleIsFetching] = useBoolean(false);

  const toast = useToast();

  React.useEffect(() => {
    if (isAdmin) getAllIncidences();
    else if (isTechnician) getTechnicianIncidences();
    else if (isUser) return;
  }, []);

  const getAllIncidences = async () => {
    togleIsFetching.on();

    let response = await actions.getAllIncidences();

    if (response.success) setIncidences(response.data);
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

  const getTechnicianIncidences = async () => {
    togleIsFetching.on();

    let response = await actions.getTechnicianIncidences(userId);

    if (response.success) setIncidences(response.data);
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

  const handleManagement = (incidence) => {
    history.push({
      pathname: isAdmin
        ? `/admin/incidence-management`
        : isTechnician
        ? `/technician/incidence-management`
        : `/incidence-management`,
      state: {
        incidence,
      },
    });
  };

  const handleEdit = (incidence) => {
    history.push({
      pathname: "/admin/incidence-update",
      state: {
        incidence,
      },
    });
  };

  const handleConclude = (incidence) => {
    history.push({
      pathname: `/technician/conclude-incidence`,
      state: {
        incidence,
      },
    });
  };

  return (
    <>
      <SpinnerScreen open={isFetching} />

      <PageHeader
        title={isTechnician ? "Incidencias asignadas" : "Incidencias"}
        // action={onOpen}
        // actionIcon={<IoAddCircleOutline />}
        // actionName="anadir incidencia"
      />

      {/* 
      <ManageIncidence
        handleSubmit={handleSubmit}
        isOpen={isOpen}
        onClose={onClose}
      /> */}

      <IncidenceTable
        isAdmin={isAdmin}
        isTechnician={isTechnician}
        data={incidences}
        handleManagement={handleManagement}
        handleEdit={handleEdit}
        handleConclude={handleConclude}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  isAdmin: state.auth.get("token") && parseInt(state.auth.get("role")) === 60,
  isUser: state.auth.get("token") && parseInt(state.auth.get("role")) === 50,
  isTechnician:
    state.auth.get("token") && parseInt(state.auth.get("role")) === 55,
  userId: state.auth.get("id"),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(DisplayIncidences);
