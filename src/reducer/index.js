import {combineReducers} from "redux";
import applicationComponentReducer from "./application-components";
import commonReducer from "./common-reducer";

const reducer = combineReducers({
  applicationComponentReducer,
  commonReducer
});

export default reducer;
