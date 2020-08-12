/* eslint-disable react/prop-types */
import React from 'react';
import './buttonlink.css';

function ButtonLink({ title }) {
  // eslint-disable-next-line react/destructuring-assignment
  return (
    <button type="button" className="ButtonLink">
      {title}
    </button>
  );
}

export default ButtonLink;
