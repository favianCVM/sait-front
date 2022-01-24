import { Textarea } from "@chakra-ui/react";
import { Field, getIn } from "formik";
import {
  InputGroup,
  FormLabel,
  FormControl,
  FormHelperText,
} from "@chakra-ui/react";

const TextareaField = ({
  name = "",
  label = "",
  size = "md",
  id,
  addClass,
  placeholder = "",
  helperText = "",
  resize = "none",
  inputHeight = "32",
  showError = true,
  disabled = false,
}) => {
  return (
    <Field name={name}>
      {({ field, form }) => (
        <FormControl
          id={id}
          isInvalid={getIn(form.errors, name) && getIn(form.touched, name)}
        >
          {label && (
            <FormLabel opacity={0.4}>
              {label}
              <sup>*</sup>
            </FormLabel>
          )}

          <InputGroup size={size}>
            <Textarea
              id={id}
              name={name}
              placeholder={placeholder}
              className={addClass}
              resize={resize}
              height={inputHeight}
              disabled={disabled}
              {...field}
            />
          </InputGroup>
          {showError && (
            <FormHelperText>
              {field.value && !getIn(form.errors, name)
                ? null
                : getIn(form.errors, name) || helperText}
            </FormHelperText>
          )}
        </FormControl>
      )}
    </Field>
  );
};

export default TextareaField;
