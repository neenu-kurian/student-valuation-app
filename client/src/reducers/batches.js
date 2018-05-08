import { UPDATE_BATCHES} from '../actions/games'
import {ADD_BATCH} from '../actions/games'
/*
The state will contain the games in an object with the game ID as key
*/

export default (state = null, {type, payload}) => {
  
  switch (type) {
   
    case UPDATE_BATCHES:
      return payload

    case ADD_BATCH:{
    
    return payload}

    default:
      return state
  }
}
