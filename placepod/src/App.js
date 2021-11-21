import React from 'react';
import Feed from './components/DashBoard/Feed';
import SideBar from './components/DashBoard/SideBar';
import IntroPage from './components/IntroPage/IntroPage'
const App = () => {
  return (
    <div className="ui grid">
      <div className="three wide column">
        <SideBar />
      </div>
      <div className="nine wide column">
        <Feed />
      </div>
      {/* <IntroPage /> */}
      {/* <CompanyData /> */}
      {/* <NewProfile /> */}
    </div>
  );
};

export default App;
