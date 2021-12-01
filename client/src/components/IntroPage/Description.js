import React from 'react';
import './IntroPage.css';
const Description = () => {
  return (
    <div className="description-body">
      <h1 className="description-h2">
        Welcome to Jaypee Placement Platform
        <p className="description-p">Platform is designed for students participating in Jaypee Placement Drives.Student can track their interview, application status and Offers</p>
        <div class="ui animated fade button" id="description-button"  tabindex="0">
          <div class="visible content">Tap to know more</div>
          <div class="hidden content">Redicrect to Youtube</div>
         </div>
      </h1>
    </div>
  );
};

export default Description;
