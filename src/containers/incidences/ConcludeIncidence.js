import React from "react";
import {
  Box,
  useDisclosure,
  useBoolean,
  useToast,
  Flex,
} from "@chakra-ui/react";
import { PageHeader, SpinnerScreen } from "@components/common";
import ConcludeIncidenceForm from "@components/incidences/ConcludeIncidenceForm";
import VisualizeIncidence from "@components/incidences/VisualizeIncidence";
import history from "@utils/history";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "@actions/";

const ConcludeIncidence = ({ actions, technician_id }) => {
  const [incidence, setIncidence] = React.useState({
    ...history.location.state?.incidence,
  });
  const [isFetching, togleIsFetching] = useBoolean(false);
  const [components, setComponents] = React.useState([]);

  const toast = useToast();

  React.useEffect(() => {
    if (!history.location.state) history.goBack();
    getComponents();
  }, []);

  const getComponents = async () => {
    togleIsFetching.on();

    let response = await actions.getAllComponents();

    if (response.success) setComponents(response.data);
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

  const handleConcludeIncidence = async (values) => {
    togleIsFetching.on();

    values.technician_id = technician_id;
    values.incidence_id = incidence.id;
    values.end_date = new Date();

    let response = await actions.ConcludeIncidence(values);

    if (response.success) history.push("/technician/assigned-incidences");
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
    <>
      <SpinnerScreen open={isFetching} />
      <PageHeader
        title={`Incidencia #${incidence.id}`}
        displayGoBackButton={true}
      />
      <Flex flexWrap="wrap" justifyContent="center">
        <VisualizeIncidence incidence={incidence} />
        <ConcludeIncidenceForm
          handleSubmit={handleConcludeIncidence}
          components={components}
        />
      </Flex>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAdmin: state.auth.get("token") && parseInt(state.auth.get("role")) === 60,
  isUser: state.auth.get("token") && parseInt(state.auth.get("role")) === 50,
  isTechnician:
    state.auth.get("token") && parseInt(state.auth.get("role")) === 55,
  userId: state.auth.get("id"),
  technician_id: state.auth.get("technician_id"),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(ConcludeIncidence);
