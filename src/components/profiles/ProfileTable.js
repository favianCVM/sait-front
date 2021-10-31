import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Flex,
  Box,
  Spinner,
  Center,
  IconButton,
  Tooltip,
  Skeleton
} from "@chakra-ui/react";
import { TablePagination } from "@components/common";
import { FiEdit } from "react-icons/fi";
const UserTable = ({ data, handleEdit }) => {
  const [displayData, setDisplayData] = React.useState(data);

  React.useEffect(() => {
    setDisplayData(data);
  }, [data]);

  return (
    <>
      <Box
        overflowY="scroll"
        border={{
          base: "none",
          sm: "1px"
        }}
        borderColor={{
          base: "transparent",
          sm: "gray.400"
        }}
        shadow={{
          base: "none",
          sm: "lg",
        }}
        maxH={310}
        minH={310}
      >
        <Table variant="simple" border="gray" borderWidth={2}>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Nombre y apellido</Th>
              <Th display={{base: "none", sm: "table-cell"}}>Email</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.length ? (
              displayData.map((row) => (
                <Tr>
                  <Td>{row.id}</Td>
                  <Td>
                    {row.first_name} {row.last_name}
                  </Td>
                  <Td display={{base: "none", sm:"table-cell"}}>{row.email}</Td>
                  <Td>
                    <Tooltip hasArrow label="Editar">
                      <IconButton
                        size="sm"
                        onClick={() => handleEdit(row)}
                        icon={<FiEdit />}
                      />
                    </Tooltip>
                  </Td>
                </Tr>
              ))
            ) : (
              <>
                <TableSkeleton/>
                <TableSkeleton/>
                <TableSkeleton/>
                <TableSkeleton/>
                <TableSkeleton/>
              </>
            )}
          </Tbody>
        </Table>
      </Box>
      <Flex justify="end">
        <TablePagination data={data} setDisplayData={setDisplayData} />
      </Flex>
    </>
  );
};

const TableSkeleton = () => {
  return(
    <Tr>
      <Td>
        <Skeleton height="18px"/>
      </Td>
      <Td>
        <Skeleton height="18px"/>
      </Td>
      <Td>
        <Skeleton height="18px"/>
      </Td>
      <Td>
        <Skeleton height="18px"/>
      </Td>
    </Tr>
  )
}

export default UserTable;
