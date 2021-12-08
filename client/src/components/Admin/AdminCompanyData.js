import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

const AdminCompanyData = ({ companyName, role, ctc, date, status, _id }) => {
  const deleteOpportunity = async () => {
    try {
      const response = await axios.post('', {
        _id: _id,
      });

      if (response === 200) {
        window.location = '/adminHome';
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
          {' '}
          <button
            className="ui button"
            onClick={() => {
              localStorage.setItem('editAdmin', true);
              localStorage.setItem('opportunityId', { _id });
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
