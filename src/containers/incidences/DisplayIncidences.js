import React from "react";
import { Box, useDisclosure, useBoolean, useToast } from "@chakra-ui/react";
import { PageHeader, SpinnerScreen } from "@components/common";
import ManageIncidence from "@components/incidences/ManageIncidence";
import { IoAddCircleOutline } from "react-icons/io5";
import IncidenceTable from "@components/incidences/IncidenceTable";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "@actions/";

const DisplayIncidences = ({ actions, isAdmin, isTechnician }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [incidences, setIncidences] = React.useState([]);
  const [isFetching, togleIsFetching] = useBoolean(false);

  const toast = useToast();

  React.useEffect(() => {
    if (isAdmin || isTechnician) getAllIncidences();
  }, []);

  const getAllIncidences = async () => {
    togleIsFetching.on();

    let response = await actions.getAllIncidences();

    if (response.success) setIncidences(response.data);
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

  // const handleSubmit = (values) => {
  //   console.log(values);
  // };

  return (
    <>
      <SpinnerScreen open={isFetching} />

      <PageHeader
        title="Incidencias"
        // action={onOpen}
        // actionIcon={<IoAddCircleOutline />}
        // actionName="anadir incidencia"
      />

      {/* 
      <ManageIncidence
        handleSubmit={handleSubmit}
        isOpen={isOpen}
        onClose={onClose}
      /> */}

      <IncidenceTable isAdmin={isAdmin} data={incidences} />
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

export default connect(mapStateToProps, mapDispatchToProps)(DisplayIncidences);
