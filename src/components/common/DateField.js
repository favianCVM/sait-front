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
import moment from "moment";
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

  const years = dateRange("1930");

  return (
    <Field name={name}>
      {({ field, form }) => {
        return (
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
              <ReactDatePicker
                dateFormat="yyyy/MM/dd"
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
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        decreaseMonth();
                      }}
                      disabled={prevMonthButtonDisabled}
                      className={`hover:bg-gray-300 p-3 shadow-xl rounded-md`}
                    >
                      <FaLongArrowAltLeft />
                    </button>

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

                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        increaseMonth();
                      }}
                      disabled={nextMonthButtonDisabled}
                      className={`hover:bg-gray-300 p-3 shadow-xl rounded-md`}
                    >
                      <FaLongArrowAltRight />
                    </button>
                  </div>
                )}
                formatWeekDay={(dayName) => {
                  return translater[dayName];
                }}
                selected={field.value ? moment(field.value).toDate() : null}
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
                    py="5"
                    w="full"
                    variant="outline"
                    _focus={{
                      borderColor: isDark ? "blue.300" : "blue.500",
                    }}
                    borderColor={
                      form.errors[name] && form.touched[name]
                        ? "red.400"
                        : isDark
                        ? "gray.600"
                        : "gray.200"
                    }
                    borderWidth={
                      form.errors[name] && form.touched[name] ? 2 : 1
                    }
                  >
                    {field.value
                      ? format(new Date(field.value), "dd/MM/yyyy")
                      : placeholder}
                  </Button>
                }
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
            <FormHelperText>{helperText}</FormHelperText>
          </FormControl>
        );
      }}
    </Field>
  );
};

const translater = {
  Monday: "L",
  Tuesday: "M",
  Wednesday: "X",
  Thursday: "J",
  Friday: "V",
  Saturday: "S",
  Sunday: "D",
};
export default DateField;
