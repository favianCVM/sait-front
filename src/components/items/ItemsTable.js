import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  Stack,
  Flex,
  Box,
  IconButton,
  Tooltip,
  Skeleton,
  useDisclosure,
  List,
  ListItem,
} from "@chakra-ui/react";
import { Paginator, ConfirmDialog, TableSkeleton } from "@components/common";
import { tableStyles } from "@utils/commonStyles";
import { FiEdit, FiDelete } from "react-icons/fi";
import { BsTrashFill } from "react-icons/bs";

const ItemsTable = ({
  data = [],
  isFetching = false,
  handleDisable = () => {},
}) => {
  const [displayData, setDisplayData] = React.useState(data);
  const [selectedDevice, setSelectedDevice] = React.useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDisbaleConfirmation = (id) => {
    setSelectedDevice(id);
    onOpen();
  };

  return (
    <>
      <Box {...tableStyles}>
        <Table variant="simple" border="gray" borderWidth={2}>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Serial</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {!isFetching ? (
              displayData.map((row) => (
                <Tr key={`device-${row.id}`}>
                  <Td>{row.id}</Td>
                  <Td>
                    {row.serial}
                  </Td>
                  <Td>
                    <Stack direction="row" spacing="2">
                      <Tooltip hasArrow label="desincorporar">
                        <IconButton
                          size="sm"
                          onClick={() => handleDisbaleConfirmation(row.id)}
                          icon={<BsTrashFill />}
                        />
                      </Tooltip>
                    </Stack>
                  </Td>
                </Tr>
              ))
            ) : (
              <>
                <TableSkeleton cols={4} />
              </>
            )}
          </Tbody>
        </Table>
      </Box>
      <Flex justify="end">
        <Paginator data={data} setDisplayData={setDisplayData} />
      </Flex>

      <ConfirmDialog
        isOpen={isOpen}
        onClose={onClose}
        confirmMethod={() => handleDisable(selectedDevice)}
        title="Desea eliminar este equipo?"
      />
    </>
  );
};

export default ItemsTable;
