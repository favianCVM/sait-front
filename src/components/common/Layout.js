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
import { IoSunnyOutline, IoSunnySharp, IoLogOut } from "react-icons/io5";
import LayoutItem from "./LayoutItem";
import LayoutFooter from "./LayoutFooter";
//REDUX
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as actions from "@actions/index";
//ROUTING
import history from "@utils/history";
//CONFIRM DIALOG
import { ConfirmDialog } from "@components/common";

//ADMIN ROUTES
import routes from "@utils/routes";

//USER ROUTES

const redirect = (to) => {
  history.push(to);
};

const Sidebar = (props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const [showLogOut, setShowLogOut] = useBoolean(false);
  const [showSidebar, setShowSidebar] = useBoolean(false);

  //props
  const { children, isAdmin, isUser, actions, isLogged, username, profile_picture } = props;

  React.useEffect(() => {
    if (location.pathname !== "/" && isLogged) setShowSidebar.on();
  }, []);

  history.listen((location, action) => {
    if (location.pathname !== "/" && isLogged) setShowSidebar.on();
    else setShowSidebar.off();
  });

  return (
    <div className="block md:flex min-h-screen">
      {/* EMPIEZA LA SIDEBAR */}

      {showSidebar && (
        <Flex
          zIndex={1000}
          bg={{
            base: isDark ? "gray.700" : "gray.200",
          }}
          py={{
            base: 2,
            md: 4,
          }}
          px={{
            base: 2,
            md: 4,
          }}
          justifyContent={{
            base: "space-around",
            md: "space-between",
          }}
          position={{
            base: "fixed",
            md: "sticky",
          }}
          top={{
            base: "initial",
            md: "0px",
          }}
          flexDirection={{
            base: "row",
            md: "column",
          }}
          bottom={{
            base: 0,
          }}
          w={{
            base: "100%",
            md: "25%",
          }}
        >
          <Flex
            direction={{
              base: "initial",
              md: "column",
            }}
            alignItems={{
              base: "center",
              md: "initial",
            }}
            justifyContent="space-around"
            w={{
              base: "70%",
              md: "initial",
            }}
          >
            <Box
              display={{
                base: "none",
                md: "flex",
              }}
              alignItems="center"
              flexDirection="column"
            >
              <Avatar
                src={profile_picture}
                size="lg"
              />
              <Heading>{username}</Heading>
              <LayoutFooter
                isDark={isDark}
                setShowLogOut={setShowLogOut}
                toggleColorMode={toggleColorMode}
              />
            </Box>

            <Divider
              display={{
                base: "none",
                md: "block",
              }}
              my={{
                base: 0,
                md: 4,
              }}
            />

            <Flex
              w={{
                base: "100%",
                md: "initial",
              }}
              direction={{
                base: "row",
                md: "column",
              }}
              justifyContent={{
                base: "space-around",
                md: "initial",
              }}
              alignItems={{
                base: "center",
                md: "initial",
              }}
            >
              {/* routes */}
              {isAdmin &&
                routes.adminRoutes.map((route) => (
                  <LayoutItem key={route.to} {...route} clickLink={redirect} />
                ))}

              {isUser &&
                routes.userRoutes.map((route) => (
                  <LayoutItem key={route.to} {...route} clickLink={redirect} />
                ))}
            </Flex>
          </Flex>

          {/* footer */}
          <LayoutFooter
            isDark={isDark}
            setShowLogOut={setShowLogOut}
            toggleColorMode={toggleColorMode}
            isMobile={true}
          />
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
  profile_picture: state.auth.get("profile_picture"),
  isAdmin: state.auth.get("token") && parseInt(state.auth.get("role")) === 60,
  isUser: state.auth.get("token") && parseInt(state.auth.get("role")) === 50,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
