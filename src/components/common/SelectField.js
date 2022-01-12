import { Select } from "chakra-react-select";
import { FormHelperText, FormLabel, FormControl } from "@chakra-ui/react";
import { Field, getIn } from "formik";

const SelectTest = ({
  name = "",
  id = "",
  label = "",
  placeholder,
  options = [],
  closeMenuOnSelect = true,
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
          isInvalid={getIn(form.errors, name) && getIn(form.touched, name)}
        >
          {label && (
            <FormLabel opacity={0.4}>
              {label}
              <sup>*</sup>
            </FormLabel>
          )}
          <Select
            size={size}
            name={name}
            options={options}
            placeholder={placeholder}
            closeMenuOnSelect={closeMenuOnSelect}
            disabled={disabled}
            onChange={(e) => {
              form.setFieldValue(name, e.value);
            }}
            className="cursor-pointer"
            value={options.find(el => el.value === field.value)}
            {...props}
          />
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
      )}
    </Field>
  );
};

export default SelectTest;
