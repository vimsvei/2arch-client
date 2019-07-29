import React from 'react';

const withChildFunction = (func) => (Wrapped) => {
  return (props) => {
    return(
	  <Wrapped>
		{func}
	  </Wrapped>
	);
  }
};

export default withChildFunction;
