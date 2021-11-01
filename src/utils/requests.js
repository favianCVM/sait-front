import Api from './api'

const login = (data) => Api().post('/profile/login', data);
const create_profile = (data) => Api().post('/profile/create-profile', data);
const get_all_profiles = () => Api().get('/profile/get-all-profiles');
const update_profile = (data) => Api().put(`/profile/update-profile/${data.id}`, data);
const delete_profile = (id) => Api().post(`/profile/delete-profile/${id}`);

export default {
  //USER AUTH
  login,
  // profiles
  create_profile,
  get_all_profiles,
  update_profile,
  delete_profile,
}