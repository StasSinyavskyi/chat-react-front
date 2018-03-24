import * as types from '../constants/services';
import history from '../utils/history';


// THUNK
export function redirectto(to) {
  return (dispatch) => {
    history.push(to);
    dispatch({
      type: types.REDIRECT,
      payload: { to },
    });
  };
}

export function clearErrors() {
  return (dispatch) => {
    dispatch({
      type: types.CLEAR_ERROR,
    });
  };
}

// next line disabled lint to not show error warning
// eslint-disable-next-line
export function chatApi(apiCommand, par1 = null,
  par2 = null, par3 = null, par4 = null,
) {
  // const {username,password,token} = rest;
  const MainUrl = 'http://localhost:8000/v1/';
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  let call;

  switch (apiCommand) {
    case 'login':
    case 'signup':
      call = fetch(MainUrl + apiCommand, {
        method: 'POST',
        body: JSON.stringify({
          username: par1,
          password: par2,
        }),
        headers,
      });
      break;

    // -------------------------------------------------------------
    // http://localhost:8000/v1/users/me
    case 'users/me':
    case 'chats/my':
    case 'chats':
      // add authorization
      headers.Authorization = `Bearer ${par1}`;

      call = fetch(MainUrl + apiCommand, {
        method: 'GET', // we can skip it because GET is default method
        headers,
      });

      break;

    // ---------------------------------------------------------------
    case 'userupdate':
      // add authorization
      headers.Authorization = `Bearer ${par1}`;
      call = fetch(`${MainUrl}users/me`, {
        method: 'POST',
        body: JSON.stringify({
          data: {
            username: par2,
            firstName: par3,
            lastName: par4,
          },
        }),
        headers,
      });
      break;

      //---------------------------------------------------------------
    case 'chatsid':
      // add authorization
      headers.Authorization = `Bearer ${par1}`;

      call = fetch(`${MainUrl}chats/${par2}`, {
        method: 'GET', // we can skip it because GET is default method
        headers,
      });

      break;

      //---------------------------------------------------------------
    case 'chatadd':
      // add authorization
      headers.Authorization = `Bearer ${par1}`;
      call = fetch(`${MainUrl}chats`, {
        method: 'POST',
        body: JSON.stringify({
          data: {
            title: par2,
          },
        }),
        headers,
      });
      break;

      //---------------------------------------------------------------
    case 'chatjoin':
      // add authorization
      headers.Authorization = `Bearer ${par1}`;
      call = fetch(`${MainUrl}chats/${par2}/join`, {
        method: 'GET',
        headers,
      });
      break;

      //---------------------------------------------------------------
    case 'chatlive':
      // add authorization
      headers.Authorization = `Bearer ${par1}`;
      call = fetch(`${MainUrl}chats/${par2}/leave`, {
        method: 'GET',
        headers,
      });
      break;

      //---------------------------------------------------------------
    case 'chatdelete':
      // add authorization
      headers.Authorization = `Bearer ${par1}`;
      call = fetch(`${MainUrl}chats/${par2}`, {
        method: 'DELETE',
        headers,
      });
      break;

      //---------------------------------------------------------------
    case 'sendmessage':
      // add authorization
      headers.Authorization = `Bearer ${par1}`;
      call = fetch(`${MainUrl}chats/${par2}`, {
        method: 'POST',
        body: JSON.stringify({
          data: {
            content: par3,
            statusMessage: par4,
          },
        }),
        headers,
      });
      break;

      //---------------------------------------------------------------
    default:
      return null;
  }
  return call.then(response => response.json());
}
