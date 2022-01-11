import {
  Box,
  Center,
  Image,
  Text,
  useColorMode,
  IconButton,
  Flex,
  Grid,
} from "@chakra-ui/react";
import { FiEdit, FiDelete } from "react-icons/fi";
import { AiFillTool } from "react-icons/ai";

const ComponentCard = ({
  name = "",
  description = "",
  picture = null,
  handleDelete = () => {},
  handleEdit = () => {},
  id = null,
}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <Flex
      flexDir="column"
      justifyContent="space-between"
      bg={isDark ? "gray.700" : ""}
      w="full"
      shadow="md"
      _hover={{
        shadow: "lg",
      }}
      rounded="md"
    >
      <Flex
        placeItems="center"
        justifyContent="start"
        flexDir="column"
        minH={420}
        pt="8"
      >
        <Flex
          flexDir="column"
          justifyContent="space-between"
          alignItems="center"
          minH="60"
        >
          {(picture === "null" || !picture) ? (
            <Center flexDir="column" h="full">
              <AiFillTool size="80px" />
            </Center>
          ) : (
            <Image maxH="40" maxW="full" src={picture} />
          )}
          <Text
            my="4"
            fontWeight="bold"
            fontSize={{
              base: "lg",
              xl: "2xl",
            }}
          >
            {name}
          </Text>
        </Flex>
        <Text
          w="full"
          textOverflow="initial"
          flexWrap="wrap"
          display="flex"
          w="80%"
          mx="auto"
          mb="6"
        >
          {description}
        </Text>
      </Flex>

      <Center mb="5" justifyContent="space-around">
        <IconButton
          colorScheme="blue"
          size="md"
          onClick={handleEdit}
          icon={<FiEdit />}
        />
        <IconButton
          colorScheme="blue"
          size="md"
          onClick={() => handleDelete(id)}
          icon={<FiDelete />}
        />
      </Center>
    </Flex>
  );
};

export default ComponentCard;
