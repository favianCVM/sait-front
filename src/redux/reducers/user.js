import { Map as map } from 'immutable';
import { LOG_OUT, SIGN_IN} from '../actionTypes'

const initialState = map({
  token: localStorage.getItem('token'),
  full_name: localStorage.getItem('full_name'),
  id_user: localStorage.getItem('id_user'),
  type: localStorage.getItem('type'),
  logged: localStorage.getItem('logged')
})

const user = (state = initialState, action) => {
  switch(action.type){
    case LOG_OUT:
      localStorage.removeItem('token');
      localStorage.removeItem('id_user');
      localStorage.removeItem('full_name');
      localStorage.removeItem('username');
      localStorage.removeItem('type');
      return state
        .set("logged", false)
        .set('id_user', null)
        .set('type', null)
        .set('full_name', null)
        .set('username', null)
        .set('token', null)

    case SIGN_IN:
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('id_user', action.payload.is_user);
      localStorage.setItem('full_name', action.payload.full_name);
      localStorage.setItem('username', action.payload.username);
      localStorage.setItem('type', action.payload.type);

      return state
        .set("logged", true)
        .set('id_user', action.payload.id_user)
        .set('type', action.payload.type)
        .set('full_name', action.payload.full_name)
        .set('username', action.payload.username)
        .set('token', action.payload.token)

    default:
      return state;
  }
}

export default user
