import React, { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import Feed from '../DashBoard/Feed';

const HomeList = ({
  searchTerm,
  setSearchTerm,
  studentData,
  setStudentData,
  updateStudent,
}) => {
  const [renderedList, setRenderedList] = useState([]);
  const [load, setLoad] = useState(true);
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
        const res = await axios.get('/opportunitiesretrieve', {
          params: {
            enrollment: localStorage.getItem('enrollment'),
            cg: studentData.cg,
          },
        });

        if (res.status === 200) {
          setLoad(false);
          setRenderedList(res.data.opportunities);
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
      heading="Discover Feed"
      content="List of all companies currently visiting campus"
      studentData={studentData}
      setStudentData={setStudentData}
      updateStudent={updateStudent}
      renderedList={renderedList}
      load={load}
    />
  );
};

export default HomeList;
