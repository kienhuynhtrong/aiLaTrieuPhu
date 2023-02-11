import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/index'

const store = createStore(rootReducer, applyMiddleware(thunk));
export default store