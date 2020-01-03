import React from "react";
import PropTypes from "prop-types";

const SelectItem = ({key, caption, onSelect}) => {
  return(
    <div className="dropdown-item row"
         key={key}
         onClick={() => onSelect()}>
      <span>{caption}</span>
    </div>
  );
};

SelectItem.propTypes = {
  key: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
  onSelect: PropTypes.func
};

export default SelectItem;
