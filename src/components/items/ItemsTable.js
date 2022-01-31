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
import { tableStyles } from "@utils/commonStyles";
import { BsTrashFill, BsArrowBarUp } from "react-icons/bs";
import { item_status, item_status_color_schemes } from "@utils/translater";

const ItemsTable = ({
  data = [],
  isFetching = false,
  handleDisable = () => {},
  handleReincorporation = () => {},
}) => {
  const [displayData, setDisplayData] = React.useState(data);
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [confirmType, setConfirmType] = React.useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleDisbaleConfirmation = (id) => {
    setSelectedItem(id);
    setConfirmType("disable");
    onOpen();
  };

  const handleReincorporateConfirm = (id) => {
    setSelectedItem(id);
    setConfirmType("reincorporate");
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
              <Th>Estatus</Th>
              <Th>Asignado</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {!isFetching ? (
              displayData.map((row) => (
                <Tr key={`device-${row.id}`}>
                  <Td>{row.id}</Td>
                  <Td>{row.serial}</Td>
                  <Td>
                    <Badge
                      p="2"
                      fontSize="sm"
                      colorScheme={item_status_color_schemes[row.disabled]}
                    >
                      {item_status[row.disabled]}
                    </Badge>
                  </Td>
                  <Td>
                    {row.assigned
                      ? `${row?.device?.deviceType?.name} - ${row?.device?.serial}`
                      : "-"}
                  </Td>
                  <Td>
                    <Stack direction="row" spacing="2">
                      {row.disabled === 1 ? (
                        <Tooltip hasArrow label="Reincorporar">
                          <IconButton
                            size="sm"
                            onClick={() => handleReincorporateConfirm(row.id)}
                            icon={<BsArrowBarUp />}
                          />
                        </Tooltip>
                      ) : (
                        <Tooltip hasArrow label="Desincorporar">
                          <IconButton
                            size="sm"
                            onClick={() => handleDisbaleConfirmation(row.id)}
                            icon={<BsTrashFill />}
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
        confirmMethod={() => {
          if (confirmType === "disable") handleDisable(selectedItem);
          else handleReincorporation(selectedItem);
        }}
        title={
          confirmType === "disable"
            ? "Desea desincorporar este elemento?"
            : "Desea reincorporar este elemento"
        }
      />
    </>
  );
};

export default ItemsTable;
