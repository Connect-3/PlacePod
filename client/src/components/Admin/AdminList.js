import React, { useEffect } from 'react';
import FeedHeader from '../DashBoard/FeedHeader';
import NavigationBar from '../NavigationBar/NavigationBar';
import { Link } from 'react-router-dom';
import AdminCompanyData from './AdminCompanyData';

const array = [
  {
    companyname: 'amazon',
    role: 'sde',
    date: '2022-21-12',
    ctc: '10000',
    status: 'interview',
    _id: 1234,
  },
];

const AdminList = ({ searchTerm, setSearchTerm, heading, content }) => {
  useEffect(() => {
    if (localStorage.getItem('editAdmin')) {
      localStorage.removeItem('editAdmin');
      localStorage.removeItem('opportunityId');
    }
  });
  const adminData = {
    enrollment: localStorage.getItem('adminNumber'),
  };

  const isValid = (company) => {
    return (
      company.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.ctc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.registrationDate
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      company.EmployeementType.toLowerCase().includes(
        searchTerm.toLowerCase()
      ) ||
      company.companyName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const RenderedList = () => {
    if (array.length === 0) return;

    return array
      .filter((company) => {
        if (searchTerm === '') return company;
        else if (isValid(company)) {
          return company;
        }
      })
      .map((company) => {
        return (
          <AdminCompanyData
            companyName={company.companyname}
            role={company.role}
            ctc={company.ctc}
            status={company.status}
            date={company.date}
            _id={company._id}
          />
        );
      });
  };

  return (
    <div id="admin-list">
      <NavigationBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        studentData={adminData}
      />
      <FeedHeader heading={heading} content={content} />
      <Link to="/adminedit">
        <button className="ui button" id="admin-opportunity">Add Opportunity</button>
      </Link>
      <table className="ui fixed table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>ctc</th>
            <th>Date</th>
            <th>status</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{RenderedList()}</tbody>
      </table>
    </div>
  );
};

export default AdminList;
