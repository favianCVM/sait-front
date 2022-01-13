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
  const [incidenceTypes, setIncidenceTypes] = React.useState([]);
  const [users, setUsers] = React.useState([]);

  const toast = useToast();

  React.useEffect(() => {
    getIncidenceTypes();
    getUsers();
  }, []);

  const getUsers = async () => {
    togleIsFetching.on();

    let response = await actions.getAllUsers();

    if (response.success) setUsers(response.data);
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

  const getIncidenceTypes = async () => {
    togleIsFetching.on();

    let response = await actions.getIncidenceTypes();

    if (response.success) setIncidenceTypes(response.data);
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

    if(!isAdmin) values.user_id = userId

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

      <IncidenceForm
        incidenceTypes={incidenceTypes}
        users={users}
        handleSubmit={handleSubmit}
        isAdmin={isAdmin}
      />
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
