import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const CompanyDetail = ({
  role,
  companyName,
  EmployeementType,
  ctc,
  registrationDate,
  Apply,
}) => {
  const isValid = () => {
    const givenDate = new Date(registrationDate);
    const today = new Date();
    return givenDate > today ? true : false;
  };

  const showDate = () => {
    if (isValid()) return `registration till: ${registrationDate}`;
    else return 'registration ends';
  };

  const isApplyButton = () => {
    console.log('debug');
    if (window.location.pathname === '/home') {
      return (
        <td>
          <button className="ui button">Apply</button>
        </td>
      );
    }
    return null;
  };

  const isDate = () => {
    if (
      window.location.pathname === '/home' ||
      window.location.pathname === '/coding' ||
      window.location.pathname === '/interview'
    ) {
      return <td>{registrationDate}</td>;
    }

    return null;
  };

  return (
    <tr>
      <td>
        <Link to="/companydetail">{companyName}</Link>
      </td>
      <td>{role}</td>
      <td>{ctc}</td>
      {isDate()}
      {isApplyButton()}
    </tr>
  );
};

export default CompanyDetail;
