import Form from "@components/auth_form/LoginForm";
import { Heading, useToast, Box, Center } from "@chakra-ui/react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "@actions/";

const LoginContainer = (props) => {
  const { history, actions } = props;
  const toast = useToast();

  const handleSubmit = async (values) => {
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
    } else if (response.success && parseInt(response.role) === 50) {
      history.push("/incidences");
    }
  };
  return (
    <Box data-aos="fade-down" py={14}>
      <Heading my={6} textAlign="center">
        Iniciar sesion
      </Heading>
      <Center
        width={{
          base: "100%",
        }}
      >
        <Form handleSubmit={handleSubmit} />
      </Center>
    </Box>
  );
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(null, mapDispatchToProps)(withRouter(LoginContainer));
