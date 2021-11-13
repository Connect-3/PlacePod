<<<<<<< HEAD
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
=======
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
>>>>>>> f0136520102df91188e30d7111ae60d3facc93cb

export default IntroPage;
