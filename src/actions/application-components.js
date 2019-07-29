import * as Types from 'action-types';

export const applicationComponentCreated = (newApplicationComponent) => {
  return {
    type: Types.APPLICATION_COMPONENT_CREATED,
	payload: newApplicationComponent
  };
};
