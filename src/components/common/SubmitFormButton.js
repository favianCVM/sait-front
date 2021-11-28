import {
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

const SubmitFormButton = ({ title, errors, isSubmitting }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button
          _hover={{
            shadow: "lg",
          }}
          mx="auto"
          mt={4}
          w="fit-content"
          px={4}
          colorScheme="blue"
          type="submit"
          isLoading={isSubmitting}
        >
          {title}
        </Button>
      </PopoverTrigger>
      {Object.keys(errors).length > 0 && (
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Tienes errores</PopoverHeader>
          <PopoverBody className="flex flex-col items-start">
            <UnorderedList>
              {Object.keys(errors).map((err) => (
                <ListItem>{errors[err]}</ListItem>
              ))}
            </UnorderedList>
          </PopoverBody>
        </PopoverContent>
      )}
    </Popover>
  );
};

export default SubmitFormButton;
