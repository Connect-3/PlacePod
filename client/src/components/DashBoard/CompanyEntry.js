import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const CompanyEntry = ({
  role,
  companyName,
  EmployeementType,
  ctc,
  registrationDate,
  opportunityId,
  enrollment,
}) => {
  const isValid = () => {
    const givenDate = new Date(registrationDate);
    const today = new Date();
    return givenDate > today ? true : false;
  };


  const AddOpportunity = async () => {
    const res = await axios.post('/opportunityApply', {
      enrollment,
      opportunityId,
    });

    if (res.status === 201) {
      alert('opportunity added');
    } else {
      alert('opportunity not added');
    }
  };

  const isApplyButton = () => {
    if (window.location.pathname === '/home') {
      return (
        <td>
          <button className="ui button" button onClick={AddOpportunity}>
            Apply
          </button>
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

export default CompanyEntry;
