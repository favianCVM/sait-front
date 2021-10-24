import React from "react";
import {
  FormHelperText,
  FormLabel,
  FormControl,
  InputGroup,
} from "@chakra-ui/react";
import { Field } from "formik";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";

/**
 * this inputs have to receive labels as the "options" and the actual data in {label:jhon, value:doe} format to work
 * --this is because the input force to render the value as the label, and this is not wanted
 */

const AutosuggestField = ({
  rollNavigation = true,
  name,
  id,
  disabled = false,
  placeholder,
  label,
  variant = "filled",
  options = [],
  data = [],
  helperText = "",
  textTransform = "capitalize",
  useInvalid = true,
}) => {
  return (
    <Field name={name}>
      {({ field, form }) => (
        <FormControl isDisabled={disabled} id={id}>
          {label && (
            <FormLabel opacity={0.4}>
              {label}
              <sup>*</sup>
            </FormLabel>
          )}
          <InputGroup>
            <AutoComplete
              rollNavigation={rollNavigation}
              onSelectOption={({ optionValue }) => {
                let val = data.find((el) => el.label === optionValue)?.value;
                form.setFieldValue(name, val);
              }}
            >
              <AutoCompleteInput
                name={name}
                variant={variant}
                placeholder={placeholder}
                autoFocus={true}
                disabled={disabled}
                // isInvalid={form.errors[name]}
                isInvalid={form.errors[name] && form.touched[name]}
              />
              <AutoCompleteList>
                {options.map((option, oid) => (
                  <AutoCompleteItem
                    key={`option-${oid}`}
                    value={option}
                    label={option}
                    textTransform={textTransform}
                  >
                    {option}
                  </AutoCompleteItem>
                ))}
              </AutoCompleteList>
            </AutoComplete>
          </InputGroup>
        </FormControl>
      )}
    </Field>
  );
};

export default AutosuggestField;
