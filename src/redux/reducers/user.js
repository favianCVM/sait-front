import { Map as map } from 'immutable';

const initialState = map({
  personalData: {}
})

const user = (state = initialState, action) => {
  switch(action.type){

    default:
      return state;
  }
}

export default user
