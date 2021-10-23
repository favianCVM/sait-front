import {
  Heading,
  Text,
  Image,
  Box,
  Stack,
  Flex,
  Tooltip,
} from "@chakra-ui/react";
import history from "@utils/history";
import { BiLogIn } from "react-icons/bi";

const CompanyHeader = ({ isHomePage = false }) => {
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
      {isHomePage && (
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

export default CompanyHeader;
