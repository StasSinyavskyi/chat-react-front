import * as types from '../constants/auth';

import {chatApi,redirectto} from './services';



//action creator
export function login(username, password){
  return (dispatch,getState)=>{
    const {isFetching} = getState().services;
    if (isFetching.login) {
      return Promise.resolve();
    }

    dispatch({
      type: types.LOGIN_REQUEST,
    })

    return chatApi('login',username,password)
   
      .then(json => 
        { 
          if (!json.token) {
            //throw console.error('Token is not provided');
            dispatch({type: types.LOGIN_FAILURE, payload: json,})
          }else{
            localStorage.setItem('token',json.token);
  
            dispatch({type: types.LOGIN_SUCCESS, payload: json,})}
          }
  

      )
      .catch(reason => dispatch({type: types.LOGIN_FAILURE, payload: reason,}));

  }
}

//action creator
export function logout(){
  return (dispatch,getState)=>{
    const {isFetching} = getState().services;
    if (isFetching.logout) {
      return Promise.resolve();
    }
    
    dispatch({
      type: types.LOGOUT_REQUEST,
    });
    
    localStorage.removeItem('token');

    dispatch({
      type: types.LOGOUT_SUCCESS,
    });

  }

}


//action creator
export function toProfile(){
  return (dispatch)=>{
    dispatch(redirectto('/profile'));

  }

}

//action creator
export function toChat(){
  return (dispatch)=>{
    dispatch(redirectto('/chat'));

  }

}



//action creator
export function signup(username, password){
  return (dispatch,getState)=>{
    const {isFetching} = getState().services;
    if (isFetching.signup) {
      return Promise.resolve();
    }
    
    dispatch({
      type: types.SIGNUP_REQUEST
    })

    return chatApi('signup',username,password)
  
      .then(json =>{ 
        if (!json.token) {
          //throw console.error('Token is not provided');
          dispatch({type: types.SIGNUP_FAILURE, payload: json,});
        }else{
          localStorage.setItem('token',json.token);
          dispatch({type: types.SIGNUP_SUCCESS, payload: json,})}
        }

        
      )
      .catch(reason => dispatch({type: types.SIGNUP_FAILURE, payload: reason,}));
  }
}

//action creator
export function receiveAuth(){
  //thunk
  return (dispatch,getState)=>{
    const {token}=getState().auth;//auth is the name of reducer
    const {isFetching} = getState().services;
    if (isFetching.receiveAuth) {
      return Promise.resolve();
    }
    

    if (!token){
     // console.log("token not exist");
     return dispatch({
        type: types.RECIEVE_AUTH_FAILURE,
      })
    }
    //console.log(token);
    return chatApi('users/me',token)
    
      .then(json =>{ 
        if (!json.user){throw console.error('User is not returned');}
        dispatch({type: types.RECIEVE_AUTH_SUCCESS, payload: json,})}
      )
      .catch(reason => dispatch({type: types.RECIEVE_AUTH_FAILURE, payload: reason,}));
  


  }
}

export function editProfile(username,firstname,lastname,city){
  return (dispatch,getState)=>{
    const {token}=getState().auth;
    const {isFetching} = getState().services;
    if (isFetching.editProfile) {
      return Promise.resolve();
    }
    

    if (!token){
      // console.log("token not exist");
      return dispatch({
         type: types.RECIEVE_AUTH_FAILURE,
       })
     }

    dispatch({
      type: types.EDIT_PROFILE_REQUEST
    })

    return chatApi('userupdate',token,username,firstname,lastname)
    
      .then(json =>{ 
        if (!json.user){dispatch({type: types.EDIT_PROFILE_FAILURE, payload: json,});}
        else{
          dispatch({type: types.EDIT_PROFILE_SUCCESS, payload: json,});
          dispatch(redirectto('/chat'));
          //console.log('tt');
        }
        
      }
      )
      .catch(reason => dispatch({type: types.EDIT_PROFILE_FAILURE, payload: reason,}));

  }

}


