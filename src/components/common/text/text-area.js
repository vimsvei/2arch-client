import React from 'react';
import PropTypes from 'prop-types';

const TextArea = ({caption, rows}) => {
  return(
	<div className="form-group mx-1">
	  <label htmlFor="input-field" className="col-form-label">
		{caption}
	  </label>
	  <textarea
		className="form-control"
		rows={rows}
		id="input-field"
	  />
	</div>
  );
};

TextArea.defaultProps = {
  rows: "3"
};

TextArea.propTypes = {
  caption: PropTypes.string.isRequired,
  rows: PropTypes.string
};

export default TextArea;
