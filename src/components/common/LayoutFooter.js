import React from "react";
import { Tooltip, IconButton, Switch, Flex } from "@chakra-ui/react";
import { IoSunnyOutline, IoSunnySharp, IoLogOut } from "react-icons/io5";

const LayoutFooter = ({ setShowLogOut, toggleColorMode, isDark, isMobile }) => {
  return (
    <Flex
      display={{
        base: isMobile ? "flex" : "none",
        md: isMobile ? "none" : "flex",
      }}
      alignItems="center"
      justifyContent={{
        base: "space-around",
        md: "space-between",
      }}
      width={{
        base: "30%",
        md: "100%",
      }}
      mt={{
        md: 2
      }}
      mb={{
        md: 3
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
          md: "row",
        }}
        alignItems="center"
      >
        {isDark ? <IoSunnySharp /> : <IoSunnyOutline />}
        <Switch
          mt={{
            base: 2,
            md: 0,
          }}
          ml={{
            base: 0,
            md: 4,
          }}
          color="blue"
          isChecked={isDark}
          onChange={toggleColorMode}
        />
      </Flex>
    </Flex>
  );
};

export default LayoutFooter;
