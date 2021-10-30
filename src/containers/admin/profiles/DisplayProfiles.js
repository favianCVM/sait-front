import {
  Box,
  useDisclosure,
  useToast,
} from "@chakra-ui/react"
import PageHeader from '@components/common/PageHeader'
import {AiOutlineUserAdd} from 'react-icons/ai'
import UserTable from "@components/profiles/ProfileTable"
import ManageProfile from "@components/profiles/ManageProfile"
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "@actions/";


const DisplayProfiles = ({ actions }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast();

  const handleSubmit = async (values) => {
    let response = await actions.createProfile(values)

    await toast({
      title: response.title || "",
      description: response.description || "",
      status: response.status,
      duration: 5000,
      isClosable: true,
    });

    if(response.success) onClose()
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

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(null, mapDispatchToProps)(DisplayProfiles);