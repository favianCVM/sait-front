import {
  Box,
  useDisclosure,
  useBoolean,
} from "@chakra-ui/react"
import PageHeader from '@components/common/PageHeader'
import IncidenceTable from "@components/incidences/IncidenceTable"
import ManageIncidence from "@components/incidences/ManageIncidence"
import { SpinnerLoader } from "@components/common"

import {IoAddCircleOutline} from 'react-icons/io5'

const DisplayIncidences = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [spinnerLoader, setSpinnerLoader] = useBoolean(false)

  const handleSubmit = (values) => {
    console.log(values)
  }

  return(
    <Box>
      <PageHeader
        title="Incidencias"
        action={onOpen}
        actionIcon={<IoAddCircleOutline/>}
        actionName="anadir incidencia"
      />

      <ManageIncidence handleSubmit={handleSubmit} isOpen={isOpen} onClose={onClose} />

      <IncidenceTable />
      <SpinnerLoader isOpen={spinnerLoader} />
    </Box>
  )
}

export default DisplayIncidences