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
import { BsEye, BsCheck } from "react-icons/bs";
import { tableStyles } from "@utils/commonStyles";
import {
  priorities,
  priorities_colors,
  status,
  status_color_schemes,
} from "@utils/translater";
import formatDate from "@utils/formatDate";

const IncidenceTable = ({
  data = [],
  handleManagement = () => {},
  handleConclude = () => {},
  handleEdit = () => {},
  handleDelete = () => {},
  isFetching = false,
  isAdmin = false,
  isTechnician = false,
  userId = null,
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
              <Th>Reportador</Th>
              <Th>Tipo de incidencia</Th>
              <Th>Prioridad</Th>
              <Th>Estatus</Th>
              <Th>Fecha de reporte</Th>
              <Th>Fecha de finalización </Th>
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
                        textColor="gray.900"
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
                  <Td>
                    <Badge
                      p="2"
                      fontSize="sm"
                      colorScheme={status_color_schemes[row.status]}
                    >
                      {status[row.status]}
                    </Badge>
                  </Td>
                  <Td fontWeight="bold">{formatDate(row?.date)}</Td>
                  <Td fontWeight="bold">{formatDate(row?.end_date)}</Td>
                  <Td>
                    <Stack direction="row" spacing="2">
                      {(isAdmin || row.user_id === JSON.parse(userId)) && (
                        <Tooltip hasArrow label="Editar">
                          <IconButton
                            size="sm"
                            onClick={() => handleEdit(row)}
                            icon={<FiEdit />}
                            disabled={row.status === "succeeded"}
                          />
                        </Tooltip>
                      )}
                      <Tooltip hasArrow label="Gestionar">
                        <IconButton
                          size="sm"
                          onClick={() => handleManagement(row)}
                          icon={<BsEye />}
                        />
                      </Tooltip>

                      {isTechnician && (
                        <Tooltip hasArrow label="Concluir">
                          <IconButton
                            size="sm"
                            onClick={() => handleConclude(row)}
                            icon={<BsCheck />}
                            // disabled={row.status === "succeeded"}
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
