import * as types from './types';

export function addCompany(company) {
    return {
        type: types.ADD_COMPANY,
        company
    };
}

export function addUser(user) {
    return {
        type: types.ADD_USER,
        user
    };
}

export function switchList(list) {
    return {
        type: types.SWITCH_LIST,
        list
    }
}