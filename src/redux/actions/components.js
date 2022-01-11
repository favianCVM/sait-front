import requests from '@utils/requests'
import formatFormData from "@utils/formatFormData"

export function createComponent(data){
  return async dispatch => {
    return requests.create_component(formatFormData(data))
    .then(r => {
      return {
        title: 'componente creado exitosamente.',
        success: true,
        description: '.....',
        status: 'success',
      }
    })
    .catch(e => {
      return {
        title: e.response?.data?.error?.message || 'Hubo un problema en la creacion del componente.',
        success: false,
        status: 'error',
        description: 'Intente de nuevo'
      }
    })
  }
}

export function updateComponent(data){
  return async dispatch => {
    return requests.update_component(formatFormData(data))
    .then(r => {
      return {
        title: 'componente actualizado exitosamente.',
        success: true,
        description: '.....',
        status: 'success',
      }
    })
    .catch(e => {
      return {
        title: e.response?.data?.error?.message || 'Hubo un problema al actualizar del componente.',
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
        title: 'componente eliminado exitosamente.',
        success: true,
        description: '.....',
        status: 'success',
      }
    })
    .catch(e => {
      return {
        title: e.response?.data?.error?.message || 'Hubo un problema al eliminar del componente.',
        success: false,
        status: 'error',
        description: 'Intente de nuevo'
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
        title: e.response?.data?.error?.message || 'Hubo un problema en la obtencion de los componentes.',
        success: false,
        status: 'error',
        description: 'Intente de nuevo'
      }
    })
  }
}
