import React from 'react';
import axios from 'axios';
import SearchBar from '../DashBoard/SearchBar';

const LogOut = async () => {
  try {
    const res = await axios.get('/logout', { withCredentials: true });
    if (!res.status === 200) {
      const error = new Error(res.error);
      throw error;
    }
    if (localStorage.getItem('enrollment'))
      localStorage.removeItem('enrollment');

    if (localStorage.getItem('adminNumber'))
      localStorage.removeItem('adminNumber');
    window.location = '/';
  } catch (err) {
    console.log(err);
  }

  window.location = '/';
};

const NavigationBar = ({ searchTerm, setSearchTerm, studentData }) => {
  return (
    <div>
      <div className="ui secondary menu" id="navigation-bar">
        <div className="item">
          <div className="ui icon input">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <i className="search link icon"></i>
          </div>
        </div>
        <div className="right menu purple items" id="logout">
          <div className="item">
            <div className="middle aligned content">
              <div className="header">
                <i className="user outline icon"></i>
                {studentData.enrollment}
              </div>
            </div>
          </div>
          <div className="item">
            <div className="middle aligned content">
              <div className="header">
                <button className="ui button" onClick={LogOut}>
                  logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
