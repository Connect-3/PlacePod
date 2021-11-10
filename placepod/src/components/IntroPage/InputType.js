import React from 'react';

const InputType = ({ label, type,val,setVal}) => {
  return (
    <div className="ui field">
      <label>{label}</label>
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
