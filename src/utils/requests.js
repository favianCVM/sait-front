import Api from './api'

const login = (data) => Api().post('/profile/login', data);
const create_profile = (data) => Api().post('/profile/create-profile', data);

export default {
  //USER AUTH
  login,
  create_profile
}