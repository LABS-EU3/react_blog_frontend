import * as types from "../redux-store/actions/actionTypes";
import { isTokenExpired } from './checkToken';

export const setToken = store => next => action => {
  if(action.type === types.REGISTER_SUCCESS || action.type === types.LOGIN_SUCCESS) {
      localStorage.setItem('token', action.payload);
      localStorage.setItem('user', JSON.stringify(action.user))
  }
  next(action);
}

export const getToken = () => {
  try {
    const token = localStorage.getItem('token');
    if (token === null) {
      return undefined;
    } else {
      const isExpired = isTokenExpired(token); // Check if token is expired
      if (isExpired) {
        clearLocalStorage();
        return undefined;
      }
    }
    return token;
  } catch {
    return undefined;
  }
};

export const clearLocalStorage = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  localStorage.removeItem('userBasic');
  window.location.href = '/';
};

// export const redirectAuth = store => next => action => {
// if (action.type === NO_AUTH) {
//   removeItem("token");
//   removeItem('user');
//   window.location.reload();
// }
// next(action);
// };