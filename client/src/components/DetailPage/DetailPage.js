import React, { useEffect, useState } from 'react';
import '../DetailPage/detailpage.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
const DetailPage = ({
  registrationDate,
  role,
  companyName,
  jobType,
  EmployeementType,
  ctc,
  companyDescription,
  EligibleCourses,
  cg,
  OtherDe,
}) => {
  const data = useLocation();
  const [opp, setOpp] = useState({});
  const [load, setLoad] = useState(true);

  useEffect(() => {
    try {
      const response = async () => {
        const res = await axios.get('/getOpportunityDetail', {
          params: {
            _id: data.state.opportunityId,
          },
        });

        if (res.status === 200) {
          setLoad(false);
          setOpp(res.data.opportunity);
        }
      };
      response();
    } catch (err) {
      console.log(err);
    }
  });

  const isCategory = (category) => {
    if (category === 0) return 'Mass';
    else if (category === 1) return 'Below 10LPA';
    else if (category === 2) return 'Below 20LPA';
    else return 'DREAM';
  };

  if (load) {
    return (
      <div class="ui " style={{ marginTop: '90vh' }}>
        <div class="ui active inverted dimmer">
          <div class="ui text loader">Loading</div>
        </div>
        <p></p>
      </div>
    );
  }

  return (
    <div id="detailpage">
      <div className="cardright">
        <div className="Company-details">
          <h1 className="company-position">{opp.job_title}</h1>
          <div className="company-name">
            <h3>{opp.company_name}</h3>
          </div>
        </div>
      </div>
      <div className="description-company">
        <div className="description-title">Position</div>
        <div className="description">{opp.position_type}</div>
      </div>
      <div className="description-company">
        <div className="description-title">Job Description</div>
        <div className="description">{opp.job_description}</div>
      </div>
      <div className="description-company">
        <div className="description-title">Ctc</div>
        <div className="description">{opp.ctc}</div>
      </div>

      <div className="description-company">
        <div className="description-title">Eligibility Criteria</div>
        <div className="description">Min_cg : {opp.min_cg}</div>
      </div>

      <div className="description-company">
        <div className="description-title">Category</div>
        <div className="description">{isCategory(opp.category)}</div>
      </div>
    </div>
  );
};
export default DetailPage;
