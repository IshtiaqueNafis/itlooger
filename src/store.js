import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {}; // assume inital state to be null in the begining

const middleware = [thunk]; // this is for passing  the middle aware comes in the form of array

const store = createStore(
    rootReducer, // this is the rootReducer where it contains all the reducer
    initialState, // initial state is passed here also as a parameter
    composeWithDevTools(applyMiddleware(...middleware)) // composeWithDevTools --> applyMiddleWare with middleware spread.
);

export default store;