import {useState} from 'react'
import {
  Input,
  InputGroup,
  FormHelperText,
  FormLabel,
  FormControl,
  InputRightElement,
  InputLeftElement,
  Button,
} from "@chakra-ui/react"
import { Field } from 'formik';
import { FaEye } from 'react-icons/fa'
export default function TextField({
  placeholder,
  size = 'md',
  addClass,
  type = 'text',
  name,
  helperText,
  validate = ()=>{},
  label,
  id,
  leftChildren = null,
  rightChildren = null,
}){

  const [showPassword, setShowPassword] = useState(false)

  return(
    <Field name={name} validate={validate}>
      {({field, form}) => (
        <FormControl id={id} isInvalid={form.errors[name] && form.touched[name]}>
          <FormLabel>{label}</FormLabel>
          <InputGroup size={size}>

            {leftChildren && (
              <InputLeftElement>
                {leftChildren}
              </InputLeftElement>
            )}

            <Input
              id={id}
              name={name}
              placeholder={placeholder}
              size={size}
              className={addClass}
              type={type === 'password' ? (showPassword ? 'text' : 'password') :type }
              {...field}
            />

            { (type === 'password') && (
              <InputRightElement width="4.5rem">
                <Button
                  colorScheme="blue"
                  variant="outline"
                  size="sm"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <FaEye />
                </Button>
              </InputRightElement>
            )}

            { rightChildren && (
              <InputRightElement>
                {rightChildren}
              </InputRightElement>
            )}
          </InputGroup>
          <FormHelperText>
            { field.value && !form.errors[name] ? null : (form.errors[name] || helperText) }
          </FormHelperText>
        </FormControl>
      )}
    </Field>
  )
}