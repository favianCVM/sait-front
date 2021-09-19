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
    return true;
  }
}

export function SignIn(data) {
  return async dispatch => {
    return requests.sign_in(data)
      .then((r)=>{

      })
      .catch((e)=>{

      })
  }
}