import React from "react";
import {
  Flex,
  Text,
  Icon,
  Link,
  useBoolean,
  useColorMode,
} from "@chakra-ui/react";
import history from "@utils/history";

export default function LayoutItem({ icon, title, to, clickLink, as }) {
  const [isOn, setIsOn] = useBoolean(false);
  const { colorMode, toggleColorMode } = useColorMode();

  history.listen((location, action) => {
    history.location.pathname === as ? setIsOn.on() : setIsOn.off();
  });

  return (
    <Flex
      mt={{
        base: 0,
        md: 1,
      }}
      flexDir="column"
      w="100%"
      alignItems="center"
    >
      <Link
        shadow="lg"
        //reseting hover effects
        _hover={{
          bg: "blue.500",
          textColor: "white",
          shadow: "none"
        }}
        bg={isOn ? "blue.500" : colorMode === "dark" ? "gray.700" : null}
        textColor={isOn ? "gray.800" : null}
        p={{
          base: 1,
          md: 3,
        }}
        borderRadius={8}
        w={{
          base: "fit-content",
          md: "100%",
        }}
        onClick={() => clickLink(to)}
      >
        <Flex>
          <Icon as={icon} fontSize="xl" />

          <Text
            display={{
              base: "none",
              md: "inline",
            }}
            ml={5}
          >
            {title}
          </Text>
        </Flex>
      </Link>
    </Flex>
  );
}
