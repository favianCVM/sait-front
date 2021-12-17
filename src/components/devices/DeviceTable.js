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
import { Paginator } from "@components/common";
import { tableStyles } from "@utils/commonStyles";

const DeviceTable = ({ data, isFetching }) => {
  const [displayData, setDisplayData] = React.useState(data);

  return (
    <>
      <Box {...tableStyles}>
        <Table variant="simple" border="gray" borderWidth={2}>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>#</Th>
              <Th>#</Th>
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
                  <Td display={{ base: "none", md: "table-cell" }}>
                    {row.email}
                  </Td>
                </Tr>
              ))
            ) : (
              <>
                <TableSkeleton />
                <TableSkeleton />
                <TableSkeleton />
              </>
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

export default DeviceTable;
