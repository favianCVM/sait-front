const emailValidation = /\S+@\S+\.\S+/;
const passwordValidation = /^[0-9a-zA-Z-!@#$%^&*]{5,}$/;
const allTypeValidation = /^[0-9a-zA-Z-!@#$%^&* ]{5,}$/;
const stringValidation1 = /^([a-zA-ZñÑáéíóúÁÉÍÓÚüÜ ]{3,})$/;

const loginValidations = (values, props) => {
  const errors = {};
  let { email, password } = values;

  if (!emailValidation.test(email)) {
    errors.email = "Correo electrónico inválido";
  } else delete errors.email;

  if (!passwordValidation.test(password)) {
    errors.password = "Contraseña inválida";
  } else delete errors.password;

  return errors;
};

const incidenceCreationValidations = (values, props) => {
  let { description, device_id, priority, location } = values;
  const errors = {};

  if (!device_id) {
    errors.device_id = "Debe seleccionar el equipo que presenta la incidencia";
  } else delete errors.device_id;

  if (!priority || priority === null) {
    errors.priority = `Debe seleccionar una prioridad para la incidencia`;
  } else delete errors.priority;

  if (!description) {
    errors.description = "Se requiere de una descripción válida";
  } else delete errors.description;

  if (!location) {
    errors.location = "Se requiere de una localización";
  } else delete errors.location;

  // errors.errors = incidenceErrors.reduce((acc, item, index) => {
  //   let elErrors = {};

  //   if (!item.description) {
  //     elErrors.description = `Debe introducir una descripcion en la falla #${index}`;
  //   } else delete elErrors.description;

  //   // if (!item.priority || item.priority === 0) {
  //   //   elErrors.priority = `Debe seleccionar una prioridad para la falla #${index}`;
  //   // } else delete elErrors.priority;

  //   acc.push(elErrors);

  //   return acc;
  // }, []);

  // if (errors.errors.every((el) => Object.keys(el).length <= 0))
  //   delete errors.errors;
  // if (Object.keys(errors.type).length <= 0) delete errors.type;

  return errors;
};

const concludeIncidenceValidations = (values) => {
  let { errors } = values;
  const formErrors = {};

  formErrors.errors = errors.reduce((acc, item, index) => {
    let elErrors = {};

    if (!item.description) {
      elErrors.description = `Debe introducir una descripcion en la falla #${index}`;
    } else delete elErrors.description;

    // if (!item.priority || item.priority === 0) {
    //   elErrors.priority = `Debe seleccionar una prioridad para la falla #${index}`;
    // } else delete elErrors.priority;

    acc.push(elErrors);

    return acc;
  }, []);

  if (!errors.length) {
    formErrors.empty_errors =
      "Debe introducir la o las fallas de la incidencia.";
  } else delete formErrors.empty_errors;

  if (formErrors.errors.every((el) => Object.keys(el).length <= 0))
    delete formErrors.errors;

  return formErrors;
};

const userCreationValidations = (values, props) => {
  const errors = {};
  let { email, password, birth_date, first_name, last_name, dni, role, sex } =
    values;

  if (!emailValidation.test(email)) {
    errors.email = "Correo electrónico inválido";
  } else delete errors.email;

  if (!passwordValidation.test(password)) {
    errors.password = "Contraseña inválida";
  } else delete errors.password;

  if (!role || role === 0) {
    errors.role = "Requiere un rol";
  } else delete errors.role;

  if (!birth_date && isNaN(new Date(birth_date))) {
    errors.birth_date = "Requiere de fecha";
  } else delete errors.birth_date;

  if (!sex) {
    errors.sex = "Requiere sexo";
  } else if (sex === "M" || sex === "F") delete errors.sex;

  if (!dni) {
    errors.dni = "DNI inválido";
  } else delete errors.dni;

  if (!stringValidation1.test(first_name)) {
    errors.first_name = "Nombre inválido";
  } else delete errors.first_name;

  if (!stringValidation1.test(last_name)) {
    errors.last_name = "Apellido inválido";
  } else delete errors.last_name;

  return errors;
};

const userUpdateValidations = (values, props) => {
  const errors = {};
  let { email, birth_date, first_name, last_name, dni, role, sex } = values;

  if (!emailValidation.test(email)) {
    errors.email = "Correo electrónico inválido";
  } else delete errors.email;

  if (!birth_date && isNaN(new Date(birth_date))) {
    errors.birth_date = "Requiere de fecha";
  } else delete errors.birth_date;

  if (!sex) {
    errors.sex = "Requiere sexo";
  } else if (sex === "M" || sex === "F") delete errors.sex;

  if (!dni) {
    errors.dni = "DNI inválido";
  } else delete errors.dni;

  if (!stringValidation1.test(first_name)) {
    errors.first_name = "Nombre inválido";
  } else delete errors.first_name;

  if (!stringValidation1.test(last_name)) {
    errors.last_name = "Apellido inválido";
  } else delete errors.last_name;

  return errors;
};

const deviceRegisterValidations = (values, props) => {
  let { serial, device_type = {}, device_type_id } = values;
  const errors = {};
  errors.device_type = {};

  if (!device_type_id) {
    errors.device_type_id = "Debe seleccionar un tipo de equipo.";
  } else delete errors.device_type_id;

  if (device_type_id === "new" && !device_type.name) {
    errors.device_type.name =
      "Debe introducir un nombre para el tipo de equipo.";
  } else delete errors.device_type.name;

  if (!Object.keys(errors.device_type).length) delete errors.device_type;

  if (!allTypeValidation.test(serial)) {
    errors.serial = "Ingrese un serial valido";
  } else delete errors.serial;

  return errors;
};

const passwordResetValidations = (values, props) => {
  const errors = {};
  const { email } = values;

  if (!emailValidation.test(email)) {
    errors.email = "Debe introducir un email";
  } else delete errors.email;

  return errors;
};

const registerItemValidations = (values, props) => {
  const errors = {};
  const { serial } = values;

  if (!allTypeValidation.test(serial)) {
    errors.serial = "Debe introducir un serial";
  } else delete errors.serial;

  return errors;
};

//EXPORTS
export {
  loginValidations,
  incidenceCreationValidations,
  userCreationValidations,
  userUpdateValidations,
  deviceRegisterValidations,
  registerItemValidations,
  passwordResetValidations,
  concludeIncidenceValidations,
};
