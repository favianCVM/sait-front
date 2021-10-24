import {
  Box,
  useDisclosure,
} from "@chakra-ui/react"
import PageHeader from '@components/common/PageHeader'
import {AiOutlineUserAdd} from 'react-icons/ai'
import UserTable from "@components/profiles/ProfileTable"
import ManageProfile from "@components/profiles/ManageProfile"

const DisplayUsers = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleSubmit = (values) => {
    console.log(values)
  }

  return(
    <Box>
      <PageHeader
        title="Perfiles"
        action={onOpen}
        actionIcon={<AiOutlineUserAdd/>}
        actionName="Crear perfil"
      />

      <UserTable />

      <ManageProfile
        handleSubmit={handleSubmit}
        isOpen={isOpen}
        onClose={onClose}
      />
    </Box>
  )
}

export default DisplayUsers