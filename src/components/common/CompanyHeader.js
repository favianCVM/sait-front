import {
  Heading,
  Text,
  Box,
  Stack,
  Flex,
  Tooltip,
} from "@chakra-ui/react";
import { BiLogIn } from "react-icons/bi";
import {useHistory} from "react-router-dom"
//REDUX
import { connect } from "react-redux";

const CompanyHeader = ({ isHomePage = false, isLogged }) => {
  const history = useHistory()
  
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Stack spacing={3}>
        <Box p={5}>
          <Heading
            fontSize={{
              base: "5xl",
              sm: "8xl",
            }}
            color="blue.500"
            cursor="pointer"
            onClick={() => history.push("/")}
          >
            HIDROVEN
          </Heading>
          <Heading
            fontSize={{
              base: "2xl",
              sm: "4xl",
            }}
          >
            Sistema de gestion de incidencias tecnicas
          </Heading>
        </Box>
      </Stack>
      {isHomePage && !isLogged && (
        <Tooltip label="Iniciar sesion">
          <Text
          cursor="pointer"
            onClick={() => history.push("/iniciar-sesion")}
            fontSize={20}
            display="flex"
            alignItems="center"
            padding={2}
          >
            Iniciar sesion <BiLogIn />
          </Text>
        </Tooltip>
      )}
    </Flex>
  );
};

const mapStateToProps = (state) => ({
  isLogged: state.auth.get('logged'),
})

export default connect(mapStateToProps, null)(CompanyHeader);