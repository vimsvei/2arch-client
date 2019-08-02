import * as Types from './action-types';

const applicationComponentCreated = (newApplicationComponent) => {
  return {
    type: Types.APPLICATION_COMPONENT_CREATED,
	payload: newApplicationComponent
  };
};

const anyConst_1 = 0;

export {
  applicationComponentCreated,
  anyConst_1
};
