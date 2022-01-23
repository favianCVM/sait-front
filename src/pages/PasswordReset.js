import React from "react";
import { Center, Heading, useBoolean, useToast } from "@chakra-ui/react";
import PasswordResetForm from "@components/password/passwordResetForm";
import { GoBackButton, SpinnerScreen } from "@components/common";
import history from "@utils/history";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "@actions/";

const PasswordReset = ({ actions }) => {
  const [isFetching, togleIsFetching] = useBoolean(false);
  const toast = useToast();

  const handleSubmit = async (values) => {
    togleIsFetching.on();

    let response = await actions.passwordReset(values);

    toast({
      ...response,
      duration: 5000,
      isClosable: true,
    });

    if (response.success) history.goBack();

    togleIsFetching.off();
  };

  return (
    <>
      <SpinnerScreen open={isFetching} />
      <Center
        data-aos="fade-in"
        flexDir="column"
        justifyContent="center"
        minH="70%"
      >
        <Heading textAlign="center" my="10">
          Recuperacion de contraseña
        </Heading>
        <PasswordResetForm handleSubmit={handleSubmit} />
      </Center>
      <GoBackButton />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(null, mapDispatchToProps)(PasswordReset);
