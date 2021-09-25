import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Box,
  IconButton
} from "@chakra-ui/react"
import {
  IoMenu,
} from "react-icons/io5";

const IncidenceTable = () => {
  return(
    <Box border="2px"  borderColor="gray.500" borderRadius="md">
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>Usuario</Th>
            <Th>Equipo</Th>
            <Th>Acciones</Th>
          </Tr>
        </Thead>
        <Tbody>
          <TableRow col1="lorem ipsum" col2="lorem ipsum" col3={<IconButton icon={<IoMenu/>} />}/>
          <TableRow col1="lorem ipsum" col2="lorem ipsum" col3={<IconButton icon={<IoMenu/>} />}/>
          <TableRow col1="lorem ipsum" col2="lorem ipsum" col3={<IconButton icon={<IoMenu/>} />}/>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </Box>
  )
}

const TableRow = ({col1, col2, col3}) => {
  return(
    <Tr>
      <Td>{col1}</Td>
      <Td>{col2}</Td>
      <Td>{col3}</Td>
    </Tr>
  )
}

export default IncidenceTable