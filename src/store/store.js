import {createStore,applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import PostsReducer from "./reducers/PostReducer";

const store = createStore(PostsReducer,applyMiddleware(thunk));

export default store;