import {
  Heading,
  Text,
  Image,
  Box,
  Stack,
} from "@chakra-ui/react"

const CompanyHeader = () => {
  return(
    <Box>
      <Stack spacing={3} >
        <Box p={5}>
          <Heading fontSize="5xl" color="blue.500">HIDROVEN</Heading>
          <Heading fontSize="2xl">Sistema de gestion de incidencias tecnicas</Heading>
        </Box>
      </Stack>
    </Box>
  )
}

export default CompanyHeader