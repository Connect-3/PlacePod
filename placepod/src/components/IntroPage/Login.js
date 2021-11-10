import { Container } from '@material-ui/core';
import React, { useState } from 'react';
import InputType from './InputType';

const Login = () => {
  const [logIn, setLogIn] = useState(false);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const SignIn = () => {
    return;
  };

  const LogIn = () => {
    return;
  };

  return (
    <Container>
      <form className="ui form">
        <h1>Sign Up to PlacePod</h1>
        {!logIn && (
          <InputType type="text" label="Name" val={name} setVal={setName} />
        )}
        <InputType type="email" label="Email" val={email} setVal={setEmail} />
        <InputType
          type="password"
          label="Password"
          val={password}
          setVal={setPassword}
        />
        {!logIn && (
          <button
            className="ui button"
            type="submit"
            onClick={() => {
              SignIn();
            }}
          >
            Sign In
          </button>
        )}

        {logIn && (
          <button
            className="ui button"
            type="submit"
            onClick={() => {
              LogIn();
            }}
          >
            Log In
          </button>
        )}
      </form>
      <div
        onClick={() => {
          setLogIn(!logIn);
        }}
        className={{ color: 'red' }}
      >
        {logIn ? <p> Already have an account?</p> : <p>Create an account</p>}
      </div>
    </Container>
  );
};

export default Login;
