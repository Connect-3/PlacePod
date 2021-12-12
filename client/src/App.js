import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import IntroPage from './components/IntroPage/IntroPage';
import StudentPortal from './components/StudentPortal';
import AdminPortal from './components/AdminPortal';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [studentData, setStudentData] = useState({});
  const [adminId, setAdminId] = useState(
    localStorage.getItem('adminId') ? localStorage.getItem('adminId') : 0
  );

  const updateStudent = (data) => {
    setStudentData(data);
  };

  const isPortal = () => {
    if (
      window.location.pathname === '/adminHome' ||
      window.location.pathname === '/adminedit'
    ) {
      return (
        <AdminPortal searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      );
    } else
      return (
        <StudentPortal
          studentData={studentData}
          setStudentData={setStudentData}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          updateStudent={updateStudent}
        />
      );
  };

  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <IntroPage setAdminId={setAdminId} adminId={adminId} />
        </Route>
        {isPortal()}
      </Switch>
    </Router>
  );
};

export default App;
