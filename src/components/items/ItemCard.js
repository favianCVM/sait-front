import {
  Box,
  Center,
  Image,
  Text,
  useColorMode,
  IconButton,
  Flex,
  Grid,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { ConfirmDialog } from "@components/common";
import { FiEdit, FiList } from "react-icons/fi";
import { AiFillTool } from "react-icons/ai";
import { BsTrashFill, BsArrowBarUp } from "react-icons/bs";

const ComponentCard = ({
  name = "",
  description = "",
  picture = null,
  disabled,
  items = [],
  handleDisable = () => {},
  handleEdit = () => {},
  handleManage = () => {},
  id = null,
  isAdmin = false,
  ...props
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
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
          {picture === "null" || !picture ? (
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
            wordBreak="break-word"
            w="full"
            textAlign="center"
          >
            #{id} {name} ({disabled === 1 ? "Desincorporado" : items.length})
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
        {/* <Tooltip label="editar">
          <IconButton
            colorScheme="blue"
            size="md"
            onClick={() => handleEdit(props)}
            icon={<FiEdit />}
          />
        </Tooltip> */}

        {disabled !== 1 && (
          <Tooltip label="Gestionar">
            <IconButton
              colorScheme="blue"
              size="md"
              onClick={() => handleManage({ name, description, items, id })}
              icon={<FiList />}
            />
          </Tooltip>
        )}

        {disabled === 1 && isAdmin && (
          <Tooltip label="Reincorporar">
            <IconButton
              colorScheme="blue"
              size="md"
              onClick={onOpen}
              icon={<BsArrowBarUp />}
            />
          </Tooltip>
        )}

        {disabled !== 1 && isAdmin && (
          <Tooltip label="Desincorporar">
            <IconButton
              colorScheme="blue"
              size="md"
              onClick={onOpen}
              icon={<BsTrashFill />}
            />
          </Tooltip>
        )}
      </Center>
      <ConfirmDialog
        isOpen={isOpen}
        onClose={onClose}
        confirmMethod={() => handleDisable(id)}
        title="Desea desincorporar este elemento?"
      />
    </Flex>
  );
};

export default ComponentCard;
