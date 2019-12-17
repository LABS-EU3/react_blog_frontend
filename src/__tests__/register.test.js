import React from "react";
import { render, getByText } from "@testing-library/react";
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { initialRegisterState, registerReducer } from '../redux-store/reducers/user-reducer'
import Register from "../pages/Register";

test("Component renders without crashing & is connected to redux store", () => {
  const div = document.createElement("div");
  const store = createStore(registerReducer, initialRegisterState);
  ReactDOM.render(<Provider store={store}><Register /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("App renders relevant form", () => {
    const div = document.createElement("div");
    const store = createStore(registerReducer, initialRegisterState);
    const { getByText } = render(<Provider store={store}><Register /></Provider>, div);
    const formHeader = getByText("Sign Up");
    expect(formHeader).toBeInTheDocument();
    ReactDOM.unmountComponentAtNode(div);
  });
