import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Feed from './components/DashBoard/Feed';
import FeedHeader from './components/DashBoard/FeedHeader';
import SideBar from './components/DashBoard/SideBar';
import Profile from './components/Profile/Profile';
import DetailPage from './components/DetailPage/DetailPage';
import IntroPage from './components/IntroPage/IntroPage';
import NavigationBar from './components/NavigationBar/NavigationBar';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <IntroPage />
        </Route>
      </Switch>
      {window.location.pathname !== '/' && (
        <div className="ui grid">
          <div className="three wide column">
            <SideBar />
          </div>
          <div className="twelve wide column">
            <Switch>
              <Route path="/home">
                <Feed
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  heading="Discover Feed"
                  content="List of all companies currently visiting campus"
                />
              </Route>
              <Route path="/coding">
                <Feed
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  heading="Coding Round"
                  content="Coding Round Scheduled for You"
                />
              </Route>
              <Route path="/interview">
                <Feed
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  heading="Interview"
                  content="Interview Scheduled for You"
                />
              </Route>
              <Route path="/offers">
                <Feed
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  heading="Offers"
                  content="List of Offers you have received"
                />
              </Route>
              <Route path="/application">
                <Feed
                  searchTerm={searchTerm}
                  setSearchTerm={setSearchTerm}
                  heading="Application"
                  content="Pending application status"
                />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/companydetail">
                <DetailPage />
              </Route>
            </Switch>
          </div>
        </div>
      )}
    </Router>
  );
};

export default App;
