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
import { tableStyles } from "@utils/commonStyles";
import { BsEye } from "react-icons/bs";

const TechniciansTable = ({
  data = [],
  isFetching = false,
  handleTechnicianProfile = () => {},
}) => {
  const [displayData, setDisplayData] = React.useState(data);

  return (
    <>
      <Box {...tableStyles}>
        <Table variant="simple" border="gray" borderWidth={2}>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Nombre y apellido</Th>
              <Th>Email</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {!isFetching ? (
              displayData.map((row) => (
                <Tr key={row.id}>
                  <Td>{row.id}</Td>
                  <Td>
                    {row?.user?.first_name} {row?.user?.second_name}
                  </Td>
                  <Td>{row?.user?.email}</Td>
                  <Td>
                    <Stack direction="row" spacing="2">
                      <Tooltip hasArrow label="Gestionar">
                        <IconButton
                          size="sm"
                          onClick={() => handleTechnicianProfile(row)}
                          icon={<BsEye />}
                        />
                      </Tooltip>
                    </Stack>
                  </Td>
                </Tr>
              ))
            ) : (
              <TableSkeleton cols={5} />
            )}
          </Tbody>
        </Table>
      </Box>
      <Flex justify="end">
        <Paginator data={data} setDisplayData={setDisplayData} />
      </Flex>
    </>
  );
};

export default TechniciansTable;
