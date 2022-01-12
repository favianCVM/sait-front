import React from "react";
import { useToast, useBoolean, Box, Flex } from "@chakra-ui/react";
import IncidenceForm from "@components/incidences/IncidenceForm";
import { PageHeader } from "@components/common";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "@actions/";

const RegisterIncidence = ({ isAdmin }) => {
  const handleSubmit = (values) => {
    console.log("VALUES", values)
  };

  return (
    <>
      <PageHeader title="Registro de incidencias" />

      <IncidenceForm handleSubmit={handleSubmit} isAdmin={isAdmin} />
    </>
  );
};

const mapStateToProps = (state) => ({
  isAdmin: state.auth.get("token") && parseInt(state.auth.get("role")) === 60,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterIncidence);
