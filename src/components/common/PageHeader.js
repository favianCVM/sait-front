import {Heading, Text} from '@chakra-ui/react'

const PageHeader = ({title, subTitle, message}) => {
  return(
    <div className="mb-4">
      <Heading
        as="h2"
        size="4xl"
      >
        {title}
      </Heading>

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
    </div>
  )
}

export default PageHeader;