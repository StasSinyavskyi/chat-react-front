import history from '../utils/history';
import * as types from '../constants';

//action creator THUNK
export function redirect (to) {
  return (dispatch)=>{
    history.push('$(process.env.PUBLIC_URL)$(to)');
    dispatch({type: types.REDIRECT, payload: {to},})
  }
  
}
