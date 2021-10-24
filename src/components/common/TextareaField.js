import { Textarea } from "@chakra-ui/react";
import { Field } from "formik";
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
  showError = true,
  disabled = false,
}) => {
  return (
    <Field name={name}>
      {({ field, form }) => (
        <FormControl
          id={id}
          isInvalid={form.errors[name] && form.touched[name]}
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
              disabled={disabled}
              {...field}
            />
          </InputGroup>
          {showError && (
            <FormHelperText>
              {field.value && !form.errors[name]
                ? null
                : form.errors[name] || helperText}
            </FormHelperText>
          )}
        </FormControl>
      )}
    </Field>
  );
};

export default TextareaField;
