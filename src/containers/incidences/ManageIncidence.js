import React from "react";
import { PageHeader, SpinnerScreen } from "@components/common";
import { useBoolean, useToast, Flex, Button } from "@chakra-ui/react";
import VisualizeIncidence from "@components/incidences/VisualizeIncidence";
import VisualizeIncidenceConclution from "@components/incidences/VisualizeIncidenceConclution";
import IncidenceAssignForm from "@components/incidences/IncidenceAssignForm";
import history from "@utils/history";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "@actions/";
import { BsClock } from "react-icons/bs";

const ManageIncidence = ({
  actions,
  isAdmin = false,
  isTechnician = false,
}) => {
  const [incidence, setIncidence] = React.useState({
    ...history.location.state?.incidence,
  });
  const [technicians, setTechnicians] = React.useState([]);
  const [isFetching, togleIsFetching] = useBoolean(false);

  const toast = useToast();

  React.useEffect(() => {
    if (!history.location.state) history.goBack();
    else if (isAdmin) {
      getTechnicians();
    }
  }, []);

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

    values.incidence_id = history.location.state.incidence.id;

    let response = await actions.asignTechnicians(values);

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

  const handleConclude = () => {
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
        title={`${
          incidence.status === "succeeded" ? "" : "Manejo de "
        } incidencia #${incidence.id}`}
        displayGoBackButton={true}
        action={handleConclude}
        disabledAction={incidence.status === "succeeded"}
        actionIcon={<BsClock />}
        actionName="Concluir incidencia"
      />
      <Flex flexWrap="wrap" justifyContent="center">
        <VisualizeIncidence incidence={incidence} />
        {incidence.status === "succeeded" && (
          <VisualizeIncidenceConclution incidence={incidence} />
        )}
        {isAdmin && incidence.status === "pending" && (
          <IncidenceAssignForm
            incidence={{
              technicians: incidence?.technicians?.map((el) => el.id),
            }}
            handleAsign={handleAsign}
            technicians={technicians}
          />
        )}
      </Flex>
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
