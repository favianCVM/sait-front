import Api from './api'

const login = (data) => Api().post('/profile/login', data);

export default {
  //USER AUTH
  login
}