import React, { useState } from 'react';
import Login from './Login';
import Description from './Description';
import Admin from '../Admin/Admin';
const IntroPage = () => {
  const [admin, setAdmin] = useState(0);

  return (
    <div className="ui grid" id="intro">
      <div className="six wide column">
        <Description />
      </div>
      {admin === 1 ? (
        <div className="ten wide column">
          <Admin admin={admin} setAdmin={setAdmin} />
        </div>
      ) : (
        <div className="ten wide column">
          <Login admin={admin} setAdmin={setAdmin} />
        </div>
      )}
    </div>
  );
};

export default IntroPage;
