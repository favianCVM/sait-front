import {Box} from '@chakra-ui/react'
import { CUIAutoComplete } from 'chakra-ui-autocomplete'
import lodash from 'lodash'
import { Field } from 'formik';

const AutocompleteSelect = ({
  name = '',
  label = '',
  placeholder = '',
  listItems = [],
  containerClasses=''
}) => {

  const values = (field) => {
    if(field.value) return [{label: field.value, value: field.value }]
    else return []
  }

  return (
    <Box className={containerClasses}>
      <Field name={name}>
          {({field, form}) => (
            <CUIAutoComplete
              listItemStyleProps={{
                background: 'white',
              }}
              listStyleProps={{
                position: 'absolute',
                zIndex: '100',
                width: '90%',
              }}
  /*             tagStyleProps={{
                _hidden: 'hidden',
                hidden: 'hidden'
              }} */
  /*             selectedIconProps={{
                _hidden: 'hidden',
                hidden: 'hidden'
              }} */
              hideToggleButton={true}
              disableCreateItem={true}
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