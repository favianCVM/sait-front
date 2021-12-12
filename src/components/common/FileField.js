import React from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Box,
  Tooltip,
  Avatar,
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
  containerClasses = "",
  buttonClasses = "",
  imagePreviewClasses = "h-20 w-20 rounded-md cursor-pointer hover:scale-150 transform duration-150 delay-75 ",
  toolTipMessage = "",
  imagePreviewSize = "lg",
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
            className={containerClasses}
          >
            <FormLabel size="lg" htmlFor={id} w="fit-content">
              <Tooltip label={picture ? null : toolTipMessage}>
                {!picture ? (
                  <Box
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
                    className={buttonClasses}
                  >
                    {labelIcon}
                  </Box>
                ) : (
                  <Avatar
                    src={picture}
                    alt={picture}
                    size={imagePreviewSize}
                    className={imagePreviewClasses}
                  />
                )}
              </Tooltip>
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
