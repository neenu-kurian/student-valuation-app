import {GET_STUDENT} from '../actions/operations'

const initialState={id:0,batchid:0,studentimage:" ",studentname:" ",evaluation:" ",evaluationdetails:" "}

export default (state = null, {type, payload}) => {
  
  switch (type) {
   
    case GET_STUDENT:
      {   
         
         return {...state,id:payload.id,batchid:payload.batchid,studentimage:payload.studentimage,studentname:payload.studentname,
          evaluation:payload.evaluation,evaluationdetails:payload.evaluationd}
      }

    default:
      return state
  }
}
