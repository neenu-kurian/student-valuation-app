import * as request from 'superagent'
import {baseUrl} from '../constants'
import {logout} from './users'
import {isExpired} from '../jwt'
export const UPDATE_BATCHES = 'UPDATE_BATCHES'
export const UPDATE_STUDENTS='UPDATE_STUDENTS'


export const getBatches =()=> (dispatch,getState)  => {
    
  const state = getState()
  if (!state.currentUser) return null
   const jwt = state.currentUser.jwt

   if (isExpired(jwt)) return dispatch(logout())
    request
      .get(`${baseUrl}/batches`)
      .set('Authorization', `Bearer ${jwt}`)
      .then(result => dispatch(  {type: UPDATE_BATCHES,
        payload: result.body}))
      .catch(err => console.error(err))
  }

  export const getStudentsByBatch =(batchid)=> (dispatch,getState)  => {
    
    const state = getState()
    if (!state.currentUser) return null
     const jwt = state.currentUser.jwt
  
     if (isExpired(jwt)) return dispatch(logout())
      request
        .get(`${baseUrl}/batches/${batchid}`)
        .set('Authorization', `Bearer ${jwt}`)
        .then(result => dispatch(  {type: UPDATE_STUDENTS,
          payload: result.body}))
        .catch(err => console.error(err))
    }


  //export const getStudentsByBatch =()=> (dispatch,getState)  => {
  //  
  //  const state = getState()
  //  if (!state.currentUser) return null
  //   const jwt = state.currentUser.jwt
  //
  //   if (isExpired(jwt)) return dispatch(logout())
  //    request
  //      .get(`${baseUrl}/batches/students`)
  //      .set('Authorization', `Bearer ${jwt}`)
  //      .then(result => dispatch(  {type: UPDATE_STUDENTS,
  //        payload: result.body}))
  //      .catch(err => console.error(err))
  //  }