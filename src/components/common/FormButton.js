import { Button } from "@chakra-ui/react";
import { Field } from "formik";
import { FaTimes } from "react-icons/fa";

const FormButton = ({
  handleClick = () => {},
  title = "",
  colorScheme = "pink",
  name = "",
  size = "md",
  Icon = FaTimes,
}) => {
  return (
    <Field name={name}>
      {({ field, form }) => (
        <Button
          colorScheme={colorScheme}
          size={size}
          onClick={() => {
            handleClick({ form });
          }}
          leftIcon={<Icon />}
        >
          {title}
        </Button>
      )}
    </Field>
  );
};

export default FormButton;
