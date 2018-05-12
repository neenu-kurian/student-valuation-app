import {GET_RANDOM_STUDENT} from '../actions/operations'

const initialState={}

export default (state = initialState, {type, payload}) => {
  
  switch (type) {
   
    case GET_RANDOM_STUDENT:
      {  
          return payload.randomstudent
      }

    default:
      return state
  }
}
