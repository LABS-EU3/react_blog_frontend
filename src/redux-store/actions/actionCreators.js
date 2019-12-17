// export function login(email, password) {
//     return dispatch => {
//       dispatch(loginReducer(true));
//       dispatch(setLoginSuccess(false));
//       dispatch(setLoginFailure(null));
  
//       callLoginApi(email, password, error => {
//         dispatch(loginReducer(false));
//         if (!error) {
//           dispatch(setLoginSuccess(true));
//         } else {
//           dispatch(setLoginFailure(error));
//         }
//       });
//     }
//   }