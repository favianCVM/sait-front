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
  label,
  id,
  leftChildren = null,
  rightChildren = null,
  disabled=false,
}){

  const [showPassword, setShowPassword] = useState(false)

  return(
    <Field name={name}>
      {({field, form}) => (
        <FormControl id={id} isInvalid={form.errors[name] && form.touched[name]}>
          {label && <FormLabel opacity={.4}>{label}<sup>*</sup></FormLabel>}
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
              disabled={disabled}
              {...field}
            />

            { (type === 'password') && (
              <InputRightElement width="4.5rem">
                <Button
                  borderRadius="full"
                  colorScheme="blue"
                  variant="solid"
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
            {helperText}
          </FormHelperText>
        </FormControl>
      )}
    </Field>
  )
}