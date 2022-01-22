import React from "react";
import { PageHeader, SpinnerScreen } from "@components/common";
import { useBoolean, useToast } from "@chakra-ui/react";
import VisualizeIncidence from "@components/incidences/VisualizeIncidence";
import IncidenceAsign from "@components/incidences/IncidenceAsign";

import history from "@utils/history";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "@actions/";

const ManageIncidence = ({
  actions,
  isAdmin = false,
  isTechnician = false,
}) => {
  const [incidence, setIncidence] = React.useState({});
  const [technicians, setTechnicians] = React.useState([]);
  const [isFetching, togleIsFetching] = useBoolean(false);

  const toast = useToast();

  React.useEffect(() => {
    if (!history.location.state) history.goBack();
    else {
      getIncidence();
      getTechnicians();
    }
  }, []);

  const getIncidence = async () => {
    togleIsFetching.on();

    let response = await actions.getIncidence(
      history.location.state.incidence_id
    );

    if (response.success) setIncidence(response.data);
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

  const handleAsign = async (values) => {
    togleIsFetching.on();

    let response = await actions.asignTechnicians(
      values,
      history.location.state.incidence_id
    );

    await toast({
      title: response.title || "",
      description: response.description || "",
      status: response.status,
      duration: 5000,
      isClosable: true,
    });

    if (response.success) {
      history.goBack();
    }

    togleIsFetching.off();
  };

  return (
    <>
      <SpinnerScreen open={isFetching} />
      <PageHeader
        title={`Manejo de incidencia #${incidence.id}`}
        displayGoBackButton={true}
      />
      <VisualizeIncidence incidence={incidence} />
      {isAdmin && (
        <IncidenceAsign handleAsign={handleAsign} technicians={technicians} />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  isAdmin: state.auth.get("token") && parseInt(state.auth.get("role")) === 60,
  isTechnician:
    state.auth.get("token") && parseInt(state.auth.get("role")) === 55,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ManageIncidence);
