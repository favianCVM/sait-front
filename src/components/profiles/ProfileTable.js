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
import { TablePagination, ConfirmDialog } from "@components/common";
import { FiEdit, FiDelete } from "react-icons/fi";
import { tableStyles } from "@utils/commonStyles";

const UserTable = ({ data, handleEdit, handleDelete, isFetching }) => {
  const [displayData, setDisplayData] = React.useState(data);
  const [selectedProfile, setSelectedProfile] = React.useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  React.useEffect(() => {
    setDisplayData(data);
  }, [data]);

  const handleDeleteConfirmation = (id) => {
    setSelectedProfile(id);
    onOpen();
  };

  return (
    <>
      <Box {...tableStyles}>
        <Table variant="simple" border="gray" borderWidth={2}>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Nombre y apellido</Th>
              <Th display={{ base: "none", sm: "table-cell" }}>Email</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            { !isFetching ? (
              displayData.map((row) => (
                <Tr>
                  <Td>{row.id}</Td>
                  <Td>
                    {row.first_name} {row.last_name}
                  </Td>
                  <Td display={{ base: "none", sm: "table-cell" }}>
                    {row.email}
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
                <TableSkeleton />
                <TableSkeleton />
                <TableSkeleton />
                <TableSkeleton />
                <TableSkeleton />
              </>
            )}
          </Tbody>
        </Table>
      </Box>
      <Flex justify="end">
        <TablePagination data={data} setDisplayData={setDisplayData} />
      </Flex>

      <ConfirmDialog
        isOpen={isOpen}
        onClose={onClose}
        confirmMethod={() => handleDelete(selectedProfile)}
        title="Desea eliminar este usuario?"
      />
    </>
  );
};

const TableSkeleton = () => {
  return (
    <Tr>
      <Td>
        <Skeleton height="18px" />
      </Td>
      <Td>
        <Skeleton height="18px" />
      </Td>
      <Td>
        <Skeleton height="18px" />
      </Td>
      <Td>
        <Skeleton height="18px" />
      </Td>
    </Tr>
  );
};

export default UserTable;
