import * as Types from 'action-types';

const itemSelected = (caption) => {
  return {
    type: Types.ITEM_SELECTED,
	payload: caption
  };
};

export {
  itemSelected
}
