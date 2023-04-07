import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';


function Project({imgSrc, title, slug}) {
  return (
    <li className="project">
      <NavLink to={`/project/${slug}`}>
        <img src={imgSrc} alt="Project img" className="project__img" />
        <h3 className="project__title">{title}</h3>
      </NavLink>
    </li>
  );
}

export default Project;