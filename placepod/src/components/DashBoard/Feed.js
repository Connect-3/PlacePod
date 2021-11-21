import React, { useEffect, useState } from 'react';
import CompanyDetail from './CompanyDetail';
import FeedHeader from './FeedHeader';
import './DashBoard.css';
import axios from 'axios';

const Feed = () => {
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
      jobType: 'full Time',
      companyName: 'Coinbase',
    },
    {
      role: 'Software Engineer',
      ctc: '1000',
      registrationDate: '2022-05-03',
      jobType: 'full Time',
      companyName: 'Coinbase',
    },
    {
      role: 'Software Engineer',
      ctc: '1000',
      registrationDate: '2022-05-03',
      jobType: 'full Time',
      companyName: 'Coinbase',
    },
    {
      role: 'Software Engineer',
      ctc: '1000',
      registrationDate: '2022-05-03',
      jobType: 'full Time',
      companyName: 'Coinbase',
    },
  ];
  const RenderedList = () => {
    if (array.length === 0) return <div>Everything is Catch Up</div>;

    return array.map((company) => {
      return (
        <div className="ui middle aligned divided list">
          <CompanyDetail
            canApply={canApply}
            role={company.role}
            ctc={company.ctc}
            registrationDate={company.registrationDate}
            jobType={company.jobType}
            companyName={company.companyName}
            Apply={Apply}
          />
        </div>
      );
    });
  };
  return (
    <div className="ui" id="feed">
      <FeedHeader />
      {RenderedList()}
    </div>
  );
};

export default Feed;
