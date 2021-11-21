import React from 'react';
import './DashBoard.css';
import Feed from './Feed';

const SideBar = () => {
  return (
    <div className="ui very thin visible sidebar  vertical menu" id="sidebar">
      <h1 className="header" id="sidebar-header">
        <i className="cubes icon"></i>Placepod
      </h1>
      <div id="sidebar-items">
        <div className="ui segment" id="sidebar-segment">
          <i className="user icon"></i>Profile
        </div>
        <div className="ui segment" id="sidebar-segment">
          <i className="clipboard icon"></i>Pending Application
        </div>
        <div className="ui segment" id="sidebar-segment">
          <i className="keyboard icon"></i>Online Round
        </div>
        <div className="ui segment" id="sidebar-segment">
          <i className="desktop icon"></i>Scheduled Interview
        </div>
        <div className="ui segment" id="sidebar-segment">
          <i className="gift icon"></i>Offers
        </div>
      </div>
    </div>
  );
};

export default SideBar;
