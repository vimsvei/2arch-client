import {applyMiddleware, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import reducer from "./reducer";

const logMiddleware = ({ getState }) => (next) => (action) => {
  console.log(action.type, action.payload, getState());
  return next(action);
};

const store = createStore(
  reducer, applyMiddleware(
	thunkMiddleware, logMiddleware));

export default store;
