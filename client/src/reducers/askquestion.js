import {GET_RANDOM_STUDENT} from '../actions/games'
/*
The state will contain the games in an object with the game ID as key
*/
const initialState={redcount:0,yellowcount:0,greencount:0,selecteditems:[],randomstudent:{}}

export default (state = initialState, {type, payload}) => {
  
  switch (type) {
   
    case GET_RANDOM_STUDENT:
      {
          return {...state,randomstudent:payload.randomstudent}
      }

    default:
      return state
  }
}
