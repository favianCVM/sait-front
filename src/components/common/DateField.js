import React from "react";
import {
  FormControl,
  InputGroup,
  FormLabel,
  FormHelperText,
  Button,
  useColorMode,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { Field } from "formik";
import ReactDatePicker from "react-datepicker";
import { format } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import { getYear, getMonth } from "date-fns";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { IoArrowDown } from "react-icons/io5";
const dateRange = (startYear) => {
  let currentYear = new Date().getFullYear(),
    years = [];
  startYear = startYear || 1935;
  while (startYear <= currentYear) {
    years.push(startYear++);
  }
  return years;
};

const DateField = ({
  name = "",
  id,
  maxDate = new Date(),
  disabled = false,
  label = "",
  isClearable = false,
  size = "md",
  showPopperArrow = true,
  helperText = "",
  placeholder = "",
  ...props
}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const years = dateRange("1935");

  return (
    <Field name={name}>
      {({ field, form, meta }) => {
        return (
          <FormControl
            id={id}
            isInvalid={form.errors[name] && form.touched[name]}
          >
            {label && <FormLabel opacity={.4}>{label}<sup>*</sup></FormLabel>}
            <InputGroup size={size}>
              <ReactDatePicker
                renderCustomHeader={({
                  date,
                  changeYear,
                  changeMonth,
                  decreaseMonth,
                  increaseMonth,
                  prevMonthButtonDisabled,
                  nextMonthButtonDisabled,
                }) => (
                  <div className="flex items-center justify-between w-full px-6">
                    <IconButton
                      icon={<FaLongArrowAltLeft />}
                      onClick={decreaseMonth}
                      disabled={prevMonthButtonDisabled}
                    />

                    <Menu>
                      <MenuButton
                        shadow="base"
                        as={Button}
                        fontSize={{
                          base: "xs",
                          sm: "md",
                        }}
                        padding={1}
                        rightIcon={<IoArrowDown />}
                      >
                        {getYear(date)}
                      </MenuButton>
                      <MenuList
                        maxH={40}
                        overflowY="scroll"
                        onClick={({ target: { value } }) => changeYear(value)}
                      >
                        {years.map((option) => (
                          <MenuItem
                            textColor={isDark ? "gray.200" : ""}
                            key={option}
                            value={option}
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </Menu>

                    <Menu>
                      <MenuButton
                        shadow="base"
                        as={Button}
                        fontSize={{
                          base: "xs",
                          sm: "md",
                        }}
                        padding={1}
                        rightIcon={<IoArrowDown />}
                      >
                        {months[getMonth(date)]}
                      </MenuButton>
                      <MenuList
                        maxH={40}
                        overflowY="scroll"
                        onClick={({ target: { value } }) =>
                          changeMonth(months.indexOf(value))
                        }
                      >
                        {months.map((option) => (
                          <MenuItem
                            textColor={isDark ? "gray.200" : ""}
                            key={option}
                            value={option}
                          >
                            {option}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </Menu>

                    <IconButton
                      icon={<FaLongArrowAltRight />}
                      onClick={increaseMonth}
                      disabled={nextMonthButtonDisabled}
                    />
                  </div>
                )}
                className="mt-1.5"
                selected={field.value}
                isClearable={isClearable}
                showPopperArrow={showPopperArrow}
                maxDate={maxDate}
                disabled={disabled}
                clearButtonClassName={
                  isDark
                    ? "date-field__dark-clear-button"
                    : "date-field__light-clear-button"
                }
                customInput={
                  <Button
                    w="full"
                    variant="outline"
                    _focus={{
                      borderColor: isDark ? "blue.300" : "blue.500",
                    }}
                    borderColor={
                      form.errors[name]
                        ? "red.400"
                        : isDark
                        ? "gray.600"
                        : "gray.200"
                    }
                    borderWidth={form.errors[name] ? 2 : 1}
                  >
                    {field.value
                      ? format(field.value, "dd/MM/yyyy")
                      : placeholder}
                  </Button>
                }
                dateFormat="dd/MM/yyyy"
                showYearDropdown
                dateFormatCalendar="MMMM"
                yearDropdownItemNumber={90}
                scrollableYearDropdown
                onChange={(date) => {
                  form.setFieldValue(name, date);
                }}
                {...props}
              />
            </InputGroup>
            <FormHelperText>
              {field.value && !form.errors[name]
                ? null
                : form.errors[name] || helperText}
            </FormHelperText>
          </FormControl>
        );
      }}
    </Field>
  );
};

export default DateField;
