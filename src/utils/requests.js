import Api from './api'

const sign_in = (data) => Api().get('/user',data);

export default {
  //USER AUTH
  sign_in
}