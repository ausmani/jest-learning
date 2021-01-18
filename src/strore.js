import {createStore , applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import CombinedReducer from "./Reducers/combineReducers";

const Store = createStore(CombinedReducer,applyMiddleware(thunk));

export default Store;