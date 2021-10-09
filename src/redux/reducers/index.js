import { combineReducers } from 'redux';

import user from './user'
import incidence from './incidence'

const rootReducer = combineReducers({
  user,
  incidence,
});

export default rootReducer
