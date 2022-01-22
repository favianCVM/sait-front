import React from "react";
import history from "@utils/history";
import { useBoolean } from "@chakra-ui/react";
import IncidenceTable from "@components/incidences/IncidenceTable";
import { SpinnerScreen } from "@components/common";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "@actions/";

const TechnicianProfile = ({}) => {
  const [technicianIncidences, setTechnicianIncidences] = React.useEffect([]);
  const [isFetching, togleIsFetching] = useBoolean(false);

  React.useEffect(() => {
    if (!history.location.state || !history.location.state.technician_id) {
      history.goBack();
    }
  }, []);

  return (
    <>
      <SpinnerScreen open={isFetching} />

      <IncidenceTable data={technicianIncidences}  />
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

export default connect(mapStateToProps, mapDispatchToProps)(TechnicianProfile);
