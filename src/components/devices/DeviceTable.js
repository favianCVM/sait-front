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
} from "@chakra-ui/react";
import { Paginator, ConfirmDialog, TableSkeleton } from "@components/common";
import { tableStyles } from "@utils/commonStyles";
import { FiEdit, FiDelete } from "react-icons/fi";

const DeviceTable = ({
  data = [],
  isFetching = false,
  handleEdit = () => {},
  handleDelete = () => {},
}) => {
  const [displayData, setDisplayData] = React.useState(data);
  const [selectedDevice, setSelectedDevice] = React.useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDeleteConfirmation = (id) => {
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
              <Th>Usuario</Th>
              <Th>#Usuario</Th>
              <Th>Serial</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {!isFetching ? (
              displayData.map((row) => (
                <Tr>
                  <Td>{row.id}</Td>
                  <Td>
                    {row?.user?.first_name} {row?.user?.last_name}
                  </Td>
                  <Td>{row?.user?.id}</Td>
                  <Td display={{ base: "none", md: "table-cell" }}>
                    {row.serial}
                  </Td>
                  <Td>
                    <Stack direction="row" spacing="2">
                      <Tooltip hasArrow label="Editar">
                        <IconButton
                          size="sm"
                          onClick={() => handleEdit(row)}
                          icon={<FiEdit />}
                        />
                      </Tooltip>
                      <Tooltip hasArrow label="Eliminar">
                        <IconButton
                          size="sm"
                          onClick={() => handleDeleteConfirmation(row.id)}
                          icon={<FiDelete />}
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
        confirmMethod={() => handleDelete(selectedDevice)}
        title="Desea eliminar este equipo?"
      />
    </>
  );
};

export default DeviceTable;
