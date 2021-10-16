import {
  Box,
  useDisclosure,
} from "@chakra-ui/react"
import PageHeader from '@components/common/PageHeader'
import ManageIncidence from "@components/incidences/ManageIncidence"
import {IoAddCircleOutline} from 'react-icons/io5'
import IncidenceTable from "@components/incidences/IncidenceTable"
import requests from '@utils/requests'

const data = [
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
]

const DisplayIncidences = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

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

      <ManageIncidence
        handleSubmit={handleSubmit}
        isOpen={isOpen}
        onClose={onClose}
      />

      <IncidenceTable data={data} />
    </Box>
  )
}

export default DisplayIncidences