import {CHANGE_SELECT} from './constants.js';
import {ADD_DROPDOWN_VALUE} from './constants.js';


export const addOptions = (text) => {
    return {
     type: ADD_DROPDOWN_VALUE,
     payload: text
    }
}
export const setSelect = (text) => {
    return {
     type: CHANGE_SELECT,
     payload: text
    }
}