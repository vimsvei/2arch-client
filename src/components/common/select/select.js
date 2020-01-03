import React, { useState } from "react";
import SelectItem from "./select-item";
import { shortId } from "../../../utils";

const Select = ({id, title, data, placeholder, value}) => {
  const [select, setSelect] = useState(value);
  
  const selectItem = (item) => setSelect(item);
  
  return(
    <div className="form-group">
      <label htmlFor={id}>{title}</label>
      <input className="form-control"
             type="text"
             value={select}
             placeholder={placeholder}
             id={id}/>
      <div className="dropdown-menu"
           aria-labelledby={id}>
        {
          data.map((item) => {
            return(
              <SelectItem caption={item.name}
                          key={item.id.toString()}
                          onSelect={selectItem}/>
              )
          })
        }
      </div>
    </div>
  );
};

Select.defaultProps = {
  id: shortId()
};

Select.propTypes = {};

export default Select;
