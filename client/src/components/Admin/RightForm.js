import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import './admin.css';

const RightForm = ({
  handleChangeCheckbox,
  students,
  _id,
  textarea,
  setTextarea,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleTextarea = async (e) => {
    try {
      e.preventDefault();
      if (textarea.length === 0) {
        alert('Enter Student Enrollment');
        return;
      }
      const response = await axios.post('/addStudents', { textarea, _id });
      if (response.status === 200) {
        alert('Students Added');
        setTextarea('');
      } else {
        alert('Invalid Input');
      }
    } catch (err) {
      alert('Enter Valid Student Data');
      console.log(err);
    }
  };

  const RenderedList = () => {
    if (students === undefined)
      return (
        <h5 style={{ opacity: '.5' }}>
          No students to select <i className="ui clipboard icon"></i>
        </h5>
      );
    if (students.length === 0)
      return (
        <h5 style={{ opacity: '.5' }}>
          No students to select <i className="ui clipboard icon"></i>
        </h5>
      );
    console.log(students);
    const array1 = students
      .filter((item) => {
        if (searchTerm === '') return item;
        else if (
          item.enrollment.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return item;
        }
      })
      .map((item) => {
        return (
          <div class="field">
            <div class="ui checkbox">
              <input
                type="checkbox"
                checked={item?.isChecked || false}
                name={item.enrollment}
                onChange={handleChangeCheckbox}
              />
              <label>
                <a
                  href={item.resume}
                  target="_blank"
                  style={{ color: 'black' }}
                >
                  {item.enrollment}
                  <i className="file outline icon"></i>
                </a>
              </label>
            </div>
          </div>
        );
      });
    return array1;
  };

  return (
    <div className="ui five wide column" id="admin-right">
      <h1 id="admin-h1">List of Students</h1>
      <div className="ui segment" style={{ overflow: 'auto', maxHeight: 260 }}>
        <div className="grouped field">
          <div class="ui left icon input">
            <input
              type="text"
              placeholder="Search students..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <i class="users icon"></i>
          </div>
          <h4 class="ui dividing header">Select Students to add</h4>

          {students && students.length > 0 && (
            <div class="field">
              <div class="ui checkbox">
                <input
                  type="checkbox"
                  name="allSelect"
                  onChange={handleChangeCheckbox}
                  checked={
                    students
                      ? students.filter((item) => item?.isChecked !== true)
                          .length < 1
                      : false
                  }
                />
                <label>All Select</label>
              </div>
            </div>
          )}
          {RenderedList()}
        </div>
      </div>
      {localStorage.getItem('editAdmin') && (
        <div class="card">
          <div class="content">
            {/* <img class="right floated mini ui image" src="/images/avatar/large/elliot.jpg"> */}
            <h4 class="header">Add Students</h4>
            <div class="description">
              <textarea
                rows="5"
                cols="60"
                placeholder="Enter comma seperated Enrollment"
                value={textarea}
                onChange={(e) => {
                  setTextarea(e.target.value);
                }}
              ></textarea>
            </div>
            <div class="extra content">
              <div class="ui two buttons">
                <h4 class="ui basic grey button" onClick={handleTextarea}>
                  Add
                </h4>
                <h4
                  class="ui basic grey button"
                  onClick={() => setTextarea('')}
                >
                  Discard
                </h4>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RightForm;
