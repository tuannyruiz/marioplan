import React from 'react';

const ProjectSummary = ({ project }) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{ project.title }</span>
        <p>Posted by The Net Ninjas</p>
        <p className="gray-text">3rd Septemberm, 2am</p>
      </div>
    </div>
  )
}

export default ProjectSummary;