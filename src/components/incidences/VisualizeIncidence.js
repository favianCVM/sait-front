import {
  Box,
  Center,
  Flex,
  Accordion,
  Grid,
  Text,
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
  Divider,
  Heading,
} from "@chakra-ui/react";
const VisualizeIncidence = ({ incidence }) => {
  return (
    <Box
      px="5"
      py="8"
      borderRadius="md"
      mx="auto"
      w={{
        base: "65%",
      }}
      border="1px"
      boxShadow="xl"
    >
      <Heading textAlign="center" my="2">
        Datos de la incidencia
      </Heading>

      <Flex flexDir="column">
        <Row title="Localizacion">
          <Box>{incidence.location}</Box>
        </Row>
        <Row title="Descripcion">
          <Box>{incidence.description}</Box>
        </Row>
        <Row title="Equipo">
          <Box>
            <Text>{incidence.device?.serial}</Text>
          </Box>
        </Row>
        <Row title="Componentes del equipo">
          <UnorderedList>
            {incidence.device?.components?.map((el) => (
              <ListItem>{el.name}</ListItem>
            ))}
          </UnorderedList>
        </Row>
        <Row title="Usuario quien reporta">
          <Box>
            {incidence.user?.first_name} {incidence.user?.last_name}
          </Box>
        </Row>
      </Flex>
    </Box>
  );
};

const Row = ({ children, title }) => {
  return (
    <Box w="100">
      <Flex w="100" justifyContent="space-between" my="4">
        <Text>{title}</Text>
        {children}
      </Flex>
      <Divider />
    </Box>
  );
};

export default VisualizeIncidence;
