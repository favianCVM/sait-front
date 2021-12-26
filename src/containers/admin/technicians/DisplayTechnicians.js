import {
  Box,
  useDisclosure,
} from "@chakra-ui/react"
import PageHeader from '@components/common/PageHeader'
import TechniciansTable from "@components/technicians/TechniciansTable"

const DisplayTechnicians = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return(
    <Box>
      <PageHeader 
        title="Técnicos"
      />

      <TechniciansTable data={[]}/>

    </Box>
  )
}

export default DisplayTechnicians;