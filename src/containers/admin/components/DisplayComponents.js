import {
  Box,
  useDisclosure,
  useBoolean
} from "@chakra-ui/react"
import PageHeader from '@components/common/PageHeader'
import {IoAddCircleOutline} from 'react-icons/io5'
import ComponentTable from "@components/components/ComponentTable"

const data = [
  {
    serId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
    first_name: "some",
    last_name: "some",
    email: "some",
  },
  {
    serId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
    first_name: "some",
    last_name: "some",
    email: "some",
  },
  {
    serId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
    first_name: "some",
    last_name: "some",
    email: "some",
  },
  {
    serId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
    first_name: "some",
    last_name: "some",
    email: "some",
  },
  {
    serId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
    first_name: "some",
    last_name: "some",
    email: "some",
  },
  {
    serId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
    first_name: "some",
    last_name: "some",
    email: "some",
  },
  {
    serId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
    first_name: "some",
    last_name: "some",
    email: "some",
  },
]

const DisplayComponents = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [dialogBlocked, setDialogBlocked] = useBoolean(false)

  const handleSubmit = (values) => {
    console.log(values)
    setDialogBlocked.on()
  }

  return(
    <>
      <PageHeader
        title="Componentes"
        action={onOpen}
        actionIcon={<IoAddCircleOutline/>}
        actionName="anadir componente"
      />

      <ComponentTable data={data} handleDelete={()=>{}} handleEdit={()=>{}} />
    </>
  )
}

export default DisplayComponents