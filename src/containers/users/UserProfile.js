import React from "react";
import { Box, useDisclosure, useBoolean, useToast } from "@chakra-ui/react";
import { PageHeader, SpinnerScreen, GoBackButton } from "@components/common";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "@actions/";

const UserProfile = ({ actions, isAdmin, isTechnician }) => {
  return <></>;
};

const mapStateToProps = (state) => ({
  isAdmin: state.auth.get("token") && parseInt(state.auth.get("role")) === 60,
  isTechnician:
    state.auth.get("token") && parseInt(state.auth.get("role")) === 55,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
