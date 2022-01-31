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
  isLabeled = false,
  ...props
}) => {

  const getValues = (field) => {
    if (isLabeled)
      return options.reduce((acc, item) => {
        acc = [
          ...acc,
          ...item?.options?.filter((el) => field.value.includes(el.value)),
        ];
        return acc;
      }, []);
    else return options.filter((el) => field.value.includes(el.value));
  };

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
            value={getValues(field)}
            {...props}
          />
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
      )}
    </Field>
  );
};

export default MultiSelectField;
