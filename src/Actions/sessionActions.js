import * as types from './actionTypes';  

var usertest = { username: "@david" };
var tokentest = 'token00'

export function loginSuccess() {  
  return {type: types.LOG_IN_SUCCESS}
}

export function logoutUser(){
	sessionStorage.removeItem('jwt');
	sessionStorage.removeItem('user');
	return {type: types.LOG_OUT}
}

export function loginUser(credentials) {  
  return function(dispatch) {
    //CONECT WITH API | send request with credentials | handle errors
      sessionStorage.setItem('jwt', tokentest);
      sessionStorage.setItem('user',JSON.stringify({usertest}));
  };
}
