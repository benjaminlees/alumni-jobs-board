
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

const list = (state = ['benji', 'james'], action) => {
    switch (action.type) {
        case types.ADD:
            return action.ADD;
        default:
            return state;
    }
};


const rootReducer = combineReducers({
    list,
    routing
});

export default rootReducer;