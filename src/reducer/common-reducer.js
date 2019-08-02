import * as Types from '../actions/action-types';

const commonReducer = (state, action) => {
  if (state === undefined) {
    return {
    
	};
  }
  switch (action.type) {
	case Types.ITEM_SELECTED:
	  return {
	  
	};
	default: state;
  }
  
};
export default commonReducer;
