const emailValidation = /\S+@\S+\.\S+/;

const stringValidation1 = /^([a-zA-ZñÑáéíóúÁÉÍÓÚüÜ ]{3,})$/;

const loginValidations = (values, props) => {
  const errors = {};
  let { email, password } = values;

  if (!emailValidation.test(email)) {
    errors.email = 'Required';
  } else delete errors.email

  if (!stringValidation1.test(password)) {
    errors.password = 'Required';
  } else delete errors.password


  return errors;
};

const incidenceValidations = (values, props) => {
  const errors = {};
  let { 
    profile,
    priority,
    date,
    description, 
  } = values;

  if (!profile) {
    errors.profile = 'usuario';
  } else delete errors.profile

  if (!priority) {
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

const profileCreationValidations = (values, props) => {
  const errors = {};
  let { email, password, birth_date, first_name, last_name, dni, role, sex } = values;

  if (!emailValidation.test(email)) {
    errors.email = 'email';
  } else delete errors.email

  if (!stringValidation1.test(password)) {
    errors.password = 'contrasenna';
  } else delete errors.password

  if(!role || role === 0){
    errors.role = 'role';
  } else delete errors.role

  if(!birth_date && isNaN(new Date(birth_date))){
    errors.birth_date = 'fecha';
  } else delete errors.birth_date

  if(!sex){
    errors.sex = 'sexo';
  } else if(sex === 'M' || sex === 'F') delete errors.sex

  if(!dni){
    errors.dni = 'dni';
  } else delete errors.dni

  if(!stringValidation1.test(first_name)){
    errors.first_name = 'nombre'
  }else delete errors.first_name

  if(!stringValidation1.test(last_name)){
    errors.last_name = 'apellido'
  }else delete errors.last_name

  return errors;
}

//EXPORTS
export {
  loginValidations,
  incidenceValidations,
  profileCreationValidations,
}