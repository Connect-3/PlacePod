import axios from 'axios';
import React, { useEffect, useState } from 'react';
import LeftForm from './LeftForm';
import RightForm from './RightForm';
import './admin.css';

const CompanyData = () => {
  const [companyData, setCompanyData] = useState({});
  const [array, setArray] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('editAdmin') === true) {
      try {
        const response1 = async () => {
          const res = await axios.get('/getOpportunityDetail', {
            _id: localStorage.getItem('opportunityId'),
          });

          if (res.status === 200) {
            const obj = res;
            setArray(obj.students);
            delete obj.students;
            setCompanyData(obj);
          } else {
            const err = new Error();
            throw err;
          }
        };
        response1();
      } catch (err) {
        console.log(err);
      }
    }
  });

  const arrayData = [
    {
      enrollment: '18103281',
    },
    {
      enrollment: '18103287',
    },
    {
      enrollment: '18103324',
    },
  ];

  useEffect(() => {
    setArray(arrayData);
  }, []);
  const handleChange = (e) => {
    setCompanyData({ ...companyData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const students = array
        .filter((item) => {
          return item.isChecked === true;
        })
        .map((item) => {
          return item.isChecked === true ? item.enrollment : null;
        });
      let response;
      if (localStorage.getItem('editAdmin')) {
        response = await axios.post('/editopportunity', {
          ...companyData,
          students,
        });
        localStorage.removeItem('editAdmin');
        localStorage.removeItem('opportunitId');
      } else {
        response = await axios.post('/opportunity', {
          ...companyData,
          students,
        });
      }
      if (response.status === 201) {
        alert('successful');
        window.location = '/adminHome';
      } else {
        alert('error');
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleChangeCheckbox = (e) => {
    const { name, checked } = e.target;
    if (name === 'allSelect') {
      let tempArray = array.map((item) => {
        return { ...item, isChecked: checked };
      });
      setArray(tempArray);
    } else {
      let tempArray = array.map((item) => {
        return item.enrollment === name
          ? { ...item, isChecked: checked }
          : item;
      });
      setArray(tempArray);
    }
  };

  return (
    <div id="admin-grid">
      <h1 className="header" id="admin-h1">
        Opportunity Panel
      </h1>
      <form className="ui form">
        <div className="ui grid">
          <LeftForm handleChange={handleChange} handleSubmit={handleSubmit} />
          <RightForm
            handleChangeCheckbox={handleChangeCheckbox}
            array={array}
          />
        </div>
      </form>
    </div>
  );
};

export default CompanyData;
