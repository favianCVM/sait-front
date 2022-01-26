import {
  Heading,
  Text,
  Box,
  Tooltip,
  IconButton,
  Flex,
  Button,
  Divider,
} from "@chakra-ui/react";
import { GoBackButton } from "@components/common";
import { BiAddToQueue } from "react-icons/bi";

const PageHeader = ({
  title,
  subTitle,
  message,
  action,
  actionIcon = <BiAddToQueue/>,
  actionName,
  displayGoBackButton = false,
  disabledAction = false,
}) => {
  return (
    <Box
      mb={4}
      px={{
        base: 6,
        sm: 0,
      }}
    >
      <Flex
        direction={{
          base: "column",
        }}
        alignItems={{
          base: "start",
        }}
        justifyContent={{
          base: "space-between",
        }}
        w="100%"
        minH="210px"
      >
        <Heading
          as="h2"
          textAlign={{
            base: "center",
          }}
          fontSize={{
            base: 48,
            sm: 58,
          }}
        >
          {title}
        </Heading>

        <Flex
          alignItems="center"
          w="100%"
          justifyContent={{
            base: "center",
            md: "start",
          }}
          my={{
            base: "4",
            md: "0",
          }}
        >
          {displayGoBackButton && <GoBackButton isAbsolute={false} />}
          {action && actionIcon && actionName && (
            <Button
              shadow="sm"
              _hover={{
                shadow: "lg",
              }}
              ml={displayGoBackButton ? "5" : "0"}
              rightIcon={actionIcon}
              onClick={action}
              disabled={disabledAction}
            >
              {actionName}
            </Button>
          )}
        </Flex>
        <Divider my={5} />
      </Flex>

      <Heading as="h3" size="3xl" paddingY="4">
        {subTitle}
      </Heading>

      <Text>{message}</Text>
    </Box>
  );
};

export default PageHeader;
