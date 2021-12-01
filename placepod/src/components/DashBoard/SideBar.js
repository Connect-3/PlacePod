import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './DashBoard.css';
import Feed from './Feed';

const linkStyle = {
  color: '#EEEEEE',
};
const SideBar = () => {
  return (
    <div className="ui very thin visible sidebar  vertical menu" id="sidebar">
      <h1 className="header" id="sidebar-header">
        <i className="dolly icon"></i>
        <Link to="/home" style={linkStyle}>
          Placepod
        </Link>
      </h1>
      <div id="sidebar-items">
        <div className="ui segment" id="sidebar-segment">
          <i className="home icon"></i>
          <Link to="/home" style={linkStyle}>
            Home
          </Link>
        </div>
        <div className="ui segment" id="sidebar-segment">
          <i className="user icon"></i>
          <Link to="/profile" style={linkStyle}>
            Profile
          </Link>
        </div>
        <div className="ui segment" id="sidebar-segment">
          <i className="clipboard icon"></i>
          <Link to="/application" style={linkStyle}>
            Pending Application
          </Link>
        </div>
        <div className="ui segment" id="sidebar-segment">
          <i className="keyboard icon"></i>
          <Link to="/coding" style={linkStyle}>
            Coding Round
          </Link>
        </div>
        <div className="ui segment" id="sidebar-segment">
          <i className="desktop icon"></i>
          <Link to="/interview" style={linkStyle}>
            Scheduled Interview
          </Link>
        </div>
        <div className="ui segment" id="sidebar-segment">
          <i className="gift icon"></i>
          <Link to="/offers" style={linkStyle}>
            Offers
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
