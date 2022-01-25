import {
  Box,
  Center,
  Flex,
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
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
  useColorModeValue,
  Avatar,
} from "@chakra-ui/react";
import { status, status_color_schemes } from "@utils/translater";
import { FaPuzzlePiece } from "react-icons/fa";

const VisualizeIncidenceConclution = ({ incidence }) => {
  return (
    <Box
      border="1px"
      borderBottomLeftRadius={{
        base: "xl",
        lg: "none",
      }}
      borderTopLeftRadius={{
        base: "none",
        lg: "none",
      }}
      borderTopRightRadius={{
        base: "none",
        lg: "xl",
      }}
      borderBottomRightRadius={{
        base: "xl",
        lg: "xl",
      }}
      px="8"
      py="12"
      // mx={{
      //   base: "auto", 
      //   lg: "initial"
      // }}
      w={{
        base: "80%",
        lg: "50%",
      }}
    >
      <Heading textAlign="center" my="2">
        Fallas detectadas
      </Heading>

      <Accordion allowToggle my="12">
        {incidence.errors.map((el, index) => (
          <AccordionItem
            borderWidth={2}
            borderRadius={4}
            key={`accordion-${index}`}
            data-aos="fade-in"
          >
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Falla&nbsp;<b>#{index + 1}</b>
              </Box>
              <AccordionIcon />
            </AccordionButton>

            <AccordionPanel>
              <Flex
                bg={useColorModeValue("#F9FAFB", "gray.600")}
                w="full"
                alignItems="center"
                justifyContent="center"
              >
                <Box
                  w="full"
                  mx="auto"
                  px={2}
                  py={2}
                  bg={useColorModeValue("white", "gray.800")}
                  shadow="md"
                >
                  <Flex justifyContent="space-between" alignItems="center">
                    <Heading
                      as="h4"
                      color={useColorModeValue("gray.800", "gray.400")}
                    >
                      Descripción de la falla
                    </Heading>
                  </Flex>

                  <Box>
                    <Text
                      // fontSize="sm"
                      mt={2}
                      color={useColorModeValue("gray.600", "gray.300")}
                    >
                      {el.description}
                    </Text>
                  </Box>

                  {el.components.length ? (
                    <Box>
                      <Heading
                        color={useColorModeValue("gray.800", "gray.400")}
                        as="h4"
                        my="5"
                      >
                        Componentes involucrados
                      </Heading>
                      <UnorderedList>
                        {el.components.map((il) => (
                          <ListItem>
                            <ListIcon as={FaPuzzlePiece} color="green.500" />
                            <Text display="inline" fontWeight="bold">
                              {il.name}
                            </Text>
                          </ListItem>
                        ))}
                      </UnorderedList>
                    </Box>
                  ) : null}
                </Box>
              </Flex>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
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

export default VisualizeIncidenceConclution;
