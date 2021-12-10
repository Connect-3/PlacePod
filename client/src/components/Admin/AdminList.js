import React, { useEffect, useState } from 'react';
import FeedHeader from '../DashBoard/FeedHeader';
import NavigationBar from '../NavigationBar/NavigationBar';
import { Link } from 'react-router-dom';
import AdminCompanyData from './AdminCompanyData';
import axios from 'axios';

const AdminList = ({ searchTerm, setSearchTerm, heading, content, stage }) => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem('adminNumber')) window.location = '/';
  });
  useEffect(() => {
    try {
      const response = async () => {
        const res = await axios.get('/getOpportunitiesAdmin');
        if (res.status === 200) {
          setArray(res.data);
          console.log(array);
        }
      };

      response();
    } catch (err) {
      console.log(err);
    }
  });
  useEffect(() => {
    if (localStorage.getItem('editAdmin')) {
      localStorage.removeItem('editAdmin');
      localStorage.removeItem('opportunity');
    }
  });
  const adminData = {
    enrollment: localStorage.getItem('adminNumber'),
  };

  const isStatus = (company) => {
    if (company.stage === '0') return 'Application';
    else if (company.stage === '1') return 'Coding Round';
    else if (company.stage === '2') return 'Interview Round';
    else if (company.stage === '3') return 'Offer';
  };

  const isValid = (company) => {
    return (
      company.job_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.ctc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.date.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.job_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      company.company_name.toLowerCase().includes(searchTerm.toLowerCase())
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
            companyName={company.company_name}
            stage={company.stage}
            role={company.job_title}
            ctc={company.ctc}
            date={company.date}
            _id={company._id}
            status={isStatus(company)}
            opportunity={company}
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
        <button className="ui button" id="admin-opportunity">
          Add Opportunity
        </button>
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
        <tbody style={{ overflow: 'auto', maxHeight: 400 }}>
          {RenderedList()}
        </tbody>
      </table>
    </div>
  );
};

export default AdminList;
