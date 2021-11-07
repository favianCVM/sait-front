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

const PageHeader = ({
  title,
  subTitle,
  message,
  action,
  actionIcon,
  actionName,
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
        {action && actionIcon && actionName && (
          <Button rightIcon={actionIcon} onClick={action}>
            {actionName}
          </Button>
        )}
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
