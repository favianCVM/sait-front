import {
  Heading,
  Text,
  Box,
  Tooltip,
  IconButton,
  Flex,
} from '@chakra-ui/react'

const PageHeader = ({title, subTitle, message, action, actionIcon, actionName}) => {
  return(
    <Box marginBottom="4">
      <Flex
        direction={{
          base: 'column'
        }}
        alignItems={{
          base: 'end'
        }}
        justifyContent={{
          base: 'space-between'
        }}
        w="100%"
        pr={{
          base: 4,
          sm: 0
        }}
      >
        <Heading
          as="h2"
          textAlign={{
            base: 'center'
          }}
          fontSize={{
            base: 48,
            sm: 58
          }}
        >
          {title}
        </Heading>

        {(action && actionIcon && actionName) && (
          <Tooltip  
            hasArrow 
            label={actionName}
            mt={{
              base: 4,
              sm: 0
            }}
          >
            <IconButton
              onClick={action}
              fontSize={32}
              icon={actionIcon}
            />
          </Tooltip>
        )}
      </Flex>

      <Heading
        as="h3"
        size="3xl"
        paddingY="4"
      >
        {subTitle}
      </Heading>

      <Text
      >
        {message}
      </Text>
    </Box>
  )
}

export default PageHeader;