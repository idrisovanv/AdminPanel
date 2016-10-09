import * as types from './types';

export function filterAccounts(filter) {
    return {
        type: types.FILTER,
        filter
    };
}

export function editAccount(data) {
    return {
        type: types.EDIT_ACCOUNT,
        data
    };
}
