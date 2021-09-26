import {Textarea} from '@chakra-ui/react'
import { Field } from 'formik';
import {
  InputGroup,
  FormLabel,
  FormControl,
  FormHelperText,
} from "@chakra-ui/react"

const TextareaField = ({
  name='',
  label='',
  size='md',
  id,
  addClass,
  placeholder='',
  helperText='',
  resize='none',
}) => {
  return(
    <Field name={name}>
      {({field, form}) => (
        <FormControl id={id} isInvalid={form.errors[name] && form.touched[name]}>
          <FormLabel>{label}</FormLabel>

          <InputGroup size={size}>
            <Textarea
              isInvalid={form.errors[name] || false}
              id={id}
              name={name}
              placeholder={placeholder}
              className={addClass}
              resize={resize}
              {...field}
            />

          </InputGroup>
          <FormHelperText>
            { field.value
              && !form.errors[name]
                ? null
                : (form.errors[name] || helperText)
            }
          </FormHelperText>
        </FormControl>
      )}
    </Field>
  )
}

export default TextareaField