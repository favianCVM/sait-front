import Api from './api'

const sign_in = (data) => Api().post('url',data);

export default {
  //USER AUTH
  sign_in
}