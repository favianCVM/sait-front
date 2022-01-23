import { LOG_OUT, SIGN_IN } from "../actionTypes";
import requests from "@utils/requests";
import formatFormData from "@utils/formatFormData";

export function logOut() {
  return async (dispatch) => {
    await dispatch({
      type: LOG_OUT,
    });
  };
}

export function signIn(data) {
  return async (dispatch) => {
    return requests
      .login(formatFormData(data))
      .then(async (r) => {
        await dispatch({
          type: SIGN_IN,
          payload: {
            ...r.data,
          },
        });
        return {
          title: "Bienvenido",
          success: true,
          status: "success",
          role: r.data.role,
        };
      })
      .catch((e) => {
        return {
          title: e.response?.data?.message || "Hubo un problema en el login.",
          success: false,
          status: "error",
          description: "Intente de nuevo",
        };
      });
  };
}

export function passwordReset(data) {
  return async (dispatch) => {
    return requests
      .password_reset((data))
      .then(async (r) => {
        return {
          title: "Correo enviado exitosamente.",
          success: true,
          description:
            "Se le ha enviado un correo a su email, en el se encuentra un link de recuperacion.",
          status: "success",
        };
      })
      .catch((e) => {
        return {
          title:
            e.response?.data?.message ||
            "Hubo un problema en el envio del email.",
          success: false,
          status: "error",
          description: "Intente de nuevo",
        };
      });
  };
}
