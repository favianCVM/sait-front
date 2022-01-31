import Api from "./api";

//LOGIN
const login = (data) => Api().post("/users/login", data);
const password_reset = (data) => Api().post(``, data);
//USERS
const create_user = (data) => Api().post("/users/create-user", data);
const get_all_users = () => Api().get("/users/get-all-users");
const update_user = (data) =>
  Api().put(`/users/update-user/${data.get("id")}`, data);
const disable_user = (id) => Api().delete(`/users/disable-user/${id}`);
const get_user = (id) => Api().get(`/users/get-user/${id}`);
//DEVICES
const create_device = (data) => Api().post(`/devices/create-device`, data);
const update_device = (data) =>
  Api().put(`/devices/update-device/${data.get("id")}`, data);
const get_all_device_types = () => Api().get("/devices/get-all-device-types");
const get_all_devices = () => Api().get("/devices/get-all-devices");
const delete_device = (id) => Api().delete(`/devices/delete-device/${id}`);
//ITEMS
const get_all_items = () => Api().get(`/items/get-all-items`);
const get_available_items = () => Api().get(`/items/get-available-items`);
const register_item = (data) => Api().post(`/items/register-item`, data);
const register_item_category = (data) =>
  Api().post(`/items/register-item-category`, data);
const disable_item = (id) => Api().delete(`/items/disable-item/${id}`);
const reincoirporate_item = (id) => Api().post(`/items/reincorporate-item/${id}`);
const reincoirporate_item_category = (id) => Api().post(`/items/reincorporate-item-category/${id}`);
const disable_item_category = (id) =>
  Api().delete(`/items/disable-item-category/${id}`);
//TECHNICIANS
const get_all_technicians = () => Api().get(`/technicians/get-all-technicians`);
//INCIDENCES
const create_incidence = (data) =>
  Api().post(`/incidences/create-incidence`, data);
const get_incidence_types = () => Api().get(`/incidences/incidence-types`);
const get_all_incidences = () => Api().get(`/incidences/get-all-incidences`);
const get_user_incidences = (id) =>
  Api().get(`/incidences/get-user-incidences/${id}`);
const get_technician_incidences = (id) =>
  Api().get(`/incidences/get-technician-incidences/${id}`);
const get_incidence = (id) => Api().get(`/incidences/get-incidence/${id}`);
const asign_technicians = (data) =>
  Api().post(`/incidences/assign-technicians`, data);
const update_incidence = (data) =>
  Api().put(`/incidences/update-incidence/${data.get("id")}`, data);
const conclude_incidence = (data) =>
  Api().post(
    `/incidences/conclude-incidence/${data.get("incidence_id")}`,
    data
  );

export default {
  // user auth
  login,
  // users
  create_user,
  get_all_users,
  update_user,
  disable_user,
  password_reset,
  get_user,
  // devices
  create_device,
  update_device,
  get_all_devices,
  delete_device,
  get_all_device_types,
  // items
  get_all_items,
  get_available_items,
  register_item,
  register_item_category,
  disable_item,
  disable_item_category,
  reincoirporate_item,
  reincoirporate_item_category,
  // technicians
  get_all_technicians,
  // incidences
  create_incidence,
  update_incidence,
  get_incidence_types,
  get_technician_incidences,
  get_all_incidences,
  get_incidence,
  asign_technicians,
  get_user_incidences,
  conclude_incidence,
};
