import * as types from "../actions/actionTypes";

const initialLoginState = {
    username: "",
    password: ""
};

export const loginReducer = (state = initialLoginState, action) => {
    switch(action.type) {
        case types.LOGIN_START:
            return {};
            default:
                return state;
    }
};