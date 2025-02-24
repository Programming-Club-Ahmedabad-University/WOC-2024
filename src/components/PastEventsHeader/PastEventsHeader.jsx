import React from 'react';
import { Link } from 'react-router-dom';
import './PastEventsHeader.css';

const PastEventsHeader = () => {
  return (
    <header className="past-events-header">
      <div className="back-link">
        <Link to="/" className="back-button">Back</Link>
      </div>
      <div className="title-container">
        <h1 className="header-title">PAST EVENTS</h1>
      </div>
    </header>
  );
};

export default PastEventsHeader;
