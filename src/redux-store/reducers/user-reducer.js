import * as types from '../actions/actionTypes';

const initialRegisterState = {
    username: "",
    email: "",
    password: ""
}

export const userReducer = (state = initialRegisterState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}