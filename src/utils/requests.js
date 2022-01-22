import Api from "./api";

//USERS & LOGIN
const login = (data) => Api().post("/users/login", data);
const create_user = (data) => Api().post("/users/create-user", data);
const get_all_users = () => Api().get("/users/get-all-users");
const update_user = (data) =>
  Api().put(`/users/update-user/${data.get("id")}`, data);
const delete_user = (id) => Api().delete(`/users/delete-user/${id}`);
const password_reset = (data) => Api().post(``, data);
//DEVICES
const create_device = (data) => Api().post(`/devices/create-device`, data);
const update_device = (data) =>
  Api().put(`/devices/update-device/${data.get("id")}`, data);
const get_all_device_types = () => Api().get("/devices/get-all-device-types");
const get_all_devices = () => Api().get("/devices/get-all-devices");
const delete_device = (id) => Api().delete(`/devices/delete-device/${id}`);
//COMPONENTS
const get_all_components = () => Api().get(`/components/get-all-components`);
const create_component = (data) =>
  Api().post(`/components/create-component`, data);
const update_component = (data) =>
  Api().put(`/components/update-component/${data.get("id")}`, data);
const delete_component = (id) =>
  Api().delete(`/components/delete-component/${id}`);
//TECHNICIANS
const get_all_technicians = () => Api().get(`/technicians/get-all-technicians`);
//INCIDENCES
const create_incidence = (data) =>
  Api().post(`/incidences/create-incidence`, data);
const get_incidence_types = () => Api().get(`/incidences/incidence-types`);
const get_all_incidences = () => Api().get(`/incidences/get-all-incidences`);

export default {
  // user auth
  login,
  // users
  create_user,
  get_all_users,
  update_user,
  delete_user,
  password_reset,
  // devices
  create_device,
  update_device,
  get_all_devices,
  delete_device,
  get_all_device_types,
  // components
  get_all_components,
  create_component,
  update_component,
  delete_component,
  // technicians
  get_all_technicians,
  // incidences
  create_incidence,
  get_incidence_types,
  get_all_incidences,
};
