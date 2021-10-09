import DatePicker from "react-datepicker";
import formatDate from "@utils/formatDate";
import "react-datepicker/dist/react-datepicker.css";
import { IoCalendar } from "react-icons/io5";

import {
  FormLabel,
  FormControl,
  Button,
  useBoolean
} from "@chakra-ui/react"
import { Field } from 'formik';

const DateField = ({
  name='',
  id,
  maxDate,
  disabled=false,
}) => {

  return(
    <Field name={name}>
      {({field, form}) => (
        <FormControl
          id={id}
          isInvalid={form.errors[name] && form.touched[name]}
          mx="auto"
        >
            <DatePicker
              selected={field.value}
              maxDate={maxDate}
              onChange={(date)=>{
                form.setFieldValue(name, date)
              }}
              disabled={disabled}
              customInput={
                <Button
                  rightIcon={<IoCalendar/>}
                  colorScheme="blue"
                  w="40%"
                >
                  {field.value?.getTime() !== new Date().getTime()
                    ? formatDate(field.value)
                    : "Seleccionar fecha"
                  }
                </Button>}
            />
            {console.log(field)}
        </FormControl>
      )}
    </Field>
  )
}

export default DateField;