import React from "react";
import {
  FormHelperText,
  FormLabel,
  FormControl,
  InputGroup,
} from "@chakra-ui/react";
import { Field, getIn } from "formik";
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
  name = "",
  id = "",
  disabled = false,
  placeholder = "",
  label = "",
  variant = "filled",
  data = [],
  options = data.length ? data.map((el) => el.label) : [],
  helperText = "",
  textTransform = "capitalize",
  autoFocus = true,
  handleChangeCallback = () => {},
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
              onSelectOption={(e) => {
                let { optionValue } = e;
                let value = data?.find((el) => el.label === optionValue)?.value;
                form.setFieldValue(name, value);
                handleChangeCallback({
                  name,
                  value,
                  form,
                  isCleaning: false,
                });
              }}
              value={data.find((el) => el.value === field.value)?.label || null}
            >
              <AutoCompleteInput
                name={name}
                variant={variant}
                placeholder={placeholder}
                autoFocus={autoFocus}
                disabled={disabled}
                // isInvalid={form.errors[name]}
                isInvalid={
                  getIn(form.errors, name) && getIn(form.touched, name)
                }
                value={
                  data.find((el) => el.value === field.value)?.label || null
                }
                onChange={(e) => {
                  form.setFieldValue(name, null);
                  handleChangeCallback({
                    name,
                    value: null,
                    form,
                    isCleaning: true,
                  });
                }}
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
          <FormHelperText>{helperText}</FormHelperText>
        </FormControl>
      )}
    </Field>
  );
};

export default AutosuggestField;
