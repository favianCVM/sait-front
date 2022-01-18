import Form from "@components/auth_form/LoginForm";
import {
  Heading,
  useToast,
  Box,
  Center,
  Button,
  useBoolean,
} from "@chakra-ui/react";
import history from "@utils/history";
import { GoBackButton } from "@components/common";
import { BsHouse } from "react-icons/bs";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "@actions/";

const LoginContainer = (props) => {
  const { actions } = props;
  const [isFetching, togleIsFetching] = useBoolean(false);

  const toast = useToast();

  const handleSubmit = async (values) => {
    togleIsFetching.on();

    let response = await actions.signIn(values);

    await toast({
      title: response.title || "",
      description: response.description || "",
      status: response.status,
      duration: 5000,
      isClosable: true,
    });

    if (response.success && parseInt(response.role) === 60) {
      history.push("/admin/incidences");
    } else if (
      response.success &&
      (parseInt(response.role) === 50 || parseInt(response.role) === 55)
    ) {
      history.push("/incidences");
    }
  };

  const handlePasswordReset = () => {
    history.push("/password-reset");
  };

  return (
    <>
      <Box data-aos="fade-in" py={14}>
        <Heading my={6} textAlign="center">
          Iniciar sesion
        </Heading>
        <Center
          width={{
            base: "100%",
          }}
          flexDir="column"
        >
          <Form handleSubmit={handleSubmit} />
          <Button
            onClick={handlePasswordReset}
            my="6"
            border="none"
            bg="transparent"
          >
            Has olvidado la contraseña?
          </Button>
        </Center>
      </Box>
      <GoBackButton disabled={isFetching} Icon={BsHouse} route="/" />
    </>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(null, mapDispatchToProps)(LoginContainer);
