import React from 'react';
//place holder for year toggle
const Toggle = ({ label, name, value, onClick }) => {
  let className = "btn";

  if (value) {
    className = 'btn-primary';
  }

  return (
    <button className={className} onCLick={() => onClick(name, !value)}>
      {label}
    </button>
  );

};

export default Toggle;