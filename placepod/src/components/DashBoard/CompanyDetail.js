import axios from 'axios';
import React from 'react';

const CompanyDetail = ({
  role,
  companyName,
  jobType,
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

  return (
    <div>
      <div className="ui card fluid" id="company-detail">
        <div className="content">
          <div className="header">{role}</div>
          <div className="meta">
            <span className="category">{companyName}</span>
            <span>|</span>
            <span>Location</span>
            <a href="#">
              <i className="location arrow icon"></i>
            </a>
          </div>
          <div class="description">
            <div className="ui grid">
              <div className="twelve wide column">Job Type: {jobType}</div>
              <div className="twelve wide column">CTC: {ctc}</div>
            </div>
          </div>
        </div>
        <div className="extra content">
          <div className="right floated author">{showDate()}</div>
          <div
            className="left floated author button"
            style={{ cursor: 'pointer', fontWeight: 'bold', color: 'violet' }}
            onClick={() => {
              Apply();
            }}
          >
            Apply
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyDetail;
