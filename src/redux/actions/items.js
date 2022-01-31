import requests from "@utils/requests";
import formatFormData from "@utils/formatFormData";

export function registerItem(data) {
  return async (dispatch) => {
    return requests
      .register_item(formatFormData(data))
      .then((r) => {
        return {
          title: "Elemento registrado exitosamente.",
          success: true,
          status: "success",
        };
      })
      .catch((e) => {
        return {
          title:
            e.response?.data?.message ||
            "Hubo un problema en registrar el elemento.",
          success: false,
          status: "error",
          description: "Intente de nuevo",
        };
      });
  };
}

export function registerItemCategory(data) {
  return async (dispatch) => {
    return requests
      .register_item_category(formatFormData(data))
      .then((r) => {
        return {
          title: "Categoria de elemento creada exitosamente.",
          success: true,
          status: "success",
        };
      })
      .catch((e) => {
        return {
          title:
            e.response?.data?.message ||
            "Hubo un problema en la creacion de la categoria.",
          success: false,
          status: "error",
          description: "Intente de nuevo",
        };
      });
  };
}

export function disableItem(id) {
  return async (dispatch) => {
    return requests
      .disable_item(id)
      .then((r) => {
        return {
          title: "Elemento desincorporado exitosamente.",
          success: true,
          status: "success",
        };
      })
      .catch((e) => {
        return {
          title:
            e.response?.data?.message ||
            "Hubo un problema en desincorporar el elemento.",
          success: false,
          status: "error",
          description: "Intente de nuevo",
        };
      });
  };
}

export function reincorporateItem(id) {
  return async (dispatch) => {
    return requests
      .reincoirporate_item(id)
      .then((r) => {
        return {
          title: "Elemento reincorporado exitosamente.",
          success: true,
          status: "success",
        };
      })
      .catch((e) => {
        return {
          title:
            e.response?.data?.message ||
            "Hubo un problema en reincorporar el elemento.",
          success: false,
          status: "error",
          description: "Intente de nuevo",
        };
      });
  };
}

export function disableItemCategory(id) {
  return async (dispatch) => {
    return requests
      .disable_item_category(id)
      .then((r) => {
        return {
          title: "Componente desincorporado exitosamente.",
          success: true,
          status: "success",
        };
      })
      .catch((e) => {
        return {
          title:
            e.response?.data?.message ||
            "Hubo un problema al desincorporar del componente.",
          description: "Intente de nuevo",
          success: false,
          status: "error",
        };
      });
  };
}

export function reincorporateItemCategory(id) {
  return async (dispatch) => {
    return requests
      .reincoirporate_item_category(id)
      .then((r) => {
        return {
          title: "Elemento reincorporado exitosamente.",
          success: true,
          status: "success",
        };
      })
      .catch((e) => {
        return {
          title:
            e.response?.data?.message ||
            "Hubo un problema en reincorporar el elemento.",
          success: false,
          status: "error",
          description: "Intente de nuevo",
        };
      });
  };
}

export function getAllItems() {
  return async (dispatch) => {
    return requests
      .get_all_items()
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
            "Hubo un problema en la obtencion de los elementos.",
          success: false,
          status: "error",
          description: "Intente de nuevo",
        };
      });
  };
}

export function getAvailableItems() {
  return async (dispatch) => {
    return requests
      .get_available_items()
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
            "Hubo un problema en la obtencion de los elementos.",
          success: false,
          status: "error",
          description: "Intente de nuevo",
        };
      });
  };
}
