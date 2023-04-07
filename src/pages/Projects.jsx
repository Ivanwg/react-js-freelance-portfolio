import React from 'react';
import Project from '../сomponents/project/Project';
import { projectsArr } from './../helpers/projectsList';



function Projects() {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {
            projectsArr.map(projectObj => {
              return <Project key={projectObj.id} title={projectObj.title} imgSrc={projectObj.imgSrc} slug={projectObj.slug}  />
            })
          }
        </ul>
      </div>
    </main>
  );
}

export default Projects;