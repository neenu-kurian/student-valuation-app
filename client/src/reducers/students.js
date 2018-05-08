import { UPDATE_STUDENTS} from '../actions/games'

/*
The state will contain the games in an object with the game ID as key
*/

export default (state = null, {type, payload}) => {
  switch (type) {
   
    case UPDATE_STUDENTS:
      return payload

    default:
      return state
  }
}
