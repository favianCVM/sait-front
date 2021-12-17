import Api from "./api";

const login = (data) => Api().post("/users/login", data);
const create_user = (data) => Api().post("/users/create-user", data);
const get_all_users = () => Api().get("/users/get-all-users");
const update_user = (data) =>
  Api().put(`/users/update-user/${data.get("id")}`, data);
const delete_user = (id) => Api().post(`/users/delete-user/${id}`);

export default {
  //USER AUTH
  login,
  // users
  create_user,
  get_all_users,
  update_user,
  delete_user,
};
