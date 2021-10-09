import {
  Box,
  useDisclosure,
} from "@chakra-ui/react"
import PageHeader from '@components/common/PageHeader'
import {IoAddCircleOutline} from 'react-icons/io5'

const TechnicianAssignmentDisplay = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return(
    <Box>
      <PageHeader 
        title="Asignacion de tecnicos"
      />

    </Box>
  )
}

export default TechnicianAssignmentDisplay;