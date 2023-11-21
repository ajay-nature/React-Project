import React from 'react';

const Employee = ({ employee, onDelete }) => {
  const { name, position, salary } = employee;

  return (
    <div >
      <div >
        <p>{name}</p>
        <p>{position}</p>
        <p>${salary}</p>
      </div>
      <button onClick={() => onDelete(employee)}>
        Delete
      </button>
    </div>
  );
};

export default Employee;