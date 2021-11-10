import React from 'react';
import './IntroPage.css';

const InputType = ({ label, type, val, setVal }) => {
  return (
    <div className="ui field ">
      <label className="input-type-label">{label}</label>
      <input
        type={type}
        onChange={(e) => {
          setVal(e.target.value);
        }}
        value={val}
      />
    </div>
  );
};

export default InputType;
