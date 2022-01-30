import requests from '@utils/requests'
import formatFormData from '@utils/formatFormData'

export function registerItem(data){
  return async dispatch => {
    return requests.create_component(formatFormData(data))
    .then(r => {
      return {
        title: 'Elemento registrado exitosamente.',
        success: true,
        status: 'success',
      }
    })
    .catch(e => {
      return {
        title: e.response?.data?.error?.message || 'Hubo un problema en registrar el elemento.',
        success: false,
        status: 'error',
        description: 'Intente de nuevo'
      }
    })
  }
}

export function createItemCategory(data){
  return async dispatch => {
    return requests.create_component(formatFormData(data))
    .then(r => {
      return {
        title: 'Categoria de elemento creada exitosamente.',
        success: true,
        status: 'success',
      }
    })
    .catch(e => {
      return {
        title: e.response?.data?.error?.message || 'Hubo un problema en la creacion de la categoria.',
        success: false,
        status: 'error',
        description: 'Intente de nuevo'
      }
    })
  }
}

export function disableItem(id){
  return async dispatch => {
    return requests.update_component(id)
    .then(r => {
      return {
        title: 'Elemento desincorporado exitosamente.',
        success: true,
        status: 'success',
      }
    })
    .catch(e => {
      return {
        title: e.response?.data?.error?.message || 'Hubo un problema en desincorporar el elemento.',
        success: false,
        status: 'error',
        description: 'Intente de nuevo'
      }
    })
  }
}

export function deleteComponent(id){
  return async dispatch => {
    return requests.delete_component(id)
    .then(r => {
      return {
        title: 'Componente eliminado exitosamente.',
        success: true,
        status: 'success',
      }
    })
    .catch(e => {
      return {
        title: e.response?.data?.error?.message || 'Hubo un problema al eliminar del componente.',
        description: 'Intente de nuevo',
        success: false,
        status: 'error',
      }
    })
  }
}


export function getAllComponents(){
  return async dispatch => {
  return requests.get_all_components()
    .then(r => {
      return {
        data: r.data,
        success: true,
      }
    })
    .catch(e => {
      return {
        title: e.response?.data?.error?.message || 'Hubo un problema en la obtencion de los elementos.',
        success: false,
        status: 'error',
        description: 'Intente de nuevo'
      }
    })
  }
}
