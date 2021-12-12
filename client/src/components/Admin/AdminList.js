import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AdminCompanyData from './AdminCompanyData';
import axios from 'axios';

const AdminList = ({ searchTerm, setSearchTerm, heading, content, stage }) => {
  const [array, setArray] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem('adminNumber')) window.location = '/';
  });
  useEffect(() => {
    try {
      const response = async () => {
        const res = await axios.get('/getOpportunitiesAdmin');
        if (res.status === 200) {
          setLoad(false);
          setArray(res.data);
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
      <div className="ui secondary menu" id="admin-menu ">
        <div className="ui item">
          <div class="ui right labeled input">
            <label for="search" class="ui label">
              <i className="ui search icon"></i>
            </label>
            <input
              className="admin-search"
              type="text"
              autoComplete="off"
              id="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div class="ui basic label">Search</div>
          </div>
        </div>
        <div className="right menu">
          <div class="ui label item">
            <i className="ui user circle icon large"></i>
            {localStorage.getItem('adminNumber')}
          </div>
          <div className="ui item">
            <button
              className="ui button"
              onClick={() => {
                localStorage.clear()((window.location = '/'));
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <h2 class="ui header">
        <i class="file alternate outline icon"></i>
        <div class="content">
          {heading}
          <div class="sub header">{content}</div>
        </div>
      </h2>
      <Link to="/adminedit">
        <button class="ui labeled icon button" id="admin-opportunity">
          <i class="add icon"></i>
          Add
        </button>
      </Link>
      <div className="ui grid" id="admin-table">
        <table className="ui fixed table">
          <thead
            id="admin-thead"
            style={{
              position: 'sticky',
              top: '0',
              zIndex: '2',
              backgroundColor: '#566573',
            }}
          >
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
          {load && (
            <div id="loading">
              <div id="loader"></div>
              <p>Loading</p>
            </div>
          )}
        </table>
      </div>
    </div>
  );
};

export default AdminList;
