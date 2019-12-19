// import React from "react";
// import { render, getByText } from "@testing-library/react";
// import ReactDOM from "react-dom";
// import { createStore } from 'redux';
// import { Provider } from 'react-redux';
// import { initialLoginState, loginReducer } from '../redux-store/reducers/user-reducer'
// import Login from "../pages/Login";

// test("Component renders without crashing & is connected to redux store", () => {
//   const div = document.createElement("div");
//   const store = createStore(loginReducer, initialLoginState);
//   ReactDOM.render(<Provider store={store}><Login /></Provider>, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

// test("App renders relevant form", () => {
//     const div = document.createElement("div");
//     const store = createStore(loginReducer, initialLoginState);
//     const { getByText } = render(<Provider store={store}><Login /></Provider>, div);
//     const formHeader = getByText("Login");
//     expect(formHeader).toBeInTheDocument();
//     ReactDOM.unmountComponentAtNode(div);
//   });
