import React from "react";
import {
  Box,
  useDisclosure,
  useBoolean,
  useToast,
  Heading,
  Text,
} from "@chakra-ui/react";
import { PageHeader, SpinnerScreen, GoBackButton } from "@components/common";
import history from "@utils/history";
import IncidenceTable from "@components/incidences/IncidenceTable";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "@actions/";

const UserProfile = ({
  actions,
  isUser = false,
  isTechnician = false,
  isAdmin = false,
}) => {
  const [incidences, setIncidences] = React.useState([]);
  const [isFetching, togleIsFetching] = useBoolean(false);
  const [user, setUser] = React.useState({
    ...history.location.state?.user,
  });

  //technician states
  const [assignedIncidences, setAssignedIncidences] = React.useState([]);
  const [isTechnicianUser, togleIsTechnicianUser] = useBoolean(false);

  const toast = useToast();

  React.useEffect(() => {
    if (history.location.state?.isTechnician) {
      getTechnicianAssignedIncidences();
      togleIsTechnicianUser.on();
    }
    // getUserIncidences();
  }, []);

  const getTechnicianAssignedIncidences = async () => {
    togleIsFetching.on();

    let response = await actions.getTechnicianIncidences(
      history.location.state?.user?.user?.id
    );

    if (response.success) setAssignedIncidences(response.data);
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

  const getUserIncidences = async () => {
    togleIsFetching.on();

    let response = await actions.getUserIncidences(
      isTechnicianUser ? user.user?.id : user.id
    );

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

  const handleManagement = (incidence) => {
    history.push({
      pathname: isAdmin
        ? `/admin/incidence-management`
        : isTechnician
        ? `/technician/incidence-management`
        : `/incidence-management`,
      state: {
        incidence,
      },
    });
  };

  return (
    <>
      <SpinnerScreen open={isFetching} />
      <PageHeader
        displayGoBackButton={true}
        title={
          isTechnicianUser
            ? `Técnico: ${user.user?.first_name} ${user.user?.last_name}`
            : `${user.first_name} ${user.last_name}`
        }
      />

      {/* <Heading>Incindencias registradas</Heading>
      <IncidenceTable data={assignedIncidences} /> */}

      {isTechnicianUser && (
        <>
          <Heading my="7">Incindencias asignadas</Heading>
          <IncidenceTable
            data={assignedIncidences}
            handleManagement={handleManagement}
          />
        </>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  isAdmin: state.auth.get("token") && parseInt(state.auth.get("role")) === 60,
  isUser: state.auth.get("token") && parseInt(state.auth.get("role")) === 50,
  isTechnician:
    state.auth.get("token") && parseInt(state.auth.get("role")) === 55,
  userId: state.auth.get("id"),
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
