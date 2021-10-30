import { Map as map } from 'immutable';
import { LOG_OUT, SIGN_IN} from '../actionTypes'

const initialState = map({
  token: localStorage.getItem('token'),
  first_name: localStorage.getItem('first_name'),
  username: localStorage.getItem('username'),
  id: localStorage.getItem('id'),
  role: parseInt(localStorage.getItem('role')),
  logged: localStorage.getItem('logged')
})

const user = (state = initialState, action) => {
  switch(action.type){
    case LOG_OUT:
      localStorage.removeItem('token');
      localStorage.removeItem('logged');
      localStorage.removeItem('id');
      localStorage.removeItem('first_name');
      localStorage.removeItem('username');
      localStorage.removeItem('role');
      return state
        .set("logged", false)
        .set('token', null)
        .set('id', null)
        .set('role', null)
        .set('first_name', null)
        .set('username', null)

    case SIGN_IN:
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('id', action.payload.id);
      localStorage.setItem('first_name', action.payload.first_name);
      localStorage.setItem('username', `${action.payload.first_name} ${action.payload.last_name}`);
      localStorage.setItem('role', parseInt(action.payload.role));
      localStorage.setItem('logged', true);

      return state
        .set("logged", true)
        .set('id', action.payload.id)
        .set('role', parseInt(action.payload.role))
        .set('first_name', action.payload.first_name)
        .set('username', `${action.payload.first_name} ${action.payload.last_name}`)
        .set('token', action.payload.token)

    default:
      return state;
  }
}

export default user
