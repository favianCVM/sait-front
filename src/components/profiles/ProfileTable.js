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
} from "@chakra-ui/react";
import { TablePagination } from "@components/common";
import { FiEdit } from "react-icons/fi";
const UserTable = ({}) => {
  const [data, setData] = React.useState([
    {
      serId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      serId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      serId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      serId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
    {
      serId: 1,
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
    {
      serId: 1,
      id: 6,
      title: "qui ullam ratione quibusdam voluptatem quia omnis",
      completed: false,
    },
    {
      serId: 1,
      id: 7,
      title: "illo expedita consequatur quia in",
      completed: false,
    },
    {
      serId: 1,
      id: 7,
      title: "illo expedita consequatur quia in",
      completed: false,
    },
    {
      serId: 1,
      id: 7,
      title: "illo expedita consequatur quia in",
      completed: false,
    },
    {
      serId: 1,
      id: 7,
      title: "illo expedita consequatur quia in",
      completed: false,
    },
    {
      serId: 1,
      id: 7,
      title: "illo expedita consequatur quia in",
      completed: false,
    },
    {
      serId: 1,
      id: 7,
      title: "illo expedita consequatur quia in",
      completed: false,
    },
    {
      serId: 1,
      id: 7,
      title: "illo expedita consequatur quia in",
      completed: false,
    },
    {
      serId: 1,
      id: 7,
      title: "illo expedita consequatur quia in",
      completed: false,
    },
    {
      serId: 1,
      id: 7,
      title: "illo expedita consequatur quia in",
      completed: false,
    },
    {
      serId: 1,
      id: 7,
      title: "illo expedita consequatur quia in",
      completed: false,
    },
  ]);
  const [displayData, setDisplayData] = React.useState([]);

  return (
    <>
      <Box
        border="1px"
        borderColor="gray.500"
        overflowY="scroll"
        shadow="lg"
        maxH={310}
        minH={310}
      >
        <Table variant="simple" border="gray" borderWidth={2}>
          <Thead>
            <Tr>
              <Th>#</Th>
              <Th>Nombre</Th>
              <Th>Apellido</Th>
              <Th># de equipo</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.length ? (
              displayData.map((row) => (
                <Tr>
                  <Td>{row.serId}</Td>
                  <Td>{row.id}</Td>
                  <Td>{row.id}</Td>
                  <Td>{row.title}</Td>
                  <Td>
                    <Tooltip
                      hasArrow
                      label="Editar"
                    >
                      <IconButton
                        size="sm"
                        onClick={() => {}}
                        icon={<FiEdit />}
                      />
                    </Tooltip>
                  </Td>
                </Tr>
              ))
            ) : (
              <Center>
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="xl"
                />
              </Center>
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

export default UserTable;
