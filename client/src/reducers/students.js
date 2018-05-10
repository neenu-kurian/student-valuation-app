import { UPDATE_STUDENTS, DELETE_STUDENT} from '../actions/operations'
import {ADD_STUDENT} from '../actions/operations'

/*
The state will contain the games in an object with the game ID as key
*/


export default (state = null, {type, payload}) => {
  switch (type) {
   
    case UPDATE_STUDENTS:
      return payload

    case ADD_STUDENT:
    
    return [...state,payload]
    
    case DELETE_STUDENT:
     return state.splice(payload.id)

    default:
      return state
  }
}
