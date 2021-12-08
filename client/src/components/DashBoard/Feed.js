import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CompanyEntry from './CompanyEntry';
import FeedHeader from './FeedHeader';
import './DashBoard.css';
import NavigationBar from '../NavigationBar/NavigationBar';

const Feed = ({
  searchTerm,
  setSearchTerm,
  heading,
  content,
  studentData,
  setStudentData,
  updateStudent,
  renderedList,
}) => {
  const [array, setArray] = useState([]);
  useEffect(() => {
    setArray(renderedList);
  }, [setArray, renderedList]);



  const [canApply, setCanApply] = useState(true);

  const isValid = (company) => {
    console.log(searchTerm);
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
          <CompanyEntry
            canApply={canApply}
            role={company.job_title}
            ctc={company.ctc}
            registrationDate={company.date}
            EmployeementType={company.position_type}
            companyName={company.company_name}
            opportunityId={company._id}
            enrollment={studentData.enrollment}
          />
        );
      });
  };

  const isActionTd = () => {
    if (window.location.pathname === '/home') {
      return <th>Action</th>;
    }
    return null;
  };

  const isRegistrationTd = () => {
    if (window.location.pathname === '/home') {
      return <th>Registration Date</th>;
    }
    if (window.location.pathname === '/coding')
      return <th>Coding Test Date</th>;

    if (window.location.pathname === '/interview')
      return <th> Interview Date</th>;
    return null;
  };
  return (
    <div className="ui" id="feed">
      <NavigationBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        studentData={studentData}
      />
      <FeedHeader heading={heading} content={content} />
      <table className="ui fixed table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>ctc</th>
            {isRegistrationTd()}
            {isActionTd()}
          </tr>
        </thead>
        <tbody>{RenderedList()}</tbody>
      </table>
    </div>
  );
};

export default Feed;
