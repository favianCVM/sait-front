import error from './error'

export default {
  type_id: "",
  description: "",
  //user
  user_id: null,
  //user device incidence
  device_id: null,
  //this is fow the new incidence type case
  type: {
    name: ""
  },
  //incidence errors
  errors: [error],
}