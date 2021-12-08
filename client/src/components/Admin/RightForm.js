import React from 'react';
import { useState } from 'react';
import './admin.css';

const RightForm = ({ handleChangeCheckbox, array }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const RenderedList = () => {
    if (array.length === 0) return;

    return array
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
          <div class="field">
            <div class="ui checkbox">
              <input
                type="checkbox"
                name="allSelect"
                onChange={handleChangeCheckbox}
                checked={
                  array.filter((item) => item?.isChecked !== true).length < 1
                }
              />
              <label>All Select</label>
            </div>
          </div>
          {RenderedList()}
        </div>
      </div>
    </div>
  );
};

export default RightForm;
