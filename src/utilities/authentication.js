import * as types from "../redux-store/actions/actionTypes";

export const setToken = store => next => action => {
  if(action.type === types.REGISTER_SUCCESS || action.type === types.LOGIN_SUCCESS) {
      localStorage.setItem('token', action.payload);
      localStorage.setItem('user', JSON.stringify(action.user))
  }
  next(action);
}

// export const redirectAuth = store => next => action => {
// if (action.type === NO_AUTH) {
//   removeItem("token");
//   removeItem('user');
//   window.location.reload();
// }
// next(action);
// };