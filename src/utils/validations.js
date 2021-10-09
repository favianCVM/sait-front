const loginValidations = (values, props) => {
  const errors = {};
  let { name, password } = values;

  if (!/^([a-zA-ZñÑáéíóúÁÉÍÓÚüÜ ]{3,})$/.test(name)) {
    errors.name = 'Required';
  } else delete errors.name

  if (!/^([a-zA-ZñÑáéíóúÁÉÍÓÚüÜ ]{3,})$/.test(password)) {
    errors.password = 'Required';
  } else delete errors.password


  return errors;
};

const incidenceValidations = (values, props) => {
  const errors = {};
  let { 
    user, 
    priority,
    date,
    description, 
  } = values;

  if (!/^([a-zA-ZñÑáéíóúÁÉÍÓÚüÜ ]{3,})$/.test(user) || !user) {
    errors.user = 'usuario';
  } else delete errors.user

  if (!/^([a-zA-ZñÑáéíóúÁÉÍÓÚüÜ ]{3,})$/.test(priority) || !priority) {
    errors.priority = 'prioridad';
  } else delete errors.priority

  if (!date || isNaN(date)) {
    errors.date = 'fecha';
  } else delete errors.date

  if (!description) {
    errors.description = 'descripcion';
  } else delete errors.description


  return errors;
};


//EXPORTS
export {
  loginValidations,
  incidenceValidations
}