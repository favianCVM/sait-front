import React from 'react'
import {connect} from 'react-redux';
import {
  Tooltip,
  IconButton,
  Button,
  Divider,
  Avatar,
  Heading,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Switch,
  useDisclosure,
  useColorMode,
  useBreakpointValue,
} from '@chakra-ui/react'
import {
  IoSunnyOutline,
  IoSunnySharp,
  IoPerson,
  IoAddCircleOutline,
  IoBuild,
  IoLogOut,
  IoMenu,
} from "react-icons/io5";
import LayoutItem from './LayoutItem'
//REDUX
import {bindActionCreators} from 'redux';
import * as actions from '@actions/index'
//ROUTING
import { withRouter } from 'react-router-dom';

//ADMIN ROUTES
const adminRoutes = [
  {
    to: '/register-incident',
    icon: IoAddCircleOutline,
    title: 'Registrar incidencia',
  },
  {
    to: 'technician-assignment',
    icon: IoBuild,
    title: 'Asignación de técnico',
  },
  {
    to: 'users',
    icon: IoPerson,
    title: 'Usuarios',
  }
]

//USER ROUTES
const userRoutes = [];

const Sidebar = (props) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  //drawer responsive
  const drawerSize = useBreakpointValue({ base: "full", sm: "sm" })

  //props
  const {children, token, history, actions, full_name} = props

  //listen to route changes
  history.listen((location, action) => {
    onClose()
    console.log(action, location.pathname, location.state)
  });

  //link redirect method
  const redirect = (to) => {
    history.push(to)
  }

  return(
    <div className="min-h-screen md:flex">

      {token && (
        <div className="sticky top-0 md:static">
          <Button
            className="sticky w-full top-2 left-2 md:min-h-screen md:static"
						borderRadius={drawerSize === "full" ? '0 0 2px 2px' : 0}
            background={drawerSize === "full" ? 'white' : 'none'}
            boxShadow={drawerSize === "full" ? 'md' : 'none'}
            size="lg"
            onClick={onOpen}
          >
            <IoMenu className="text-2xl"/>
          </Button>
          <Drawer
            size={drawerSize}
            isOpen={isOpen}
            placement="left"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />

              <DrawerHeader>
                <div className="flex flex-col items-center">
                  <Avatar size="lg" />
                  <Heading>{full_name}</Heading>
                </div>
                <Divider className="mt-6"/>
              </DrawerHeader>

              <DrawerBody>
                {adminRoutes.map((route) => (
                  <LayoutItem
                    {...route}
                    clickLink={redirect}
                  />
                ))}
              </DrawerBody>

              <DrawerFooter>
                <div className="flex items-center justify-between w-full">
                  <Tooltip label="Cerrar sesión">
                    <IconButton
                      colorScheme="blue"
                      aria-label="log-out-session"
                      icon={<IoLogOut />}
                      onClick={async () => {
                        await actions.logOut()
                        history.push("/")
                      }}
                    />
                  </Tooltip>
                  <div className="flex items-center">
                    { isDark ? <IoSunnySharp/> : <IoSunnyOutline/> }
                    <Switch
                      ml={3}
                      color="blue"
                      isChecked={isDark}
                      onChange={toggleColorMode}
                    />
                  </div>
                </div>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      )}

      <div className="flex flex-col w-full">
        {children}
      </div>

    </div>
  )
}

const mapStateToProps = (state) => ({
  token:  state.user.get('token'),
  isLogged: state.user.get('logged'),
  full_name: state.user.get('full_name'),
  type: state.user.get('type'),
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Sidebar));