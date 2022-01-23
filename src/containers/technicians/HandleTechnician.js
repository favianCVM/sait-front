import React from "react";
import {
  
} from "@chakra-ui/react"
import IncidenceTable from "@components/incidences/IncidenceTable";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "@actions/";

const HandleTechnician = ({}) => {
  React.useEffect(() => {
    if (!history.location.state || !history.location.state.technician_id) {
      history.goBack();
    }
  }, []);

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

export default connect(mapStateToProps, mapDispatchToProps)(HandleTechnician);
