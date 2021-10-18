import {
  Box,
  useDisclosure,
} from "@chakra-ui/react"
import PageHeader from '@components/common/PageHeader'
import {AiOutlineUserAdd} from 'react-icons/ai'
import UserTable from "@components/users/UserTable"
import ManageUser from "@components/users/ManageUsers"

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

      <ManageUser
        handleSubmit={handleSubmit}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  )
}

export default DisplayUsers