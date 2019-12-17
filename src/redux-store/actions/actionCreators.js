import * as types from './actionTypes';
import axios from 'axios';

export const register = (user) => dispatch => {
    axios.post("http://localhost:3300/api/auth/register", user)
    .then(res =>{
        alert("Welcome to Insight " + res.data.username)
    })
    .catch(err => {
        console.log(err)
    })
}