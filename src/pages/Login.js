import React, { useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Container, MyH2, Div, P, Input, Button, P2 } from "../utilities/styles/LoginStyles";
import {setLoginSuccess, setLoginFailure} from "../redux-store/actions/actionCReators";
import useLocalStorage from "../hooks/useLocalStorage";

const Login = props => {
    const nameRef = useRef();
    const passwordRef = useRef();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [userInfo, setUserInfo] = useLocalStorage('userInfo', {});

    const validate = () => {
        let isError = false;
        if (nameRef.current.value === "") {
            setError("Please enter a valid Username!");
            isError = true;
        }
        if (passwordRef.current.value === "") {
            setError("Please enter a valid password!");
            isError = true;
        }
        return isError;
    };

    const submit = () => {
        let valid = validate();
        if (valid) {
            return;
        }

        let dummyData = {
            name: "damilola",
            token: "jkasaKLJajksdja",
            username: "bettyd"
        }
        props.setLoginSuccess(dummyData)
 
        // setLoading(true);
        // axios
        //     .post("https://react-blog.herokuapp.com/auth/login", {
        //         username: nameRef.current.value,
        //         password: passwordRef.current.value
        //     })
        //     .then(response => {
        //         setLoading(false);
                // setUserInfo(dummyData)
        // props.setLoginSuccess(dummyData)

        //     })
        //     .catch(error => {
        //         setLoading(false);
        // props.setLoginFailure(error)
        //     });
    };

    return (

        <Container>
            <MyH2> Login </MyH2>
            <Div>
                <Input ref={nameRef} type="text" autoComplete="username" placeholder="Username" />
            </Div>

            <Div>
                <Input ref={passwordRef} type="password" autoComplete="password" placeholder="Password" />
            </Div >

            <Div>
                <Button onClick={submit}> {loading ? "Loading" : "Login"} </Button>
            </Div>
            <P> Forgot your Password? </P>
            <P2> Dont have an account yet? <Link> Sign up here </Link> </P2>

        </Container>
    );
};


export default connect(state => state, {setLoginSuccess, setLoginFailure})(Login)