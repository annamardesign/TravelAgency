import {CHANGE_SELECT} from './constants.js';
import {ADD_DROPDOWN_VALUE} from './constants.js';


export const addOptions = (event, data) => {
    const addedOptions = {key: data.value, 
        text: data.value, 
        value: data.value}
    return {
     type: ADD_DROPDOWN_VALUE,
     payload: addedOptions
    }
}
export const setSelect = (event, data) => {
    return {
     type: CHANGE_SELECT,
     payload: data.value
    }
}