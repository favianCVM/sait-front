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
          <Heading fontSize="5xl" className="text-blue-700">HIDROVEN</Heading>
          <Heading className="text-2xl">Sistema de gestion de incidencias tecnicas</Heading>
        </Box>
      </Stack>
    </Box>
  )
}

export default CompanyHeader