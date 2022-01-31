import {UPDATE_PROFILE} from '../actionTypes'
import requests from '@utils/requests'
import formatFormData from '@utils/formatFormData'

export function createUser(data) {
  return async dispatch => {
    return requests.create_user(formatFormData(data))
      .then(async (r)=>{
        return {
          title: 'perfil creado exitosamente.',
          success: true,
          status: 'success',
        }
      })
      .catch((e)=>{
        return {
          title: e.response?.data?.error?.message || 'Hubo un problema en la creacion del usuario.',
          success: false,
          status: 'error',
          description: 'Intente de nuevo'
        }
      })
  }
}

export function updateUser(data) {
  return async dispatch => {
    return requests.update_user(formatFormData(data))
      .then(async (r)=>{
        await dispatch({
          type: UPDATE_PROFILE,
          payload: {
            ...data,
            profile_picture: r.data.profile_picture_url
          }
        })
        return {
          title: 'Perfil actualizado exitosamente.',
          success: true,
          status: 'success',
        }
      })
      .catch((e)=>{
        return {
          title: e.response?.data?.error?.message || 'Hubo un problema en la actualizacíon del usuario.',
          success: false,
          status: 'error',
          description: 'Intente de nuevo'
        }
      })
  }
}

export function disableUser(id) {
  return async dispatch => {
    return requests.disable_user(id)
      .then(async (r)=>{
        return {
          title: 'Perfil Deshabilitado exitosamente.',
          success: true,
          status: 'success',
        }
      })
      .catch((e)=>{
        return {
          title: e.response?.data?.error?.message || 'Hubo un problema en deshabilitar el usuario.',
          success: false,
          status: 'error',
          description: 'Intente de nuevo'
        }
      })
  }
}

export function getAllUsers() {
  return async dispatch => {
    return requests.get_all_users()
      .then(async (r)=>{
        return {
          success: true,
          data: r.data,
        }
      })
      .catch((e)=>{
        return {
          title: e.response?.data?.error?.message || 'Hubo un problema al obtener los usuarios.',
          success: false,
          status: 'error',
          description: 'Intente de nuevo'
        }
      })
  }
}

export function getUserDevices(id) {
  return async dispatch => {
    return requests.get_all_users(id)
      .then(async (r)=>{
        return {
          success: true,
          data: r.data,
        }
      })
      .catch((e)=>{
        return {
          title: e.response?.data?.error?.message || 'Hubo un problema al obtener los equipos del usuario.',
          success: false,
          status: 'error',
          description: 'Intente de nuevo'
        }
      })
  }
}