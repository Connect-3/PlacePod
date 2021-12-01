import React, { useState } from 'react';
import axios from 'axios';

import InputType from './InputType';
import './IntroPage.css';

const Login = () => {
  const [logIn, setLogIn] = useState(false);
  const [enrollment, setEnrollment] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const SignIn = (e) => {
    e.preventDefault();
    const data = { name, enrollment, password };
    axios.post('http://localhost:4000/register', data);
    localStorage.setItem('enrollment', enrollment);
    // window.location = "/home"
  };

  const LogIn = async (e) => {
    e.preventDefault();
    const { data } = await axios.post('http://localhost:4000/app/login', {
      enrollment,
      password,
    });
    if (data.msg === 'Valid Credential') {
      localStorage.setItem('enrollment', data.enrollment);
      // window.location("/home")
    }
    return;
  };

  return (
    <div id="login">
      <form className="ui form">
        <h1>Sign Up to PlacePod</h1>
        {!logIn && (
          <InputType type="text" label="Name" val={name} setVal={setName} />
        )}
        <InputType
          type="text"
          label="Enrollment"
          val={enrollment}
          setVal={setEnrollment}
        />
        <InputType
          type="password"
          label="Password"
          val={password}
          setVal={setPassword}
        />

        {!logIn && (
          <div className="ui field">
            <div className="ui checkbox">
              <input type="checkbox" required name="example" />
              <label>
                I have read and agree to <a href="#">Terms of Services</a>
              </label>
            </div>
          </div>
        )}
        {!logIn && (
          <button
            id="login-button"
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
            id="login-button"
            className="ui button"
            type="submit"
            onClick={() => {
              LogIn();
            }}
          >
            Log In
          </button>
        )}
        <div
          onClick={() => {
            setLogIn(!logIn);
          }}
          className={{ color: 'red' }}
        >
          {!logIn ? (
            <p className="login-p"> Already have an account?</p>
          ) : (
            <p className="login-p">Don't have an account?</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default Login;
