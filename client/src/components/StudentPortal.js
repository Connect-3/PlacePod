import React from 'react';
import { Switch,Route } from 'react-router-dom';
import SideBar from './DashBoard/SideBar';
import HomeList from './List/HomeList';
import Coding from './List/Coding';
import InterviewList from './List/InterviewList';
import Offers from './List/Offers';
import Application from './List/Application';
import Profile from './Profile/Profile';
import DetailPage from './DetailPage/DetailPage';


const StudentPortal = ({searchTerm,setSearchTerm,studentData,setStudentData,updateStudent}) => {
  return (
    <div className="ui grid">
      <div className="three wide column">
        <SideBar />
      </div>
      <div className="twelve wide column">
        <Switch>
          <Route path="/home">
            <HomeList
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              studentData={studentData}
              setStudentData={setStudentData}
              updateStudent={updateStudent}
            />
          </Route>
          <Route path="/coding">
            <Coding
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              studentData={studentData}
              setStudentData={setStudentData}
              updateStudent={updateStudent}
            />
          </Route>
          <Route path="/interview">
            <InterviewList
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              studentData={studentData}
              setStudentData={setStudentData}
              updateStudent={updateStudent}
            />
          </Route>
          <Route path="/offers">
            <Offers
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              studentData={studentData}
              setStudentData={setStudentData}
              updateStudent={updateStudent}
            />
          </Route>
          <Route path="/application">
            <Application
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              studentData={studentData}
              setStudentData={setStudentData}
              updateStudent={updateStudent}
            />
          </Route>
          <Route path="/profile">
            <Profile
              studentData={studentData}
              setStudentData={setStudentData}
              updateStudent={updateStudent}
            />
          </Route>
          <Route path="/companydetail">
            <DetailPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default StudentPortal;
