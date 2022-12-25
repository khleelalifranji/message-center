import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import ContantReducer from "./Reducers/ContactReducer";

const reducers = combineReducers({
    ContantReducer: ContantReducer
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store