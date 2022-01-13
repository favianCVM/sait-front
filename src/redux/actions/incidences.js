import requests from '@utils/requests'
import formatFormData from "@utils/formatFormData"

export function createIncidence(data){
  return async dispatch => {
    return requests.create_incidence(formatFormData(data))
    .then(r => {
      return {
        title: 'incidencia creada exitosamente.',
        success: true,
        description: '.....',
        status: 'success',
      }
    })
    .catch(e => {
      return {
        title: e.response?.data?.error?.message || 'Hubo un problema en la creacion de la incidencia.',
        success: false,
        status: 'error',
        description: 'Intente de nuevo'
      }
    })
  }
}

export function getIncidenceTypes(){
  return async dispatch => {
    return requests.get_incidence_types()
    .then(r => {
      return {
        success: true,
        data: r.data,
      }
    })
    .catch(e => {
      return {
        title: e.response?.data?.error?.message || 'Hubo un problema en la obtencion de los tipos de incidencia.',
        success: false,
        status: 'error',
        description: 'Intente de nuevo'
      }
    })
  }
}

