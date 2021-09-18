//LOGIN FORM VALIDATIONS
class LoginValidations{
  validateLoginName(field){
    let valid = /^([a-zA-ZñÑáéíóúÁÉÍÓÚüÜ ]{3,})$/.test(field);
    let error = (!valid) ? 'Nombre invalido' : ''
    return error
  }

  validateLoginPassword(field){
    let valid = /^([a-zA-ZñÑáéíóúÁÉÍÓÚüÜ ]{3,})$/.test(field);
    let error = (!valid) ? 'Contrasenna invalido' : ''
    return error
  }
}
const loginValidations = new LoginValidations({})


//EXPORTS
export {
  loginValidations
}