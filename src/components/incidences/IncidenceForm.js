import {
  Stack,
  Button,
  Box,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  ListItem,
  UnorderedList
} from '@chakra-ui/react'
import { Formik, Form } from "formik";
import {incidenceValidations} from '@utils/validations'
import { AutocompleteSelect, DateField, TextareaField } from '@components/common';

const countries = [
  { value: "ghana", label: "Ghana" },
  { value: "nigeria", label: "Nigeria" },
  { value: "kenya", label: "Kenya" },
  { value: "southAfrica", label: "South Africa" },
  { value: "unitedStates", label: "United States" },
  { value: "canada", label: "Canada" },
  { value: "germany", label: "Germany" }
];

const IncidenceForm = ({handleSubmit}) => {
  return(
    <Formik
      initialValues={{
        user:'',
        priority: '',
        date: new Date(),
        description: '',
      }}
      onSubmit={handleSubmit}
      validate={incidenceValidations}
    >
      {(props) => (
        <Form>
          <Box display="flex" flexDirection="column" w="100%">
            <Stack>
              <TextareaField
                name="description"
                id="description"
                placeholder="description"
                size='md'
                showError={false}
                disabled={props.isSubmitting}
              />
              
              <AutocompleteSelect
                name="user"
                placeholder="seleccione un usuario"
                listItems={countries}
                disabled={props.isSubmitting}
              />

              <AutocompleteSelect
                name="priority"
                placeholder="seleccione una prioridad"
                listItems={countries}
                disabled={props.isSubmitting}
              />

              <DateField
                label="fecha"
                name="date"
                maxDate={new Date()}
                disabled={props.isSubmitting}
              />

            </Stack>

            <Popover>
              <PopoverTrigger>
                <Button
                  mx="auto"
                  mt={4}
                  w={32}
                  colorScheme="blue"
                  type="submit"
                  isLoading={props.isSubmitting}
                >
                  Iniciar
                </Button>
              </PopoverTrigger>
              {Object.keys(props.errors).length > 0 && (
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Tienes errores</PopoverHeader>
                  <PopoverBody className="flex flex-col items-start">
                    <UnorderedList>
                      {Object.keys(props.errors).map((err) => (<ListItem>{props.errors[err]}</ListItem>))}
                    </UnorderedList>
                  </PopoverBody>
                </PopoverContent>
              )}
            </Popover>

          </Box>

        </Form>
      )}
    </Formik>
  )
}

export default IncidenceForm;