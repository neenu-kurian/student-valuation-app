import { UPDATE_BATCHES} from '../actions/operations'
import {ADD_BATCH} from '../actions/operations'


export default (state = null, {type, payload}) => {
  
  switch (type) {
   
    case UPDATE_BATCHES:
      return payload

    case ADD_BATCH:
    
    return [...state,payload]

    default:
      return state
  }
}
