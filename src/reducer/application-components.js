import * as Types from '../actions/action-types';

const initialState = {
  applicationComponentList: [],
  needToSave: false
};

const applicationComponentReducer = (state = initialState, action) => {
  // const {applicationComponentList: {appComponents}} = state;
  // const newAppComponents = appComponents.push(action.payload);
  
  switch (action.type) {
	case Types.APPLICATION_COMPONENT_CREATED:
	  return {
	    ...state,
		applicationComponentList: [...state.applicationComponentList, action.payload],
		needToSave: true
	  };
	default:
	  return state;
  }
};

export default applicationComponentReducer;

