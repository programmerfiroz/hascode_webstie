import React from 'react';
import './Breadcrumb.css';

const Breadcrumb = ({ path }) => {
  return (
    <div className="company-stats">
          <div className="stat-box">
            <span className="stat-value">200+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-box">
            <span className="stat-value">50+</span>
            <span className="stat-label">Team Members</span>
          </div>
          <div className="stat-box">
            <span className="stat-value">98%</span>
            <span className="stat-label">Client Satisfaction</span>
          </div>
          <div className="stat-box">
            <span className="stat-value">15+</span>
            <span className="stat-label">Industry Awards</span>
          </div>
        </div>
  );
};

export default Breadcrumb;
