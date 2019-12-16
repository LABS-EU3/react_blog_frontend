import React, { useRef } from "react";
import {connect} from "react-redux"

function Register(props) {
  const username = useRef("");
  const email = useRef("");
  const password = useRef("");

  const signup = e => {
    e.preventDefault();
    console.log(
      username.current.value,
      email.current.value,
      password.current.value
    );
  };

  return (
    <div>
      <form>
        <input placeholder="Username" ref={username} />
        <input placeholder="Email" ref={email} />
        <input placeholder="Password" ref={password} />
        <button onClick={signup}>Create an Account</button>
      </form>
    </div>
  );
}

export default connect(state=>state, {})(Register)