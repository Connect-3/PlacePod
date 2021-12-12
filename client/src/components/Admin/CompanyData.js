import axios from 'axios';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import LeftForm from './LeftForm';
import RightForm from './RightForm';
import './admin.css';

const CompanyData = () => {
  const [company_name, setCompanyName] = useState('');
  const [job_title, setJobTitle] = useState('');
  const [ctc, setCtc] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [cg, setCg] = useState(0);
  const [position_type, setPositionType] = useState('');
  const [job_description, setJobDescription] = useState('');
  const [stage, setStage] = useState('');
  const [_id, setId] = useState();
  let [students, setStudents] = useState([]);
  const [textarea, setTextarea] = useState('');

  useEffect(() => {
    if (!localStorage.getItem('adminNumber')) return (window.location = '/');
  });

  useEffect(() => {
    if (localStorage.getItem('editAdmin')) {
      const response = async () => {
        const obj = JSON.parse(localStorage.getItem('opportunity'));

        const tempArray = await axios.get('/getArray', {
          params: {
            _id: obj._id,
          },
        });
        setStudents(tempArray.data.array);
      };
      response();
    }
  }, [textarea]);
  useEffect(() => {
    if (localStorage.getItem('editAdmin')) {
      const obj = JSON.parse(localStorage.getItem('opportunity'));

      setCompanyName(obj.company_name);
      setJobTitle(obj.job_title);
      setCtc(obj.ctc);
      setDate(obj.date);
      setCategory(obj.category);
      setCg(obj.min_cg);
      setPositionType(obj.position_type);
      setJobDescription(obj.job_description);
      setStage(obj.stage);
      setStudents(obj.students);
      setId(obj._id);
    }
  }, []);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      students = students
        .filter((item) => {
          return item.isChecked === true;
        })
        .map((item) => {
          return { enrollment: item.enrollment, resume: item.resume };
        });
      const obj = {
        company_name,
        job_title,
        ctc,
        min_cg: cg,
        stage,
        category,
        job_description,
        date,
        students,
        position_type,
        _id,
      };
      let response;
      if (localStorage.getItem('editAdmin')) {
        response = await axios.post('/editopportunity', obj);
      } else {
        response = await axios.post('/opportunity', obj);
      }
      if (response.status === 201) {
        alert('successful');
        window.location = '/adminHome';
      } else {
        alert('error');
      }
    } catch (err) {}
  };
  const handleChangeCheckbox = (e) => {
    const { name, checked } = e.target;
    if (name === 'allSelect') {
      let tempArray = students.map((item) => {
        return { ...item, isChecked: checked };
      });
      setStudents(tempArray);
    } else {
      let tempArray = students.map((item) => {
        return item.enrollment === name
          ? { ...item, isChecked: checked }
          : item;
      });
      setStudents(tempArray);
    }
  };

  return (
    <div id="admin-grid">
      <div className="ui secondary menu" id="admin-menu">
        <div className="item">
          <h2 className="header" id="admin-h1">
            <i className="ui file alternate outline icon purple"></i>
            Opportunity Panel
          </h2>
        </div>
        <div className="ui item"></div>
        <div className="right menu">
          <div class="ui label item">
            <Link
              to="/adminHome"
              style={{ fontWeight: 'bolder', color: 'black' }}
            >
              <i
                className="ui home icon large"
                style={{ fontWeight: 'bolder', color: 'black' }}
              ></i>
              Home
            </Link>
          </div>
          <div class="ui label item">
            <i
              className="ui user circle icon large"
              style={{ fontWeight: 'bolder' }}
            ></i>
            {localStorage.getItem('adminNumber')}
          </div>
          <div className="ui item">
            <button
              className="ui button"
              onClick={() => {
                localStorage.clear();
                window.location = '/';
              }}
              style={{ backgroundColor: '#A569BD', color: 'white' }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
      <form className="ui form">
        <div className="ui grid">
          <LeftForm
            setCompanyName={setCompanyName}
            setJobTitle={setJobTitle}
            setCtc={setCtc}
            setDate={setDate}
            setCategory={setCategory}
            setCg={setCg}
            setPositionType={setPositionType}
            setJobDescription={setJobDescription}
            setStage={setStage}
            setStudents={setStudents}
            company_name={company_name}
            job_title={job_title}
            ctc={ctc}
            date={date}
            category={category}
            cg={cg}
            position_type={position_type}
            job_description={job_description}
            stage={stage}
            students={students}
            handleSubmit={handleSubmit}
          />
          {/* {localStorage.getItem('editAdmin') && ( */}
          <RightForm
            handleChangeCheckbox={handleChangeCheckbox}
            students={students}
            _id={_id}
            textarea={textarea}
            setTextarea={setTextarea}
          />
        </div>
      </form>
    </div>
  );
};

export default CompanyData;
