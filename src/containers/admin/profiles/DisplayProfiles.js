import React from 'react';
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
  const [profiles, setProfiles] = React.useState([])
  const [updateProfile, setUpdateProfile] = React.useState(null)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast();

  React.useEffect(()=>{
    getProfiles()
  },[])

  const getProfiles = async () => {
    let response = await actions.getAllProfiles()

    if(response.success) setProfiles(response.data)
    else toast({
      title: response.title || "",
      description: response.description || "",
      status: response.status,
      duration: 5000,
      isClosable: true,
    })

  }

  const handleSubmit = async (values) => {
    let response

    if(values.id) response = await actions.updateProfile(values)
    else response = await actions.createProfile(values)


    await toast({
      title: response.title || "",
      description: response.description || "",
      status: response.status,
      duration: 5000,
      isClosable: true,
    });

    if(response.success){
      getProfiles()
      onClose()
    } 

  }

  const handleEditProfile = (profile) => {
    setUpdateProfile(profile)
    onOpen()
  }

  return(
    <Box>
      <PageHeader
        title="Perfiles"
        action={onOpen}
        actionIcon={<AiOutlineUserAdd/>}
        actionName="Crear perfil"
      />

      <UserTable data={profiles} handleEdit={handleEditProfile}/>

      <ManageProfile
        updateProfile={updateProfile}
        handleSubmit={handleSubmit}
        isOpen={isOpen}
        onClose={()=> {
          setUpdateProfile(null)
          onClose()
        }}
      />
    </Box>
  )
}

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(null, mapDispatchToProps)(DisplayProfiles);