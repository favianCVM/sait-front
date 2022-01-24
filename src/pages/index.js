import React from "react";
import {
  Box,
  Center,
  Heading,
  Text,
  Button,
  Link,
  AbsoluteCenter,
  Icon,
  SimpleGrid,
  Flex,
  Image,
  Stack,
} from "@chakra-ui/react";
import history from "@utils/history";
import hidroven_logo from "@assets/hidroven_logo.jpeg";
import { connect } from "react-redux";

const HomePage = ({ isLogged, isAdmin, isTechnician }) => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <Box pt="16">
      <Center data-aos="fade-up" mb="10" flexDirection="column">
        <Box display="flex" alignItems="center">
          {/* <Heading
            as="h1"
            bgImage={headerBg}
            bgSize="cover"
            bgPosition="center"
            bgClip="text"
            fontSize={{
              base: "8xl",
              sm: "250px",
            }}
            fontWeight="bold"
            textTransform="uppercase"
            textAlign="center"
            color="transparent"
          >
            S-A-I-T
          </Heading> */}
          <Image borderRadius="4" my="4" src={hidroven_logo} />
        </Box>
      </Center>

      <SimpleGrid data-aos="fade-up" columns={{ base: 1, md: 2 }} spacing={0}>
        <Image
          boxSize={{
            base: "400px",
            sm: "650px",
          }}
          src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX9514122.jpg"
          alt="tech"
          mx="auto"
          my="auto"
          rounded="md"
          loading="lazy"
        />
        <Stack spacing="20px" px={8} py={24} zIndex={3}>
          <Text
            fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
            textTransform="uppercase"
            fontWeight="extrabold"
          >
            Sistema para la atención de incidencias tecnológicas.
          </Text>
          <Heading
            fontSize="2xl"
            mb={4}
            fontWeight="semibold"
            lineHeight="shorter"
            textShadow="2px 0 currentcolor"
          >
            Brindamos soporte a todos tus problemas tecnológicos
          </Heading>
          <Text
            pr={{ base: 0, lg: 16 }}
            mb={4}
            fontSize="lg"
            letterSpacing="wider"
          >
            Contamos con el equipo mejor capacitado para solventar cualquier
            incidencia en entornos de trabajo.
          </Text>
          <Button
            shadow="xl"
            colorScheme="blue"
            mt={2}
            py={8}
            variant="filled"
            w="fit-content"
            textColor="white"
            bg="blue.700"
            fontWeight="bold"
            rounded="md"
            onClick={() => {
              isLogged
                ? isAdmin
                  ? history.push("/admin/incidences")
                  : isTechnician
                  ? history.push("/technician/incidences")
                  : history.push("/incidences")
                : history.push("/login");
            }}
          >
            Entrar al sistema
          </Button>
        </Stack>
      </SimpleGrid>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  isLogged: state.auth.get("logged"),
  isAdmin: state.auth.get("token") && parseInt(state.auth.get("role")) === 60,
  isTechnician:
    state.auth.get("token") && parseInt(state.auth.get("role")) === 55,
});

export default connect(mapStateToProps, null)(HomePage);
