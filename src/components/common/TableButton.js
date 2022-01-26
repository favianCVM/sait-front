import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Stack,
  Flex,
  Box,
  IconButton,
  Tooltip,
  useDisclosure,
  Badge,
} from "@chakra-ui/react";

const TableButton = ({
  size = "sm",
  onClick = () => {},
  Icon = null,
  label = "",
  disabled = false,
}) => {
  return (
    <Tooltip label={label}>
      <IconButton
        disabled={disabled}
        size={size}
        icon={<Icon />}
        onClick={onClick}
      />
    </Tooltip>
  );
};

export default TableButton;
