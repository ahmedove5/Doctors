import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="col-lg-3">
      <div className="card">
        <div className="card-header">
          Doctors
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <Link to="/booking?doctor=1">
              Doctor 1
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/booking?doctor=2">
              Doctor 2
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/booking?doctor=3">
              Doctor 3
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
