import {
  LOG_OUT,
  SIGN_IN
} from '../actionTypes'
import requests from '@utils/requests'

export function logOut() {
  return async dispatch => {
    await dispatch({
      type: LOG_OUT,
    });
  }
}

export function signIn(data) {
  return async dispatch => {
    return requests.login(data)
    .then(async (r)=>{
        await dispatch({
          type: SIGN_IN,
          payload: {
            ...r.data
          }
        })
        return {
          title: 'Login exitoso.',
          success: true,
          description: 'Bienvenido',
          status: 'success',
          role: r.data.role,
        }
      })
      .catch((e)=>{
        return {
          title: e.response?.data?.message || 'Hubo un problema en el login.',
          success: false,
          status: 'error',
          description: 'Intente de nuevo'
        }
      })
  }
}