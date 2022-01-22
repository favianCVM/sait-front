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
  Badge,
} from "@chakra-ui/react";
import { Paginator, ConfirmDialog, TableSkeleton } from "@components/common";
import { FiEdit, FiDelete } from "react-icons/fi";
import { BiPencil } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { tableStyles } from "@utils/commonStyles";
import { priorities, priorities_colors } from "@utils/translater";

const IncidenceTable = ({
  data = [],
  handleManagement = () => {},
  handleEdit = () => {},
  handleDelete = () => {},
  isFetching = false,
  isAdmin = false,
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
              <Th>Prioridad</Th>
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
                  <Td>{row.incidence_type}</Td>
                  <Td>
                    <Tooltip hasArrow label={priorities[row.priority]}>
                      <Badge
                        _hover={{
                          cursor: "default",
                        }}
                        textColor="gray.700"
                        bg={priorities_colors[row.priority]}
                        borderColor="gray.300"
                        border="2px"
                        fontSize="lg"
                        p="2"
                      >
                        {row.priority}
                      </Badge>
                    </Tooltip>
                  </Td>
                  <Td>{row?.user?.email}</Td>
                  <Td>
                    <Stack direction="row" spacing="2">
                      <Tooltip hasArrow label="Editar">
                        <IconButton
                          size="sm"
                          onClick={() => handleEdit(row.id)}
                          icon={<FiEdit />}
                        />
                      </Tooltip>
                      {/* <Tooltip hasArrow label="Eliminar">
                        <IconButton
                          size="sm"
                          onClick={() => handleDeleteConfirmation(row.id)}
                          icon={<FiDelete />}
                        />
                      </Tooltip> */}
                      {isAdmin && (
                        <Tooltip hasArrow label="Gestionar">
                          <IconButton
                            size="sm"
                            onClick={() => handleManagement(row.id)}
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
