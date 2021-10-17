import { Map as map } from 'immutable';
import { LOG_OUT, SIGN_IN} from '../actionTypes'

const initialState = map({
  token: localStorage.getItem('token'),
  name: localStorage.getItem('name'),
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
      localStorage.removeItem('name');
      localStorage.removeItem('username');
      localStorage.removeItem('role');
      return state
        .set("logged", false)
        .set('token', null)
        .set('id', null)
        .set('role', null)
        .set('name', null)
        .set('username', null)

    case SIGN_IN:
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('id', action.payload.id);
      localStorage.setItem('name', action.payload.name);
      localStorage.setItem('username', `${action.payload.name} ${action.payload.last_name}`);
      localStorage.setItem('role', parseInt(action.payload.role));
      localStorage.setItem('logged', true);

      return state
        .set("logged", true)
        .set('id', action.payload.id)
        .set('role', parseInt(action.payload.role))
        .set('name', action.payload.name)
        .set('username', `${action.payload.name} ${action.payload.last_name}`)
        .set('token', action.payload.token)

    default:
      return state;
  }
}

export default user
