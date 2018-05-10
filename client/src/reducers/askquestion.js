import {GET_RANDOM_STUDENT} from '../actions/operations'

const initialState={redcount:0,yellowcount:0,greencount:0,randomstudent:{}}

export default (state = initialState, {type, payload}) => {
  
  switch (type) {
   
    case GET_RANDOM_STUDENT:
      {   
          if(state.randomstudent.evaluation==='red'){
              state.redcount=state.redcount+1
          }
          else if(state.randomstudent.evaluation==='yellow'){
              state.yellowcount=state.yellowcount+1
          }
          else {
              state.greencount=state.greencount+1
          }
          return {...state,randomstudent:payload.randomstudent}
      }

    default:
      return state
  }
}
