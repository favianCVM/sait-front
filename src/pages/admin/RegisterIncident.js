import { useToast, Button } from "@chakra-ui/react"

const RegisterIncident = () =>{
  const toast = useToast()
  
  return(
    <div>

    <Button
      onClick={() =>
        toast({
          title: "Account created.",
          description: "We've created your account for you.",
          status: "success",
          duration: 9000,
          isClosable: true,
        })
      }
    >
      Show Toast
    </Button>

    </div>
  )
}

export default RegisterIncident