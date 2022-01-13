import { Select } from "chakra-react-select";
import { FormHelperText, FormLabel, FormControl } from "@chakra-ui/react";
import { Field } from "formik";

const MultiSelectField = ({
  name = "",
  id = "",
  label = "",
  placeholder,
  options = [],
  closeMenuOnSelect = false,
  disabled = false,
  helperText = "",
  size = "md",
  ...props
}) => {
  return (
    <Field name={name}>
      {({ field, form }) => (
        <FormControl
          id={id}
          isDisabled={disabled}
          isInvalid={form.errors[name] && form.touched[name]}
        >
          {label && (
            <FormLabel opacity={0.4}>
              {label}
              <sup>*</sup>
            </FormLabel>
          )}

          <Select
            className="cursor-pointer"
            isMulti
            name={name}
            options={options}
            placeholder={placeholder}
            closeMenuOnSelect={closeMenuOnSelect}
            onChange={(values) => {
              form.setFieldValue(
                name,
                values.map((el) => el.value)
              );
            }}
            value={options.filter((el) => field.value.includes(el.value))}
            {...props}
          />
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
      )}
    </Field>
  );
};

export default MultiSelectField;
