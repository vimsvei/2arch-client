import React from "react";
import PropTypes from 'prop-types';

const SelectorItem = ({caption, sendValue}) => {
  return(
    <div className="dropdown-item row"
         onClick={() => sendValue(caption)}>
      <span className="type-object-caption">{ caption }</span>
    </div>
  );
};

SelectorItem.defaultProps = {
  sendValue: () => {
    console.warn('Empty func');
  }
};

SelectorItem.propTypes = {
  caption: PropTypes.string.isRequired,
  sendValue: PropTypes.func
};

export default SelectorItem;
