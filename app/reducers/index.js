
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

const companies = (state = ['mono', 'cram'], action) => {
    switch (action.type) {
        case types.ADD_COMPANY:
          return [...state, action.company ];
        default:
            return state;
    }
};

const users = (state = ['david', 'james', 'karl'], action) => {
    switch (action.type) {
        case types.ADD_USER:
            return [...state, action.user];
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    companies,
    users,
    routing
});

export default rootReducer;