import { Map as map } from "immutable";
import { LOG_OUT, SIGN_IN, UPDATE_PROFILE } from "../actionTypes";

const initialState = map({
  token: localStorage.getItem("token"),
  first_name: localStorage.getItem("first_name"),
  username: localStorage.getItem("username"),
  id: localStorage.getItem("id"),
  role: parseInt(localStorage.getItem("role")),
  logged: localStorage.getItem("logged"),
  profile_picture: localStorage.getItem("profile_picture"),
});

const user = (state = initialState, action) => {
  const userId = JSON.parse(localStorage.getItem("id"));
  const isUserUpdate = userId === parseInt(action?.payload?.id) ? true : false;

  console.log('isUserUpdate :', isUserUpdate);
  console.log(action);


  switch (action.type) {
    case LOG_OUT:
      localStorage.removeItem("token");
      localStorage.removeItem("logged");
      localStorage.removeItem("id");
      localStorage.removeItem("first_name");
      localStorage.removeItem("username");
      localStorage.removeItem("role");
      localStorage.removeItem("profile_picture");
      return state
        .set("logged", false)
        .set("token", null)
        .set("id", null)
        .set("role", null)
        .set("first_name", null)
        .set("username", null)
        .set("profile_picture", null);

    case SIGN_IN:
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("id", action.payload.id);
      localStorage.setItem("first_name", action.payload.first_name);
      localStorage.setItem(
        "username",
        `${action.payload.first_name} ${action.payload.last_name}`
      );
      localStorage.setItem("profile_picture", action.payload.profile_picture);
      localStorage.setItem("role", parseInt(action.payload.role));
      localStorage.setItem("logged", true);

      return state
        .set("logged", true)
        .set("id", action.payload.id)
        .set("role", parseInt(action.payload.role))
        .set("first_name", action.payload.first_name)
        .set(
          "username",
          `${action.payload.first_name} ${action.payload.last_name}`
        )
        .set("profile_picture", action.payload.profile_picture)
        .set("token", action.payload.token);

    case UPDATE_PROFILE:
      if (isUserUpdate) {
        localStorage.setItem("id", action.payload.id);
        localStorage.setItem("role", parseInt(action.payload.role));
        localStorage.setItem("first_name", action.payload.first_name);
        localStorage.setItem(
          "username",
          `${action.payload.first_name} ${action.payload.last_name}`
        );
        localStorage.setItem("profile_picture", action.payload.profile_picture);

        return state
          .set("id", action.payload.id)
          .set("role", parseInt(action.payload.role))
          .set("first_name", action.payload.first_name)
          .set(
            "username",
            `${action.payload.first_name} ${action.payload.last_name}`
          )
          .set("profile_picture", action.payload.profile_picture);
      } else return state;

    default:
      return state;
  }
};

export default user;
