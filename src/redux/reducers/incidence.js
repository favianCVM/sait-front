import { Map as map } from 'immutable';
import { } from '../actionTypes'

const initialState = map({
  incidences: []
})

const user = (state = initialState, action) => {

  switch(action.type){

    default:
      return state;
  }

}

export default user
