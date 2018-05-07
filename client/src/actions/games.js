import * as request from 'superagent'
import {baseUrl} from '../constants'
import {logout} from './users'
import {isExpired} from '../jwt'
export const UPDATE_BATCHES = 'UPDATE_BATCHES'



export const getBatches =()=> (dispatch,getState)  => {
    
  const state = getState()
   const jwt = state.currentUser.jwt

    request
      .get(`${baseUrl}/batches`)
      .set('Authorization', `Bearer ${jwt}`)
      .then(result => dispatch(  {type: UPDATE_BATCHES,
        payload: result.body}))
      .catch(err => console.error(err))
  }