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
import headerBg from "@assets/bg_header.jpg"
import {connect} from 'react-redux';

const HomePage = ({isLogged, isAdmin}) => {

  React.useEffect(()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },[])

  return (
    <Box pt="16">
      <Center data-aos="fade-up" mb="10" flexDirection="column">
        <Box
          display="flex"
          alignItems="center"
          >
          <Heading
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
            S-A-I-T --test
          </Heading>
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
          <Text fontSize="lg" textTransform="uppercase" fontWeight="extrabold">
            Sistema de aistencia tecnica
          </Text>
          <Heading
            mb={4}
            fontSize={{ base: "4xl", md: "4xl", lg: "5xl" }}
            fontWeight="bold"
            lineHeight="shorter"
            textShadow="2px 0 currentcolor"
          >
            Solventamos problemas de manera rapida y precisa
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
                  : history.push("/incidences")
                : history.push("/login")
            }}
          >
            Entrar al sistema
          </Button>
        </Stack>
      </SimpleGrid>
      <Center my="100">
        <Heading data-aos="fade-up" fontSize="7xl">
          SAIT
        </Heading>
      </Center>
      <Center my="100">
        <Heading data-aos="fade-up" fontSize="7xl">
          SAIT
        </Heading>
      </Center>
      <Center my="100">
        <Heading data-aos="fade-up" fontSize="7xl">
          SAIT
        </Heading>
      </Center>
    </Box>
  );
};

const mapStateToProps = (state) => ({
  isLogged: state.auth.get('logged'),
  isAdmin: state.auth.get('token') && (parseInt(state.auth.get('role')) === 60),
})

export default connect(mapStateToProps, null)(HomePage);