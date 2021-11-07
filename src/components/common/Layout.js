import React from "react";
import {
  Tooltip,
  IconButton,
  Divider,
  Avatar,
  Heading,
  Switch,
  useColorMode,
  Box,
  Flex,
  useBoolean,
} from "@chakra-ui/react";
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
import {
  BiDevices,
  BiChip
} from 'react-icons/bi'
import LayoutItem from "./LayoutItem";
//REDUX
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "@actions/index";
//ROUTING
import history from "@utils/history";
//CONFIRM DIALOG
import { ConfirmDialog } from "@components/common";

//ADMIN ROUTES
const adminRoutes = [
  {
    to: "/admin/register-incident",
    as: "/admin/registrar-incidencia",
    icon: IoAddCircleOutline,
    title: "Registrar incidencia",
  },
  {
    to: "/admin/incidences",
    as: "/admin/incidencias",
    icon: IoAlertCircle,
    title: "Incidencias",
  },
  {
    to: "/admin/technician-assignment",
    as: "/admin/asignar-tecnico",
    icon: IoBuild,
    title: "Asignación de técnico",
  },
  {
    to: "/admin/device-components",
    as: "/admin/componentes",
    icon: BiChip,
    title: "Componentes",
  },
  {
    to: "/admin/devices",
    as: "/admin/equipos",
    icon: BiDevices,
    title: "Equipos",
  },
  {
    to: "/admin/profiles",
    as: "/admin/perfiles",
    icon: IoPerson,
    title: "Perfiles",
  },
];

//USER ROUTES
const userRoutes = [
  {
    to: "/register-incident",
    as: "/registrar-incidencia",
    icon: IoAddCircleOutline,
    title: "Registrar incidencia",
  },
  {
    to: "/incidences",
    as: "/incidencias",
    icon: IoAlertCircle,
    title: "Incidencias",
  },
];

const redirect = (to) => {
  history.push(to);
};

const Sidebar = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [showLogOut, setShowLogOut] = useBoolean(false);
  const [showSidebar, setShowSidebar] = useBoolean(false);

  //props
  const { children, isAdmin, isUser, actions, isLogged, username } = props;

  React.useEffect(()=>{
    if(location.pathname !== '/' && isLogged) setShowSidebar.on()
  },[])

  history.listen((location, action)=>{
    if(location.pathname !== '/' && isLogged) setShowSidebar.on()
    else setShowSidebar.off()
  })

  return (
    <div className="block sm:flex min-h-screen">
      {/* EMPIEZA LA SIDEBAR */}

      {showSidebar && (
        <Flex
        zIndex={1000}
          bg={{
            base: isDark ? "gray.700" : "gray.300"
          }}
          py={{
            base: 2,
            sm: 4,
          }}
          px={{
            base: 2,
            sm: 4,
          }}
          justifyContent={{
            base: "space-around",
            sm: "space-between",
          }}
          position={{
            base: "fixed",
            sm: "sticky",
          }}
          top={{
            base: "initial",
            sm: "0px"
          }}
          flexDirection={{
            base: "row",
            sm: "column",
          }}
          bottom={{
            base: 0,
          }}
          w={{
            base: "100%",
            sm: "25%",
          }}
        >
          <Flex
            direction={{
              base: "initial",
              sm: "column",
            }}
            alignItems={{
              base: "center",
              sm: "initial",
            }}
            justifyContent="space-around"
            w={{
              base: "70%",
              sm: "initial",
            }}
          >
            <Box
              display={{
                base: "none",
                sm: "flex",
              }}
              alignItems="center"
              flexDirection="column"
            >
              <Avatar
                src="https://as01.epimg.net/diarioas/imagenes/2021/05/12/actualidad/1620834945_030169_1620835008_noticia_normal.jpg"
                size="lg"
              />
              <Heading>{username}</Heading>
            </Box>

            <Divider
              display={{
                base: "none",
                sm: "block",
              }}
              mt={{
                base: 0,
                sm: 4,
              }}
            />

            <Flex
              w={{
                base: "100%",
                sm: "initial",
              }}
              direction={{
                base: "row",
                sm: "column",
              }}
              justifyContent={{
                base: "space-around",
                sm: "initial",
              }}
              alignItems={{
                base: "center",
                sm: "initial",
              }}
            >
              {/* routes */}
              {isAdmin &&
                adminRoutes.map((route) => (
                  <LayoutItem {...route} clickLink={redirect} />
                ))}

              {isUser &&
                userRoutes.map((route) => (
                  <LayoutItem {...route} clickLink={redirect} />
                ))}
            </Flex>
          </Flex>

          {/* footer */}
          <Flex
            alignItems="center"
            justifyContent={{
              base: "space-around",
              sm: "space-between",
            }}
            width={{
              base: "30%",
              sm: "100%",
            }}
          >
            <Tooltip label="Cerrar sesión">
              <IconButton
                colorScheme="blue"
                aria-label="log-out-session"
                icon={<IoLogOut />}
                onClick={() => setShowLogOut.on()}
              />
            </Tooltip>
            <Flex
              direction={{
                base: "column",
                sm: "row",
              }}
              alignItems="center"
            >
              {isDark ? <IoSunnySharp /> : <IoSunnyOutline />}
              <Switch
                mt={{
                  base: 2,
                  sm: 0,
                }}
                ml={{
                  base: 0,
                  sm: 4,
                }}
                color="blue"
                isChecked={isDark}
                onChange={toggleColorMode}
              />
            </Flex>
          </Flex>
        </Flex>
      )}

      {/* TERMINA LA SIDEBAR  */}

      <div className="flex flex-col w-full px-0 pb-20 pt-3 sm:pl-6 sm:pr-10 md:pr-16 md:pl-12 sm:pb-8">
        {children}
      </div>

      <ConfirmDialog
        confirmMethod={async () => {
          await actions.logOut();
          history.push("/login");
        }}
        isOpen={showLogOut}
        title="Desea cerrar sesion?"
        onClose={() => setShowLogOut.off()}
        confirmMessage="Si"
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  token: state.auth.get("token"),
  isLogged: state.auth.get("logged"),
  username: state.auth.get("username"),
  role: state.auth.get("role"),
  isAdmin: state.auth.get("token") && parseInt(state.auth.get("role")) === 60,
  isUser: state.auth.get("token") && parseInt(state.auth.get("role")) === 50,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
