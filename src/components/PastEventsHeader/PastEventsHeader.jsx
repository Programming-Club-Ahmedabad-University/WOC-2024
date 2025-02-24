import React from 'react';
import './PastEventsHeader.css';

const PastEventsHeader = () => {
  return (
    <header className="past-events-header">
      <div className="header-content">

        <Link to="/" className="back-button">
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M19 12H5M12 19l-7-7 7-7" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
          <span>Back</span>
        </Link>


        <h1 className="header-title">PAST EVENTS</h1>
      </div>
    </header>
  );
};

export default PastEventsHeader;
