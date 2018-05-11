import {GET_STUDENT} from '../actions/operations'

const initialState={id:0,batchid:0,studentimage:" ",studentname:" ",evaluation:" ",evaluationdetails:" "}

export default (state = null, {type, payload}) => {
  
  switch (type) {
   
    case GET_STUDENT:
      {   
         
         return {...state,payload}
      }

    default:
      return state
  }
}

