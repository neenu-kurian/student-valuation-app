import { UPDATE_STUDENTS, DELETE_STUDENT} from '../actions/operations'
import {ADD_STUDENT} from '../actions/operations'
import {ADD_EVALUATION} from '../actions/operations'


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
