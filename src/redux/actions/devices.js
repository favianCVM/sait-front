import requests from "@utils/requests";
import formatFormData from "@utils/formatFormData";

export function createDevice(data) {
  return async (dispatch) => {
    return requests
      .create_device(formatFormData(data))
      .then((r) => {
        return {
          title: "Equipo creado exitosamente.",
          success: true,
          status: "success",
        };
      })
      .catch((e) => {
        return {
          title:
            e.response?.data?.message ||
            "Hubo un problema con el registro del equipo.",
          success: false,
          status: "error",
          description: "Intente de nuevo",
        };
      });
  };
}

export function updateDevice(data) {
  return async (dispatch) => {
    return requests
      .update_device(formatFormData(data))
      .then((r) => {
        return {
          title: "Equipo actualizado exitosamente.",
          success: true,
          status: "success",
        };
      })
      .catch((e) => {
        return {
          title:
            e.response?.data?.message ||
            "Hubo un problema al actualizar del equipo.",
          success: false,
          status: "error",
          description: "Intente de nuevo",
        };
      });
  };
}

export function deleteDevice(id) {
  return async (dispatch) => {
    return requests
      .delete_device(id)
      .then((r) => {
        return {
          title: "Equipo eliminado exitosamente.",
          success: true,
          status: "success",
        };
      })
      .catch((e) => {
        return {
          title:
            e.response?.data?.message ||
            "Hubo un problema al eliminar del equipo.",
          success: false,
          status: "error",
          description: "Intente de nuevo",
        };
      });
  };
}

export function getAllDevices() {
  return async (dispatch) => {
    return requests
      .get_all_devices()
      .then((r) => {
        return {
          data: r.data,
          success: true,
        };
      })
      .catch((e) => {
        return {
          title:
            e.response?.data?.message ||
            "Hubo un problema en la obtencion de los equipos.",
          success: false,
          status: "error",
          description: "Intente de nuevo",
        };
      });
  };
}

export function getAllDeviceTypes() {
  return async (dispatch) => {
    return requests
      .get_all_device_types()
      .then((r) => {
        return {
          data: r.data,
          success: true,
        };
      })
      .catch((e) => {
        return {
          title:
            e.response?.data?.message ||
            "Hubo un problema en la obtencion de los equipos.",
          success: false,
          status: "error",
          description: "Intente de nuevo",
        };
      });
  };
}
