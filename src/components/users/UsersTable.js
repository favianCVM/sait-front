import React from "react";
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
} from "@chakra-ui/react";
import { Paginator, ConfirmDialog, TableSkeleton } from "@components/common";
import { FiEdit, FiDelete } from "react-icons/fi";
import { tableStyles } from "@utils/commonStyles";
import { roles } from "@utils/translater";
import { BsTrashFill, BsArrowUp } from "react-icons/bs";

const UserTable = ({
  data = [],
  handleEdit = () => {},
  handleDisable = () => {},
  handleReincorporation = () => {},
  isFetching = false,
}) => {
  const [displayData, setDisplayData] = React.useState(data);
  const [selectedUser, setSelectedUser] = React.useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDisableConfirmation = (id) => {
    setSelectedUser(id);
    onOpen();
  };

  return (
    <>
      <Box {...tableStyles}>
        <Table variant="simple" border="gray" borderWidth={2}>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Rol</Th>
              <Th>Nombre y apellido</Th>
              <Th>Cedula</Th>
              <Th>Estatus</Th>
              <Th>Email</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {!isFetching ? (
              displayData.map((row) => (
                <Tr key={row.id}>
                  <Td>{row.id}</Td>
                  <Td>{roles[row.role]}</Td>
                  <Td>
                    {row.first_name} {row.last_name}
                  </Td>
                  <Td>{row.dni}</Td>
                  <Td>{row.disabled === 1 ? "Deshabilitado" : "Activo"}</Td>
                  <Td>{row.email}</Td>
                  <Td>
                    {!row.disabled ? (
                      <Stack direction="row" spacing="2">
                        <Tooltip hasArrow label="Editar">
                          <IconButton
                            size="sm"
                            onClick={() => handleEdit(row)}
                            icon={<FiEdit />}
                          />
                        </Tooltip>
                        <Tooltip hasArrow label="Deshabilitar usuario">
                          <IconButton
                            size="sm"
                            onClick={() => handleDisableConfirmation(row.id)}
                            icon={<BsTrashFill />}
                          />
                        </Tooltip>
                      </Stack>
                    ) : (
                      <Stack direction="row" spacing="2">
                        <Tooltip hasArrow label="Reincorporar">
                          <IconButton
                            size="sm"
                            onClick={() => handleReincorporation(row)}
                            icon={<BsArrowUp />}
                          />
                        </Tooltip>
                      </Stack>
                    )}
                  </Td>
                </Tr>
              ))
            ) : (
              <TableSkeleton cols={4} />
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
        confirmMethod={() => handleDisable(selectedUser)}
        title="Desea deshabilitar este usuario?"
      />
    </>
  );
};

export default UserTable;
