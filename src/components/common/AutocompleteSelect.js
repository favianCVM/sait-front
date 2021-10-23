import {Box, InputGroup, Input} from '@chakra-ui/react'
import { CUIAutoComplete } from 'chakra-ui-autocomplete'
import lodash from 'lodash'
import { Field } from 'formik';
import {
  useColorMode,
  Flex,
  Avatar,
  Text
} from '@chakra-ui/react'

const AutocompleteSelect = ({
  name = '',
  label = '',
  placeholder = '',
  listItems = [],
  itemRender = null,
  disabled=false,
  size = "md",
  id,
  type,
  ...props
}) => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'

  const values = (field) => {
    if(field.value) return [{label: field.value, value: field.value }]
    else return []
  }

  const customRender = (selected) => {
    return (
      <Flex flexDir="row" alignItems="center">
        <Avatar mr={2} size="sm" name={selected.label} />
        <Text>{selected.label}</Text>
      </Flex>
    )
  }

  return (
    <Box>
      <Field name={name}>
          {({field, form}) => (
            <CUIAutoComplete
              highlightItemBg="blue.100"
              inputStyleProps={{
                cursor: 'pointer',
              }}
              listItemStyleProps={{
                cursor: 'pointer',
                textColor: 'blue.800',
              }}
              listStyleProps={{
                textColor: 'blue.800',
                position: 'absolute',
                zIndex: '100',
                width: '90%',
                maxH: "44",
                overflowY: 'scroll'
              }}
              hideToggleButton={true}
              disableCreateItem={true}
              renderCustomInput={(inputProps) => (
                <InputGroup size={size}>
                  <Input 
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    size={size}
                    type={type}
                    disabled={disabled}
                    {...inputProps}
                  />
                </InputGroup>
              )}
              itemRenderer={ itemRender || customRender}
              name={name}
              label={label}
              placeholder={placeholder}
              items={listItems}
              selectedItems={values(field)}
              onSelectedItemsChange={(changes)=>{
                if(changes.selectedItems.length){
                  let user = lodash.last(changes.selectedItems)
                  form.setFieldValue(name, user.value)
                }else{
                  form.setFieldValue(name, '')
                }
              }}
            />
          )}
        </Field>
      </Box>
  );
}

export default AutocompleteSelect;