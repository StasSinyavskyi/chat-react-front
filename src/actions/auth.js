import {SIGNUP_REQUEST, 
  SIGNUP_SUCCESS, 
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  LOGOUT_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  RECIEVE_AUTH_FAILURE,
  RECIEVE_AUTH_REQUEST,
  RECIEVE_AUTH_SUCCESS,
  } from '../constants';

//action creator
export function login(username, password){
  return (dispatch)=>{
    dispatch({
      type: LOGIN_REQUEST,
    })

    return  fetch('http://localhost:8000/v1/login', {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      //.then(json => console.log(json))
      //.catch(reason => console.error(reason));
      .then(json => 
        { 
          if (!json.token) {throw console.error('Token is not provided');}
  
          localStorage.setItem('token',json.token);
  
          dispatch({type: LOGIN_SUCCESS, payload: json,})}
      )
      .catch(reason => dispatch({type: LOGIN_FAILURE, payload: reason,}));

  }
}

//action creator
export function logout(){
  return (dispatch)=>{
    dispatch({
      type: LOGOUT_REQUEST,
    })
  }

}

//action creator
export function signup(username, password){
  return (dispatch)=>{
    dispatch({
      type: SIGNUP_REQUEST
    })

  return  fetch('http://localhost:8000/v1/signup', {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
        //username: username.value,
        //password: password.value,
      }),
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(json =>{ 
        if (!json.token){throw console.error('Token is not provided');}

        localStorage.setItem('token',json.token);

        dispatch({type: SIGNUP_SUCCESS, payload: json,})}
      )
      .catch(reason => dispatch({type: SIGNUP_FAILURE, payload: reason,}));
  }
}

//action creator
export function receiveAuth(){
  //thunk
  return (dispatch,getState)=>{
    const {token}=getState().auth;//auth is the name of reducer

    if (!token){
      console.log("token not exist");
     return dispatch({
        type: RECIEVE_AUTH_FAILURE,
      })
    }
console.log("token exist");
    return  fetch('http://localhost:8000/v1/users/me', {
      method: "GET", //we can skip it because GET is default method     
      headers: {
        'Autherization': 'Bearer ${token}',
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(json =>{ 
        dispatch({type: RECIEVE_AUTH_SUCCESS, payload: json,})}
      )
      .catch(reason => dispatch({type: RECIEVE_AUTH_FAILURE, payload: reason,}));
  


  }
}
