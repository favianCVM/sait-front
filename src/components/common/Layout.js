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
  Box,
  useMediaQuery,
} from '@chakra-ui/react'
import {
  IoSunnyOutline,
  IoSunnySharp,
  IoPerson,
  IoAddCircleOutline,
  IoAlertCircle,
  IoBuild,
  IoLogOut,
  IoMenu,
} from "react-icons/io5";
import LayoutItem from './LayoutItem'
//REDUX
import {bindActionCreators} from 'redux';
import * as actions from '@actions/index'
//ROUTING
import history from '@utils/history'

//ADMIN ROUTES
const adminRoutes = [
  {
    to: '/admin/register-incident',
    icon: IoAddCircleOutline,
    title: 'Registrar incidencia',
  },
  {
    to: '/admin/incidences',
    icon: IoAlertCircle,
    title: 'Incidencias',
  },
  {
    to: '/admin/technician-assignment',
    icon: IoBuild,
    title: 'Asignación de técnico',
  },
  {
    to: '/admin/users',
    icon: IoPerson,
    title: 'Usuarios',
  }
]

//USER ROUTES
const userRoutes = [
  {
    to: '/register-incident',
    icon: IoAddCircleOutline,
    title: 'Registrar incidencia',
  },
  {
    to: '/incidences',
    icon: IoAlertCircle,
    title: 'Incidencias',
  }
]

const redirect = (to) => {
  history.push(to)
}

const Sidebar = (props) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  //drawer responsive
  const [isMobile] = useMediaQuery("(max-width: 680px)")
  const drawerSize = useBreakpointValue({ base: "full", sm: "xs" })

  //props
  const {children, isAdmin, isUser, actions, isLogged, username} = props;

  history.listen((location, action)=>{
    onClose()
  })

  return(
    <Box 
      height={'screen'}
      display={isMobile ? 'block' : 'flex'}
    >

      {(isLogged) && (
        <div className="sticky top-0 mb-3 sm:mb-0 sm:min-h-screen sm:static">
          <Button
            left={{
              base: 2,
              sm: 0
            }}
            mt={{
              base: 4,
              sm: 0
            }}
            w={{
              base: 'fit-content'
            }}
            position={{
              base: 'sticky',
              sm: 'static'
            }}
						borderRadius={isMobile ? 15 : 0}
            boxShadow={isMobile ? 'md' : 'none'}
            size="lg"
            height={isMobile ? "50" : '100%'}
            onClick={onOpen}
          >
            <IoMenu />
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
                <Box display="flex" alignItems="center" flexDirection="column">
                  <Avatar
                    src="https://as01.epimg.net/diarioas/imagenes/2021/05/12/actualidad/1620834945_030169_1620835008_noticia_normal.jpg" 
                    size="lg"
                  />
                  <Heading>{username}</Heading>
                </Box>
                <Divider mt="6" />
              </DrawerHeader>

              <DrawerBody>
                { isAdmin && adminRoutes.map((route) => (
                  <LayoutItem
                    {...route}
                    clickLink={redirect}
                  />
                ))}

                { isUser && userRoutes.map((route) => (
                  <LayoutItem
                    {...route}
                    clickLink={redirect}
                  />
                ))}
              </DrawerBody>

              <DrawerFooter>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  width="100%"
                >
                  <Tooltip label="Cerrar sesión">
                    <IconButton
                      colorScheme="blue"
                      aria-label="log-out-session"
                      icon={<IoLogOut />}
                      onClick={async () => {
                        await actions.logOut()
                        history.push("/login")
                      }}
                    />
                  </Tooltip>
                  <Box 
                    display="flex"
                    alignItems="center"
                  >
                    { isDark ? <IoSunnySharp/> : <IoSunnyOutline/> }
                    <Switch
                      ml={3}
                      color="blue"
                      isChecked={isDark}
                      onChange={toggleColorMode}
                    />
                  </Box>
                </Box>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      )}

      <div className="flex flex-col w-full px-0 pb-12 pt-3 sm:pl-6 sm:pr-10 md:pr-16 md:pl-12">
        {children}
      </div>

    </Box>
  )
}

const mapStateToProps = (state) => ({
  token:  state.user.get('token'),
  isLogged: state.user.get('logged'),
  username: state.user.get('username'),
  role: state.user.get('role'),
  isAdmin: state.user.get('token') && (parseInt(state.user.get('role')) === 60),
  isUser: state.user.get('token') && (parseInt(state.user.get('role')) === 50),
})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);