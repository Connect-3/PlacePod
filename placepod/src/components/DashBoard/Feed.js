import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CompanyDetail from './CompanyDetail';
import FeedHeader from './FeedHeader';
import './DashBoard.css';
import NavigationBar from '../NavigationBar/NavigationBar';
import SearchBar from './SearchBar';

const Feed = ({ searchTerm, setSearchTerm, heading, content }) => {
  useEffect(() => {
    // const response = async ()=>{
    // const data = await axios.get("")
    // }
    // response();
  }, []);

  const Apply = () => {
    const data = axios.post('', {});
    // enrollment and opportunity id
  };
  const [canApply, setCanApply] = useState(true);
  const array = [
    {
      role: 'Software Engineer',
      ctc: '1000',
      registrationDate: '2022-05-03',
      EmployeementType: 'full Time',
      companyName: 'Coinbase',
    },
    {
      role: 'Software Engineer',
      ctc: '1000',
      registrationDate: '2022-05-03',
      EmployeementType: 'full Time',
      companyName: 'Coinbase',
    },
    {
      role: 'Software Engineer',
      ctc: '1000',
      registrationDate: '2022-05-03',
      EmployeementType: 'full Time',
      companyName: 'Coinbase',
    },
    {
      role: 'Software Engineer',
      ctc: '1000',
      registrationDate: '2022-05-03',
      EmployeementType: 'intern',
      companyName: 'Uber',
    },
    {
      role: 'Software Engineer',
      ctc: '1000',
      registrationDate: '2022-05-03',
      EmployeementType: 'intern',
      companyName: 'Uber',
    },
    {
      role: 'Software Engineer',
      ctc: '1000',
      registrationDate: '2022-05-03',
      EmployeementType: 'intern',
      companyName: 'Uber',
    },
    {
      role: 'Software Engineer',
      ctc: '1000',
      registrationDate: '2022-05-03',
      EmployeementType: 'intern',
      companyName: 'Uber',
    },
    {
      role: 'Software Engineer',
      ctc: '1000',
      registrationDate: '2022-05-03',
      EmployeementType: 'intern',
      companyName: 'Uber',
    },
    {
      role: 'Software Engineer',
      ctc: '1000',
      registrationDate: '2022-05-03',
      EmployeementType: 'intern',
      companyName: 'Uber',
    },
    {
      role: 'Software Engineer',
      ctc: '1000',
      registrationDate: '2022-05-03',
      EmployeementType: 'intern',
      companyName: 'Uber',
    },
  ];

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
    if (array.length === 0) return <div>Everything is Catch Up</div>;

    return array
      .filter((company) => {
        if (searchTerm === '') return company;
        else if (isValid(company)) {
          return company;
        }
      })
      .map((company) => {
        return (
          <CompanyDetail
            canApply={canApply}
            role={company.role}
            ctc={company.ctc}
            registrationDate={company.registrationDate}
            EmployeementType={company.EmployeementType}
            companyName={company.companyName}
            Apply={Apply}
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
      <NavigationBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FeedHeader heading={heading} content={content} />
      <table class="ui fixed table">
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
