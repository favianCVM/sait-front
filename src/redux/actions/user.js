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
    await dispatch({
      type: SIGN_IN,
      payload: {
        token: 2002020,
        type: 60,
        id_user: 15,
        full_name: 'algo',
        username: 'algo',
        logged: true,
      }
    })
/*     return requests.sign_in(data)
      .then(async (r)=>{
        
      })
      .catch((e)=>{

      }) */
  }
}