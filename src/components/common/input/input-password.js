import React from "react";

const InputPassword = (id, title, placeholder) => {
  return(
    <div className="form-group">
      <label htmlFor={id}>{title}</label>
      <input className="form-control"
             type="password"
             id={id}
             placeholder= {placeholder}/>
    </div>
  );
};

export default InputPassword;
