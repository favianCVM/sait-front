import {
  Select,
  InputGroup,
  FormControl,
  FormHelperText,
} from "@chakra-ui/react";
import { Field } from "formik";

const SelectMenu = ({ 
  name = '', 
  id = '', 
  listItems = [],
  placeholder = '',
  handleChange = null,
  disabled = false,
  helperText = '',
}) => {

  return (
    <Field name={name}>
      {({ field, form }) => (
        <FormControl
          id={id}
          isInvalid={form.errors[name] && form.touched[name]}
        >
          <InputGroup>
            <Select
              mt="1.5" 
              disabled={disabled}
              variant="outline"
              placeholder={placeholder}
              name={name}
              onChange={async (e)=>{
                let {value} = e.target;
                if(handleChange){
                  await handleChange(form, name, value)
                } else { 

                }

                form.setFieldValue(name, value)
              }}
              {...field}
            >
              {listItems.map((el)=>(
                <option
                  value={el.value}
                >
                    {el.name}
                </option>
              ))}
            </Select>
          </InputGroup> 
          <FormHelperText>
            { field.value && !form.errors[name] ? null : (form.errors[name] || helperText) }
          </FormHelperText>
        </FormControl>
      )}
    </Field>
  );
};

export default SelectMenu;