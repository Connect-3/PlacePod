import React from 'react';
import Description from './Description';
import Login from './Login';
import './IntroPage.css';

const IntroPage = () => {
  return (
    <div className="ui grid">
      <div className="six wide column">
        <Description />
      </div>
      <div className="ten wide column">
        <Login />
      </div>
      <div></div>
    </div>
  );
};

export default IntroPage;