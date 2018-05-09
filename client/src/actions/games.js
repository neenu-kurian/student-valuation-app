import * as request from 'superagent'
import {baseUrl} from '../constants'
import {logout} from './users'
import {isExpired} from '../jwt'
export const UPDATE_BATCHES = 'UPDATE_BATCHES'
export const UPDATE_STUDENTS='UPDATE_STUDENTS'
export const ADD_BATCH='ADD_BATCH'
export const ADD_STUDENT='ADD_STUDENT'
export const DELETE_STUDENT="DELETE_STUDENT"

export const createNewBatch = batchstate => ({
  type: ADD_BATCH,
  payload: batchstate
})

export const createNewStudent = studentstate => ({
  type: ADD_STUDENT,
  payload: studentstate
})

export const removeStudent = id => ({
  type: DELETE_STUDENT,
  payload:id
})

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


  export const createStudent =(studentstate,batchid)=> (dispatch,getState)  => {
    
    const newbatchstate={...studentstate,batchid}
    const state = getState()
    
    if (!state.currentUser) return null
     const jwt = state.currentUser.jwt
      
     if (isExpired(jwt)) return dispatch(logout())
      request
        .post(`${baseUrl}/batches/newstudent/${batchid}`)
        .set('Authorization', `Bearer ${jwt}`)
        .send(newbatchstate)
        .then(result => dispatch(createNewStudent(newbatchstate)))
        .catch(err => console.error(err))
    }

    export const deleteStudent=(id)=>(dispatch,getState)=>{
      const state = getState()
    
    if (!state.currentUser) return null
     const jwt = state.currentUser.jwt
      
     if (isExpired(jwt)) return dispatch(logout())
      request
      .delete(`${baseUrl}/batches/students/${id}`) 
      .set('Authorization', `Bearer ${jwt}`)
      .then(result => dispatch(removeStudent(id)))
      .catch(err => console.error(err))
    }

    export const createBatch =(batchstate)=> (dispatch,getState)  => {
    
      const newbatchstate=batchstate
      const state = getState()
      if (!state.currentUser) return null
       const jwt = state.currentUser.jwt
    
       if (isExpired(jwt)) return dispatch(logout())
        request
          .post(`${baseUrl}/batches/students/newbatch`)
          .set('Authorization', `Bearer ${jwt}`)
          .send(batchstate)
          .then(result => dispatch(createNewBatch(batchstate)))
          .catch(err => console.error(err))
      }
  