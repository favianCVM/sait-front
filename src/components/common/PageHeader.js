import {
  Heading,
  Text,
  Box,
  Tooltip,
  IconButton,
} from '@chakra-ui/react'

const PageHeader = ({title, subTitle, message, action, actionIcon, actionName}) => {
  return(
    <Box marginBottom="4">
      <Box
        display={{
          base: 'flex'
        }}
        alignItems="center"
        justifyContent={{
          base: 'space-between'
        }}
        w="100%"
      >
        <Heading
          as="h2"
          size="4xl"
        >
          {title}
        </Heading>

        {(action && actionIcon && actionName) && (
          <Tooltip hasArrow label={actionName}>
            <IconButton
              onClick={action}
              fontSize={32}
              icon={actionIcon}
            />
          </Tooltip>
        )}
      </Box>

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