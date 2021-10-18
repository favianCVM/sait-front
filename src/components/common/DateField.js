import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  FormControl,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import React from "react";

import { DayPicker, useInput } from "react-day-picker";
import "react-day-picker/style.css";
import { css } from "@emotion/react";
import { Field } from "formik";
import { format } from "date-fns";
import InputMask from "react-input-mask";

const DateField = ({
  name = "",
  id,
  maxDate = new Date(),
  disabled = false,
  label = "",
  size = "md",
  isClearable = true,
  showPopperArrow = true,
  helperText = "",
  addClass = "",
}) => {
  const options = {
    // Select today as default
    defaultSelected: new Date(),
    // Limit the valid dates
    toYear: maxDate,
    format: "P",
    // Make the selection mandatory.
    required: true,
    onChange: (date) => {
      console.log(date);
    }
  };

  const input = useInput(options);

  return (
    <Field name={name}>
      {({ field, form, meta }) => {
        return (
          <FormControl
            id={id}
            isInvalid={!!meta.error}
            css={css`
              --rdp-cell-size: 2rem;
              --rdp-accent-color: var(--chakra-colors-blue-500);
              --rdp-background-color: var(--chakra-colors-blue-200);
            `}
          >
            <Popover>
              <PopoverTrigger>
                <Input
                  disabled={disabled}
                  as={InputMask} 
                  mask="**/**/****" 
                  {...input.fieldProps}
                  placeholder={format(field.value, options.format)}
                />
              </PopoverTrigger>
              <PopoverContent>
                <DayPicker {...input.dayPickerProps} showWeekNumber />
              </PopoverContent>
            </Popover>

            <FormErrorMessage>{meta.error}</FormErrorMessage>
          </FormControl>
        );
      }}
    </Field>
  );
};

export default DateField;
