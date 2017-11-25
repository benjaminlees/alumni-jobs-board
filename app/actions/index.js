import * as types from './types';

export function switchList(list) {
    return {
        type: types.SWITCH_LIST,
        list
    }
}