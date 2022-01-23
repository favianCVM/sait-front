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
  Badge,
} from "@chakra-ui/react";
import { status, status_color_schemes } from "@utils/translater";

const VisualizeIncidence = ({ incidence }) => {
  return (
    <Box
      px="5"
      py="8"
      borderBottomLeftRadius={{
        base: "none",
        lg: "xl",
      }}
      borderTopLeftRadius={{
        base: "xl",
        lg: "xl",
      }}
      borderTopRightRadius={{
        base: "xl",
        lg: "none",
      }}
      borderBottomRightRadius={{
        base: "none",
        lg: "none",
      }}
      mx="auto"
      w={{
        base: "80%",
        lg: "60%",
      }}
      border="1px"
    >
      <Heading textAlign="center" my="2">
        Datos de la incidencia
      </Heading>

      {console.log(incidence)}
      <Flex flexDir="column">
        <Row title="Estatus">
          <Badge p="2" colorScheme={status_color_schemes[incidence.status]}>
            {status[incidence.status]}
          </Badge>
        </Row>
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
              <ListItem key={`component-${el.id}`}>{el.name}</ListItem>
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
      <Grid
        w="100%"
        placeContent={{
          base: "center",
        }}
        justifyContent={{
          base: "center",
        }}
        gridAutoFlow={{
          base: "row",
          md: "column",
        }}
        templateColumns="repeat(2 1fr)"
        w="100"
        justifyContent="space-between"
        my="4"
      >
        <Text fontWeight="bold" fontSize="lg">
          {title}
        </Text>
        {children}
      </Grid>
      <Divider />
    </Box>
  );
};

export default VisualizeIncidence;
