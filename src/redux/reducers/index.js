import { combineReducers } from 'redux';

import auth from './auth'
import incidence from './incidence'

const rootReducer = combineReducers({
  auth,
  incidence,
});

export default rootReducer
