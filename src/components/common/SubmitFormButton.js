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
  Box,
} from "@chakra-ui/react";
import{HiPaperAirplane} from 'react-icons/hi'

const SubmitFormButton = ({
  title = "",
  errors = {},
  isSubmitting = false,
  containerProps = {
    textAlign: "center",
  },
  Icon = HiPaperAirplane
}) => {
  return (
    <Box {...containerProps}>
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
            leftIcon={<Icon />}
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
                {Object.keys(errors).map((err) => {
                  if (Array.isArray(errors[err]))
                    return errors[err].reduce((acc, item) => {
                      let nestedErrors = Object.keys(item).map((el) => (
                        <ListItem textAlign="justify" key={item[el]}>
                          {item[el]}
                        </ListItem>
                      ));
                      acc.push(nestedErrors);
                      return acc;
                    }, []);
                  else if (typeof errors[err] === "object") {
                    return Object.keys(errors[err]).map((el) => (
                      <ListItem textAlign="justify" key={errors[err][el]}>
                        {errors[err][el]}
                      </ListItem>
                    ));
                  } else
                    return (
                      <ListItem textAlign="justify" key={errors[err]}>
                        {errors[err]}
                      </ListItem>
                    );
                })}
              </UnorderedList>
            </PopoverBody>
          </PopoverContent>
        )}
      </Popover>
    </Box>
  );
};

export default SubmitFormButton;
