import React from "react";
import { useToast, useBoolean } from "@chakra-ui/react";
import IncidenceForm from "@components/incidences/IncidenceForm";
import { PageHeader, SpinnerScreen } from "@components/common";
import history from "@utils/history";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "@actions/";

const RegisterIncidence = ({ isAdmin, actions, userId }) => {
  const [isFetching, togleIsFetching] = useBoolean(false);
  const [devices, setDevices] = React.useState([]);

  const toast = useToast();

  React.useEffect(() => {
    getDevices();
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
    values.user_id = userId;

    let response = await actions.createIncidence(values);

    if (response.success) {
      resetForm();
      if (isAdmin) history.push("/admin/incidences");
      else history.push("/incidences");
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

      <PageHeader title="Registro de incidencias" />

      <IncidenceForm devices={devices} handleSubmit={handleSubmit} />
    </>
  );
};

const mapStateToProps = (state) => ({
  isAdmin: state.auth.get("token") && parseInt(state.auth.get("role")) === 60,
  userId: state.auth.get("id"),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterIncidence);
