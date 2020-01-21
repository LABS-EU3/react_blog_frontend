import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from '../components/Buttons/Button';
import {
    Container,
    Header2,
    Div,
    P,
    Input,
    P2
} from "../utilities/styles/LoginStyles";

import {
    login
} from "../redux-store/actions/auths";

const Login = props => {
    const email = useRef();
    const password = useRef();
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");


    const handleSubmit = () => {
        let valid = validate();
        if (valid) {
            return;
        }

        const userData = {
            email: email.current.value,
            password: password.current.value,
        }

        if (userData.email && userData.password) {
            props.login(userData)
        }
    };

    const validate = () => {
        let isError = false;
        var emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


        if (password.current.value.length < 5) {
            setPasswordError("Minimum of 5 characters");
            isError = true;
        }

        if (!(emailRegex.test(email.current.value))) {
            setEmailError(' Please Enter your email address')
            isError = true;
        }

        return isError;
    };

    if (props.login_success) {
        window.location.href = '/feed';
    }

    return (
        <Container>
            <Header2>Log In</Header2>
            <Div>
                <Input onChange={() => { setEmailError("") }}
                    ref={email} type="email" autoComplete="email" placeholder="Email" required
                />
                <div id="message">
                    <p id="length" className="invalid">{emailError}</p>
                </div>
                <Input onChange={() => { setPasswordError("") }}
                    ref={password} id="psw" type="password" autoComplete="password" placeholder="Password" pattern="{5,}" required
                />
                <div id="message">
                    <p id="length" className="invalid">{passwordError}</p>
                </div>
            </Div>
            <Div>
                <Button className="button" label={props.loading ? "Processing..." : "Log In"} handleClick={handleSubmit} id="login_btn" />
            </Div>
            <P> Forgot your Password? </P>
            <P2>
                {" "}
                Dont have an account yet? &nbsp; <Link to="/register"> Sign up here </Link>{" "}
            </P2>
        </Container>
    );
};

const mapStateToProps = store => {
    return {
        loading: store.auth.loading,
        login_success: store.auth.login_success
    }
}

export default connect(mapStateToProps, { login })(
    Login
);
