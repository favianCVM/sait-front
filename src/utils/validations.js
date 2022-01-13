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

const incidenceValidations = (values, props) => {
  let {
    type_id,
    description,
    errors: incidenceErrors,
    type = {},
    user_id,
  } = values;
  let { isAdmin } = props;
  const errors = {};
  errors.type = {};

  if (isAdmin && !user_id) {
    errors.user_id =
      "Debe seleccionar un usuario que percibio la incidencia";
  } else delete errors.user_id;

  if (type_id === "new" && !type.name) {
    errors.type.name = "Debe introducir un nombre al nuevo tipo de incidencia";
  } else delete errors.type.name;

  errors.errors = incidenceErrors.reduce((acc, item, index) => {
    let elErrors = {};

    if (!item.description) {
      elErrors.description = `Debe introducir una descripcion en la falla #${index}`;
    } else delete elErrors.description;

    if (!item.priority || item.priority === 0) {
      elErrors.priority = `Debe seleccionar una prioridad para la falla #${index}`;
    } else delete elErrors.priority;

    acc.push(elErrors);

    return acc;
  }, []);

  if (errors.errors.every((el) => Object.keys(el).length <= 0))
    delete errors.errors;
  if (Object.keys(errors.type).length <= 0) delete errors.type;

  if (!type_id || type_id === null) {
    errors.type_id = "Seleccione un tipo de incidencia valido.";
  } else delete errors.type_id;

  if (!description) {
    errors.description = "Se requiere de una descripción válida";
  } else delete errors.description;

  return errors;
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
  const errors = {};
  let { user_id, serial } = values;

  if (!allTypeValidation.test(serial)) {
    errors.serial = "Ingrese un serial valido";
  } else delete errors.serial;

  if (!user_id || user_id === null) {
    errors.user_id = "Seleccione un perfil propietario del equipo";
  } else delete errors.user_id;

  return errors;
};

const componentRegisterValidations = (values, props) => {};

//EXPORTS
export {
  loginValidations,
  incidenceValidations,
  userCreationValidations,
  userUpdateValidations,
  deviceRegisterValidations,
  componentRegisterValidations,
};
