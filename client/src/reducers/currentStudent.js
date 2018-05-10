
import {GET_STUDENT} from '../actions/operations'

export default function(state = null, {type, payload}) {
  switch (type) {
   
    case GET_STUDENT:
      return payload

    default:
      return state
  }
}
