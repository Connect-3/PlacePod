import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Feed from '../DashBoard/Feed';

const Application = ({
  searchTerm,
  setSearchTerm,
  studentData,
  setStudentData,
  updateStudent,
}) => {
  const [renderedList, setRenderedList] = useState([]);

  useEffect(() => {
    try {
      const response = async () => {
        const res = await axios.get('/feed', { withCredentials: true });
        if (res.data === 'token undefined') window.location = '/';
        if (!res.status === 200) {
          window.location = '/';
          const error = await new Error(res.error);
          console.log(error);
          throw error;
        }
        updateStudent(res.data);
      };
      response();
    } catch (err) {
      window.location = '/';
    }
  }, [updateStudent]);

  useEffect(() => {
    const response = async () => {
      try {
        const res = await axios.get('/applicationretrive', {
          params: {
            enrollment: localStorage.getItem('enrollment'),
            cg: studentData.cg,
          },
        });

        if (res.status === 200) {
          setRenderedList(res.data);
          console.log(res.data);
        } else {
          console.log('error');
        }
      } catch (err) {
        console.log(err);
      }
    };

    response();
  }, [studentData]);

  return (
    <Feed
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      heading="Application Round"
      content="Pending Applications"
      studentData={studentData}
      setStudentData={setStudentData}
      updateStudent={updateStudent}
      renderedList={renderedList}
    />
  );
};

export default Application;
