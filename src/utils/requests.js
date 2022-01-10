import Api from "./api";

const login = (data) => Api().post("/users/login", data);
const create_user = (data) => Api().post("/users/create-user", data);
const get_all_users = () => Api().get("/users/get-all-users");
const update_user = (data) =>
  Api().put(`/users/update-user/${data.get("id")}`, data);
const delete_user = (id) => Api().delete(`/users/delete-user/${id}`);
const create_device = (data) => Api().post(`/devices/create-device`, data);
const update_device = (data) => Api().put(`/devices/update-device/${data.get("id")}`, data);
const get_all_devices = () => Api().get("/devices/get-all-devices");
const delete_device = (id) => Api().delete(`/devices/delete-device/${id}`);

export default {
  //USER AUTH
  login,
  // users
  create_user,
  get_all_users,
  update_user,
  delete_user,
  // devices
  create_device,
  update_device,
  get_all_devices,
  delete_device,
};
