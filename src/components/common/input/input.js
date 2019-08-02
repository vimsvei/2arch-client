import React, {useState} from 'react';
import PropTypes from 'prop-types';

const Input = ({name, caption, placeholder, value, onChange}) => {
  
  return(
	<div className="form-group">
	  <label htmlFor="input-field" className="col-form-label">
		{caption}
	  </label>
	  <input type="text" className="form-control"
			 name={name}
			 value={value}
			 placeholder={placeholder}
			 onChange={onChange}
			 id="input-field" />
	</div>
  );
};

Input.defaultProps = {
  placeholder: ''
};

Input.propTypes = {
  caption: PropTypes.string.isRequired,
  placeholder: PropTypes.string
};

export default Input;
