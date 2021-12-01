import React from 'react';
import SearchBar from '../DashBoard/SearchBar';

const NavigationBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div>
      <div class="ui secondary menu" id="navigation-bar">
        <div class="item">
          <div class="ui icon input">
            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <i class="search link icon"></i>
          </div>
        </div>
        <div class="right menu purple items" id="logout">
          <div class="item">
            <div class="middle aligned content">
              <div class="header">
                <i class="user outline icon"></i>
                Suryansh Singh
                <select
                  style={{
                    background: 'transparent',
                    border: 'none',
                    padding: '0px',
                    width: '20px',
                    outline: 'none',
                  }}
                >
                  <option></option>
                  <option>Logout</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
