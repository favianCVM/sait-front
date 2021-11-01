const emailValidation = /\S+@\S+\.\S+/;
const passwordValidation = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/
const stringValidation1 = /^([a-zA-ZñÑáéíóúÁÉÍÓÚüÜ ]{3,})$/;

const loginValidations = (values, props) => {
  const errors = {};
  let { email, password } = values;

  if (!emailValidation.test(email)) {
    errors.email = 'Correo electrónico inválido';
  } else delete errors.email

  if (!stringValidation1.test(password)) {
    errors.password = 'Contraseña inválida';
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
    errors.profile = 'Se requiere de un perfil';
  } else delete errors.profile

  if (!priority) {
    errors.priority = 'Se requiere de una prioridad';
  } else delete errors.priority

  if (!date || isNaN(date)) {
    errors.date = 'Se requiere de una fecha valida';
  } else delete errors.date

  if (!description) {
    errors.description = 'Se requiere de una descripción válida';
  } else delete errors.description


  return errors;
};

const profileCreationValidations = (values, props) => {
  const errors = {};
  let { email, password, birth_date, first_name, last_name, dni, role, sex } = values;

  if (!emailValidation.test(email)) {
    errors.email = 'Correo electrónico inválido';
  } else delete errors.email

  if (!passwordValidation.test(password)) {
    errors.password = 'Contraseña inválida';
  } else delete errors.password

  if(!role || role === 0){
    errors.role = 'Requiere un rol';
  } else delete errors.role

  if(!birth_date && isNaN(new Date(birth_date))){
    errors.birth_date = 'Requiere de fecha';
  } else delete errors.birth_date

  if(!sex){
    errors.sex = 'Requiere sexo';
  } else if(sex === 'M' || sex === 'F') delete errors.sex

  if(!dni){
    errors.dni = 'DNI inválido';
  } else delete errors.dni

  if(!stringValidation1.test(first_name)){
    errors.first_name = 'Nombre inválido'
  }else delete errors.first_name

  if(!stringValidation1.test(last_name)){
    errors.last_name = 'Apellido inválido'
  }else delete errors.last_name

  return errors;
}

//EXPORTS
export {
  loginValidations,
  incidenceValidations,
  profileCreationValidations,
}