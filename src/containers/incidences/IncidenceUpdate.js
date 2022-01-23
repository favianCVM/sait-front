import React from "react";
import { useToast, useBoolean } from "@chakra-ui/react";
import IncidenceForm from "@components/incidences/IncidenceForm";
import { PageHeader, SpinnerScreen } from "@components/common";
import history from "@utils/history";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "@actions/";

const IncidenceUpdate = ({ isAdmin, isUser, isTechnician, actions }) => {
  const [isFetching, togleIsFetching] = useBoolean(false);
  const [devices, setDevices] = React.useState([]);
  const [updateIncidence, setUpdateIncidence] = React.useState({
    ...history.location.state?.incidence,
  });

  const toast = useToast();

  React.useEffect(() => {
    getDevices();
    if (!history.location.state?.incidence) history.goBack();
  }, []);

  const getDevices = async () => {
    togleIsFetching.on();

    let response = await actions.getAllDevices();

    if (response.success) setDevices(response.data);
    else
      await toast({
        title: response.title || "",
        description: response.description || "",
        status: response.status,
        duration: 5000,
        isClosable: true,
      });

    togleIsFetching.off();
  };

  const handleSubmit = async (values, { resetForm }) => {
    togleIsFetching.on();

    let response = await actions.updateIncidence(values);

    if (response.success) {
      resetForm();
      if (isAdmin) history.push("/admin/incidences");
      else if (isTechnician) history.push("/technician/incidences");
      else if (isUser) history.push("/incidences");
    }

    await toast({
      title: response.title || "",
      description: response.description || "",
      status: response.status,
      duration: 5000,
      isClosable: true,
    });

    togleIsFetching.off();
  };

  return (
    <>
      <SpinnerScreen open={isFetching} />

      <PageHeader
        displayGoBackButton={true}
        title={`Actualizacion de incidencia #${updateIncidence.id || "-"}`}
      />

      <IncidenceForm
        devices={devices}
        handleSubmit={handleSubmit}
        updateIncidence={updateIncidence}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  isAdmin: state.auth.get("token") && parseInt(state.auth.get("role")) === 60,
  isTechnician:
    state.auth.get("token") && parseInt(state.auth.get("role")) === 55,
  isUser: state.auth.get("token") && parseInt(state.auth.get("role")) === 50,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(IncidenceUpdate);
