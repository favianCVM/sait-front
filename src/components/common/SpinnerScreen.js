import {Box, Spinner} from '@chakra-ui/react'

const SpinnerScreen = ({open}) => {
  return(
    <Box
      top={0}
      left={0}
      position="absolute"
      w="100%"
      h="100%"
      className="bg-opacity-30 bg-gray-500"
      zIndex="modal"
      display={open ? "flex" : "none"}
      justifyContent="center"
      alignItems="center"
    >
      <Spinner size="xl" />
    </Box>
  )
}

export default SpinnerScreen;