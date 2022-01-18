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
  Badge,
} from "@chakra-ui/react";
import { maxBy } from "lodash";
import { Paginator, ConfirmDialog, TableSkeleton } from "@components/common";
import { FiEdit, FiDelete } from "react-icons/fi";
import { BiPencil } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { tableStyles } from "@utils/commonStyles";
import { priorities } from "@utils/translater";

const IncidenceTable = ({
  data,
  handleEdit,
  handleDelete,
  isFetching,
  isAdmin,
}) => {
  const [displayData, setDisplayData] = React.useState(data);
  const [selectedUser, setSelectedUser] = React.useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDeleteConfirmation = (id) => {
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
              <Th>Nombre y apellido</Th>
              <Th>Tipo de incidencia</Th>
              <Th>Maxima prioridad</Th>
              <Th>Email</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {!isFetching ? (
              displayData.map((row) => (
                <Tr key={`incidence-${row.id}`}>
                  <Td>{row.id}</Td>
                  <Td>
                    {row?.user?.first_name} {row?.user?.last_name}
                  </Td>
                  <Td>{row?.type?.name}</Td>
                  <Td>
                    <Tooltip
                      hasArrow
                      label={
                        priorities[maxBy(row.errors, "priority")?.priority]
                      }
                    >
                      <Badge
                        _hover={{
                          cursor: "default",
                        }}
                        fontSize="lg"
                        p="2"
                      >
                        {maxBy(row.errors, "priority")?.priority}
                      </Badge>
                    </Tooltip>
                  </Td>
                  <Td>{row?.user?.email}</Td>
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
                      {isAdmin && (
                        <Tooltip hasArrow label="Gestionar">
                          <IconButton
                            size="sm"
                            onClick={() => {}}
                            icon={<BsEye />}
                          />
                        </Tooltip>
                      )}
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
        confirmMethod={() => handleDelete(selectedUser)}
        title="Desea eliminar esta incidencia?"
      />
    </>
  );
};

export default IncidenceTable;
