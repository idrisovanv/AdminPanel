import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

const filter = (state = '', action) => {
    switch (action.type) {
        case types.FILTER:
            return action.filter;
        default:
            return state;
    }
};
const accounts = (state = '', action) => {
    switch (action.type) {
        case types.EDIT_ACCOUNT:
            const newObj = {};
            newObj[action.data.id] = action.data;
            return Object.assign({}, state, newObj);
        default:
            return state;
    }
};


const rootReducer = combineReducers({
    accounts,
    filter,
    routing
});

export default rootReducer;
