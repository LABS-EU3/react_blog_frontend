import React, { useRef } from "react";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import Button from '../components/Button'
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

  const handleSubmit = () => {
    const userData = {
      email: email.current.value,
      password: password.current.value,
    }

    if (userData.email && userData.password) {
      props.login(userData)
    }
  };

  if (props.login_success) {
    return <Redirect to='/feed' />
  }

  return (
    <Container>
      {console.log(props)}
      <Header2>Log In</Header2>
      <Div>
        <Input
          ref={email}
          type="email"
          autoComplete="email"
          placeholder="Email"
          required
        />
        <Input
          ref={password}
          type="password"
          autoComplete="password"
          placeholder="Password"
          required
        />
      </Div>
      <Div>
          <Button className="button" label={props.loading ? "Processing..." : "Log In"} handleClick={handleSubmit} id="login_btn"/>
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

export default connect(mapStateToProps, {login})(
  Login
);
