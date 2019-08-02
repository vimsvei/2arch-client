import React from 'react';
import './spinner.css';

const Spinner = () => {
  return (
    <div className="d-flex justify-content-center text-success">
      <div className="spinner-border spinner-custom" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
