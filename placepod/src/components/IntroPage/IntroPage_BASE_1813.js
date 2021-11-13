import React from 'react';
import Login from './Login';
import './IntroPage.css';

const IntroPage = () => {
  return (
    <div className="ui grid container">
      <div className="six wide column">Hello there</div>
      <div className="ten wide column">
        <Login />
      </div>
      <div></div>
    </div>
  );
};
import React from "react";
import Login from "./Login";
import Description from "./Description";
const IntroPage = ()=>{
    return (
        <div className="ui grid">
            <div className="six wide column"><Description/></div>
            <div className="ten wide column"><Login /></div>
            <div></div>
        </div>
    )
}

export default IntroPage;
