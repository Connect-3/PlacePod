import React, { useState } from 'react';
import axios from 'axios';
import InputType from './InputType';
import './IntroPage.css';

const Login = () => {
  const [logIn, setLogIn] = useState(false);
  const [enrollment, setEnrollment] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SignIn = async (e) => {
    try {
      e.preventDefault();
      const data = { email, enrollment, password };
      const res = await axios.post('/register', data);
      if (res.status === 422) alert('domo');
      if (res.status === 201) {
        window.location = '/home';
      } else alert('Invaid Credentials');
    } catch (err) {
      alert(err.response.data.error);
    }
  };

  const LogIn = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post('/login', {
        enrollment,
        password,
      });

      console.log(res);
      if (res.status === 200) {
        window.location = '/home';
      } else {
        alert('debug');
      }
    } catch (err) {
      console.log(err);
      alert(err.response.data.error);
    }

    return;
  };

  return (
    <div id="login">
      <form className="ui form">
        <h1>Sign Up to PlacePod</h1>
        {!logIn && (
          <InputType type="email" label="Email" val={email} setVal={setEmail} />
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
            onClick={SignIn}
          >
            Sign In
          </button>
        )}

        {logIn && (
          <button
            id="login-button"
            className="ui button"
            type="submit"
            onClick={LogIn}
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
