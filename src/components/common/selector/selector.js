import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import SelectorItem from "./selector-item";
import './selector.css';

const DropdownHeader = ({header}) => {
  return(
    <h6 className="dropdown-header">{header}</h6>
  );
};

const Selector = ({name, caption, value, data, header, onChange}) => {
  const [select, setSelect] = useState(value);
  
  const selectorValue = (value) => setSelect(value);
  
  const showHeader = header ? <DropdownHeader header={header}/> : null;
  
  return(
    <div className="form-group">
      <label htmlFor="input-selector" className="col-form-label">
        {caption}
      </label>
      <div className="input-group">
        <input
          className="form-control"
          name={name}
          onChange={onChange}
          value={select}
          placeholder={select}
          type="text"
          id="input-selector"
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
            type="button" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false"
          >
            <span className="sr-only">
              Toggle Dropdown
            </span>
          </button>
          <div className="dropdown-menu">
            {showHeader}
            {
              data.map((item) => {
                return(
                  <div className="dropdown-item"
                       key={item.id.toString()}>
                    <SelectorItem
                      caption={item.name}
                      sendValue={selectorValue}/>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
};

Selector.propTypes = {
  caption: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  header: PropTypes.string
};

export default Selector;
