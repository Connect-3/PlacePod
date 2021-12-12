import axios from 'axios';
import React, { useState } from 'react';
import InputType from '../IntroPage/InputType';
import './admin.css';

const Admin = ({ admin, setAdmin }) => {
  const [adminNumber, setAdminNumber] = useState('');
  const [password, setPassword] = useState('');

  const LogIn = async (e) => {
    try {
      e.preventDefault();
      const res = await axios.post('/adminlogin', {
        adminNumber,
        password,
      });
      if (res.status === 200) {
        localStorage.setItem('adminNumber', adminNumber);
        alert('login successful');
        window.location = '/adminHome';
      }
    } catch (err) {
      alert('Invalid Credential');
      console.log(err);
    }
  };

  return (
    <div id="admin">
      <form className="ui form">
        <h1>Login In to PlacePod</h1>
        <InputType
          type="text"
          label="Admin Number"
          val={adminNumber}
          setVal={setAdminNumber}
        />
        <InputType
          type="password"
          label="Password"
          val={password}
          setVal={setPassword}
        />

        <button
          id="login-button"
          className="ui button"
          type="submit"
          onClick={LogIn}
        >
          Log In
        </button>
        <p
          className="admin-p"
          onClick={() => {
            setAdmin(0);
          }}
        >
          Student Portal
        </p>
      </form>
    </div>
  );
};

export default Admin;
