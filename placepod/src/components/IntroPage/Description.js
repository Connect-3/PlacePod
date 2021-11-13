import React from "react";
import "./IntroPage.css";
const Description = () => {
  return (
    <div className='description-body'>
      <div className='description-h2'>
        PlacePod
        <div className='description-p'>A Place for all your needs</div>
      </div>
      <div className='description-know'>
        <div class='ui teal animated fade button' tabindex='0'>
          <div class='visible content'>Wanna know more about us</div>
          <div class='hidden content'>Redicrect to Youtube</div>
        </div>
      </div>
    </div>
  );
};

export default Description;
