import {
  Box,
  useDisclosure,
} from "@chakra-ui/react"
import PageHeader from '@components/common/PageHeader'
import {AiOutlineUserAdd} from 'react-icons/ai'
import UserTable from "@components/users/UserTable"

const DisplayUsers = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleSubmit = (values) => {
    console.log(values)
  }

  return(
    <Box>
      <PageHeader
        title="usuarios"
        action={onOpen}
        actionIcon={<AiOutlineUserAdd/>}
        actionName="Crear usuario"
      />

      <UserTable />

    </Box>
  )
}

export default DisplayUsers