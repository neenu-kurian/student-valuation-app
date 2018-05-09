import { UPDATE_STUDENTS} from '../actions/games'
import {ADD_STUDENT} from '../actions/games'
/*
The state will contain the games in an object with the game ID as key
*/

export default (state = null, {type, payload}) => {
  switch (type) {
   
    case UPDATE_STUDENTS:
      return payload

    case ADD_STUDENT:
    
    return [...state,payload]

    default:
      return state
  }
}
