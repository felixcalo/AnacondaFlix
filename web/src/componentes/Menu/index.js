/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import ButtonLink from '../ButtonLink';
import './menu.css';

export default function Menu({ title, link }) {
  return (
    <div className="Menu">
      <Link to="/">
        <img
          src="https://fontmeme.com/permalink/200813/36457a01ad9669d2bbf6937a926df0cf.png"
          alt="netflix-font"
          border="0"
          className="Logo"
        />
      </Link>
      <Link to={link}>
        <ButtonLink title={title} />
      </Link>
    </div>
  );
}
