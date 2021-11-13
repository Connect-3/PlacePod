import React from 'react';
import './DashBoard.css'


const SideBar = () => {
  return (
    <div className="ui grid">
      <div className="row grid">
        <div className="column" id="dashboard-head">
          PlacePod
          <i className="low vision icon dashboard-head-icon"></i>
        </div>
      </div>
      <div className="grid">
        <div className="row dashboard-menu-item">
          <i className="low vision icon"></i>
          DashBoard
        </div>
        <div className="row dashboard-menu-item">
          <i className="low vision icon"></i>
          Profile
        </div>
        <div className="row dashboard-menu-item">
          <i class="low vision icon"></i>
          Resume
        </div>
        <div className="row dashboard-menu-item">
          <i class="low vision icon"></i>
          Application List
        </div>
      </div>
    </div>
  );
};

export default SideBar;
