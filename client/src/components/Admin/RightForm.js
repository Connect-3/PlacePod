import React from 'react';
import { useState, useEffect } from 'react';
import './admin.css';

const RightForm = ({ handleChangeCheckbox, students }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const RenderedList = () => {
    if (students === undefined) return;
    if (students.length === 0) return;
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
              <label>{item.enrollment}</label>
            </div>
          </div>
        );
      });
    return array1;
  };
  return (
    <div className="ui five wide column" id="admin-right">
      <h1>List of Students</h1>
      <div className="ui segment" style={{ overflow: 'auto', maxHeight: 400 }}>
        <div className="grouped field">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
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
    </div>
  );
};

export default RightForm;
