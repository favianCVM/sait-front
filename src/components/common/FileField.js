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
  Box,
} from "@chakra-ui/react";
import { Field } from "formik";
import ReactDatePicker from "react-datepicker";
import { format } from "date-fns";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { getYear, getMonth } from "date-fns";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { IoArrowDown } from "react-icons/io5";
import { BiUpload } from "react-icons/bi";

const FileField = ({
  name = "",
  id,
  disabled = false,
  label = "",
  labelIcon = <BiUpload />,
  isClearable = false,
  size = "md",
  showPopperArrow = true,
  helperText = "",
  placeholder = "",
  ...props
}) => {
  const [picture, setPicture] = React.useState(null);

  return (
    <Field>
      {({ field, form }) => {
        return (
          <FormControl
            id={id}
            isInvalid={form.errors[name] && form.touched[name]}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <FormLabel size="lg" htmlFor={id} w="fit-content">
              {!picture ? (
                <Box
                  className="duration-75 delay-75 hover:bg-blue-300 transition-all ease-linear "
                  bg="blue.400"
                  p={{
                    base: "2.5",
                  }}
                  fontSize={{
                    base: "28",
                  }}
                  w="fit-content"
                  cursor="pointer"
                  borderRadius="md"
                >
                  {labelIcon}
                </Box>
              ) : (
                <img src={picture} alt={picture} className="h-20 w-20 rounded-md cursor-pointer hover:scale-150 transform " />
              )}
            </FormLabel>
            <input
              className="hidden"
              id={id}
              type="file"
              accept="image/*"
              onChange={(e) => {
                const file = e.target.files[0];
                const reader = new FileReader();

                reader.readAsDataURL(file);

                reader.onloadend = () => {
                  form.setFieldValue(name, field);
                  setPicture(`${reader.result}`);
                };
              }}
            />

            <FormHelperText>{helperText}</FormHelperText>
          </FormControl>
        );
      }}
    </Field>
  );
};

export default FileField;
