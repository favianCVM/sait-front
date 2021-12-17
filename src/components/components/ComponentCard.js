import {
  Box,
  Center,
  Image,
  Text,
  useColorMode,
  IconButton,
  Flex,
} from "@chakra-ui/react";
import { FiEdit, FiDelete } from "react-icons/fi";

const ComponentCard = ({
  name = "",
  description = "",
  image = "",
  handleDelete = ()=>{},
  handleEdit = ()=>{},
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
        shadow: "lg"
      }}
      rounded="md"
    >
      <Center flexDirection="column">
        <Image maxH="40" maxW="full" src={image} />
        <Text my="4" fontWeight="bold" fontSize="lg">{name}</Text>
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
      </Center>

      <Center mb="5" justifyContent="space-around">
        <IconButton
          colorScheme="blue"
          size="md"
          onClick={() => handleEdit(id)}
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
