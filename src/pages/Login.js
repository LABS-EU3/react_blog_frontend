import React, { useRef, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {Container, MyH2, Div, P, Input, Button} from "../utilities/styles/LoginStyles"

const Login = props => {
    const nameRef = useRef();
    const passwordRef = useRef();

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

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
        setLoading(true);
        axios
            .post("https://react-blog.herokuapp.com/auth/login", {
                username: nameRef.current.value,
                password: passwordRef.current.value
            })
            .then(response => {
                setLoading(false);
                window.localStorage.setItem("token", response.data.token);

            })
            .catch(error => {
                setLoading(false);
            });
    };

    return (
        <Container>
            <MyH2> Log In </MyH2>
            <Div>
                {/* <p>Username</p> */}
                <Input ref={nameRef} type="text" autoComplete="username" placeholder="Username" />
            </Div>

            <Div>
                {/* <p>Password</p> */}
                <Input ref={passwordRef} type="password" autoComplete="password" placeholder="Password" />
            </Div >

            <Div>
                <Button onClick={submit}> {loading ? "Loading" : "Login"} </Button>
            </Div>
            <P> Forgot your Password? </P>
            <P> Dont have an account yet? <Link> Sign up here </Link> </P>

        </Container>
    );
};


export default Login