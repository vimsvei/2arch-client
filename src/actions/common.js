import * as Types from './action-types';

const itemSelected = (caption) => {
  return {
    type: Types.ITEM_SELECTED,
	payload: caption
  };
};

const anyConst_2 = 0;

export {
  itemSelected,
  anyConst_2
};
