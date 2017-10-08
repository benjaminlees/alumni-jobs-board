import * as types from './types';

export function add(elem) {
    return {
        type: types.ADD,
        elem
    };
}