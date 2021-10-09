import React from 'react'
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
  Center
} from "@chakra-ui/react"
import { TablePagination } from '@components/common';

const IncidenceTable = ({
}) => {
  const [data, setData] = React.useState([]);
  const [displayData, setDisplayData] = React.useState([]);

  React.useEffect(()=>{
    setTimeout(()=>{
      setData([
        {
          serId: 1,
          id: 1,
          title: "delectus aut autem",
          completed: false
        },
        {
          serId: 1,
          id: 2,
          title: "quis ut nam facilis et officia qui",
          completed: false
        },
        {
          serId: 1,
          id: 3,
          title: "fugiat veniam minus",
          completed: false
        },
        {
          serId: 1,
          id: 4,
          title: "et porro tempora",
          completed: true
        },
        {
          serId: 1,
          id: 5,
          title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
          completed: false
        },
        {
          serId: 1,
          id: 6,
          title: "qui ullam ratione quibusdam voluptatem quia omnis",
          completed: false
        },
        {
          serId: 1,
          id: 7,
          title: "illo expedita consequatur quia in",
          completed: false
        },
        {
          serId: 1,
          id: 7,
          title: "illo expedita consequatur quia in",
          completed: false
        },
        {
          serId: 1,
          id: 7,
          title: "illo expedita consequatur quia in",
          completed: false
        },
        {
          serId: 1,
          id: 7,
          title: "illo expedita consequatur quia in",
          completed: false
        },
        {
          serId: 1,
          id: 7,
          title: "illo expedita consequatur quia in",
          completed: false
        },
        {
          serId: 1,
          id: 7,
          title: "illo expedita consequatur quia in",
          completed: false
        },
        {
          serId: 1,
          id: 7,
          title: "illo expedita consequatur quia in",
          completed: false
        },
        {
          serId: 1,
          id: 7,
          title: "illo expedita consequatur quia in",
          completed: false
        },
        {
          serId: 1,
          id: 7,
          title: "illo expedita consequatur quia in",
          completed: false
        },
        {
          serId: 1,
          id: 7,
          title: "illo expedita consequatur quia in",
          completed: false
        },
      ])
    },3000)
  },[])

  return(
    <> 
      {data.length 
        ? (
          <>
            <Box 
              border="1px"  
              borderColor="gray.500"  
              overflowY="scroll"
              shadow="base"
              maxH={310} 
              minH={310}
            >
              <Table variant="simple" border="gray" borderWidth={2}>
                <Thead>
                  <Tr>
                    <Th>param</Th>
                    <Th>param</Th>
                    <Th>param</Th>
                  </Tr>
                </Thead>
                <Tbody  >
                  {displayData.map((row) => (
                    <Tr>
                      <Td>{row.serId}</Td>
                      <Td>{row.id}</Td>
                      <Td>{row.title}</Td>
                    </Tr>
                  ) )}
                </Tbody>
              </Table>
            </Box>
            <Flex justify="end">
              <TablePagination data={data} setDisplayData={setDisplayData} />
            </Flex>
          </>
        )
        : (
          <Center>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Center>
        )
      }
    </>
  )
}

export default IncidenceTable;