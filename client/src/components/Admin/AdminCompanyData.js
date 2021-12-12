import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import CompanyData from './CompanyData';

const AdminCompanyData = ({
  companyName,
  role,
  ctc,
  date,
  status,
  _id,
  opportunity,
}) => {
  const deleteOpportunity = async () => {
    try {
      const response = await axios.post('/deleteOpportunity', {
        _id: _id,
      });
      if (response.status === 200) {
        alert('opportunity deleted successfully');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <tr>
      <td>
        <Link to="/companydetail">{companyName}</Link>
      </td>
      <td>{role}</td>
      <td>{ctc}</td>
      <td>{date}</td>
      <td>{status}</td>
      <td>
        <Link to="/adminedit">
          <button
            className="ui button"
            onClick={() => {
              localStorage.setItem('editAdmin', true);
              localStorage.setItem('opportunity', JSON.stringify(opportunity));
            }}
          >
            Edit
          </button>
        </Link>
      </td>
      <td>
        <button className="ui button" onClick={deleteOpportunity}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default AdminCompanyData;
