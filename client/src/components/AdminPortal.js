import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AdminList from './Admin/AdminList';
import CompanyData from './Admin/CompanyData';

const AdminPortal = ({ searchTerm, setSearchTerm }) => {
  return (
    <Switch>
      <Route path="/adminHome">
        <AdminList
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          heading="List of Entry"
          content="here is the list of all the entries"
        />
      </Route>
      <Route path="/adminedit">
        <CompanyData />
      </Route>
      <Route></Route>
    </Switch>
  );
};

export default AdminPortal;
