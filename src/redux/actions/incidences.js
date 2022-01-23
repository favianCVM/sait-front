import requests from "@utils/requests";
import formatFormData from "@utils/formatFormData";

export function createIncidence(data) {
  return async (dispatch) => {
    return requests
      .create_incidence(formatFormData(data))
      .then((r) => {
        return {
          title: "Incidencia creada exitosamente.",
          success: true,
          status: "success",
        };
      })
      .catch((e) => {
        return {
          title:
            e.response?.data?.error?.message ||
            "Hubo un problema en la creación de la incidencia.",
          success: false,
          status: "error",
          description: "Intente de nuevo",
        };
      });
  };
}

export function getIncidenceTypes() {
  return async (dispatch) => {
    return requests
      .get_incidence_types()
      .then((r) => {
        return {
          success: true,
          data: r.data,
        };
      })
      .catch((e) => {
        return {
          title:
            e.response?.data?.error?.message ||
            "Hubo un problema en la obtención de los tipos de incidencia.",
          success: false,
          status: "error",
          description: "Intente de nuevo",
        };
      });
  };
}

export function getAllIncidences() {
  return async (dispatch) => {
    return requests
      .get_all_incidences()
      .then((r) => {
        return {
          success: true,
          data: r.data,
        };
      })
      .catch((e) => {
        return {
          title:
            e.response?.data?.error?.message ||
            "Hubo un problema en la obtención de las incidencias.",
          success: false,
          status: "error",
          description: "Intente de nuevo",
        };
      });
  };
}

export function getTechnicianIncidences(id) {
  return async (dispatch) => {
    return requests
      .get_technician_incidences(id)
      .then((r) => {
        return {
          success: true,
          data: r.data,
        };
      })
      .catch((e) => {
        return {
          title:
            e.response?.data?.error?.message ||
            "Hubo un problema en la obtención de las incidencias.",
          success: false,
          status: "error",
          description: "Intente de nuevo",
        };
      });
  };
}

export function getIncidence(id) {
  return async (dispatch) => {
    return requests
      .get_incidence(id)
      .then((r) => {
        return {
          success: true,
          data: r.data,
        };
      })
      .catch((e) => {
        return {
          title:
            e.response?.data?.error?.message ||
            "Hubo un problema en la obtención de la incidencia.",
          success: false,
          status: "error",
          description: "Intente de nuevo",
        };
      });
  };
}

export function getUserIncidences(id) {
  return async (dispatch) => {
    return requests
      .get_user_incidences(id)
      .then((r) => {
        return {
          success: true,
          data: r.data,
        };
      })
      .catch((e) => {
        return {
          title:
            e.response?.data?.error?.message ||
            "Hubo un problema en la obtención de la incidencia.",
          success: false,
          status: "error",
          description: "Intente de nuevo",
        };
      });
  };
}

export function asignTechnicians(data) {
  return async (dispatch) => {
    return requests
      .asign_technicians(formatFormData(data))
      .then((r) => {
        return {
          success: true,
          title: "Asignación de técnico exitosa",
          status: "success",
          data: r.data,
        };
      })
      .catch((e) => {
        return {
          title:
            e.response?.data?.error?.message ||
            "Hubo un problema en la asignacion de tecnicos.",
          success: false,
          status: "error",
          description: "Intente de nuevo",
        };
      });
  };
}

export function updateIncidence(data) {
  return async (dispatch) => {
    return requests
      .update_incidence(formatFormData(data))
      .then((r) => {
        return {
          title: "Incidencia actualizada exitosamente.",
          success: true,
          status: "success",
        };
      })
      .catch((e) => {
        return {
          title:
            e.response?.data?.error?.message ||
            "Hubo un problema en la actualización de la incidencia.",
          success: false,
          status: "error",
          description: "Intente de nuevo",
        };
      });
  };
}

export function ConcludeIncidence(data) {
  return async (dispatch) => {
    return requests
      .conclude_incidence(formatFormData(data))
      .then((r) => {
        return {
          title: "Incidencia concluida exitosamente.",
          success: true,
          status: "success",
        };
      })
      .catch((e) => {
        return {
          title:
            e.response?.data?.error?.message ||
            "Hubo un problema en la finalización finalización de la incidencia.",
          success: false,
          status: "error",
          description: "Intente de nuevo",
        };
      });
  };
}
