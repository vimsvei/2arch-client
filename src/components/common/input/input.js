import React from "react";
import PropTypes from "prop-types";

const Input = ({id, title, placeholder, onChange}) => {
  return(
    <div className="form-group">
      <label htmlFor={id}>{title}</label>
      <input className="form-control"
             type="text"
             placeholder= {placeholder}
             onChange={onChange}
             id={id}/>
    </div>
  );
};

Input.defaultProps = {
  placeholder: '',
  onChange: () => {}
};

Input.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func
};

export default Input;
