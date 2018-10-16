import * as types from './actionTypes';  

var usertest = { username: "@david" };
var tokentest = 'token00'

export function loginSuccess() {  
  return {type: types.LOG_IN_SUCCESS}
}

export function logoutUser(){
    console.log("LOgout")
	sessionStorage.removeItem('jwt');
	sessionStorage.removeItem('user');
	return {type: types.LOG_OUT}
}

export function loginUser(credentials) {  
  return function(dispatch) {
    //CONECT WITH API 
      sessionStorage.setItem('jwt', tokentest);
      sessionStorage.setItem('user',JSON.stringify({usertest}));
  };
}
