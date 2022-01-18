import IncidenceForm from "@components/incidences/IncidenceForm";
import { PageHeader } from "@components/common";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "@actions/";

const HandleIncidence = ({
  actions,
  isAdmin = false,
  isTechnician = false,
  incidence = {},
}) => {
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

export default connect(mapStateToProps, mapDispatchToProps)(HandleIncidence);
