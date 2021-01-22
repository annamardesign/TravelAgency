  
import { combineReducers } from 'redux';
import {CHANGE_SELECT} from './constants.js';
import {ADD_DROPDOWN_VALUE} from './constants.js';



let options= [
  {key: 1, 
   text: "Barcelona", 
   value: "this is the event value"},

   {key: 2,
   text: "Madrid",
   value: "value of option 2"}
]

const optionsReducer = (state=options, action)=>{
  switch(action.type){
      case ADD_DROPDOWN_VALUE:
          return [...state, action.payload]
      default:
      return state
  } 
}

const selectedValueReducer = (state="", action) => {
    switch(action.type){
        case CHANGE_SELECT:
          return action.payload;
        default: 
          return state;
    }
}

const connectReducer = (state= "connected", action) =>{
  switch(action.type){
      default:
      return state
  }
}

const reducers ={
  connected: connectReducer,
  options: optionsReducer,
  selectedValue: selectedValueReducer
 }

export default combineReducers(reducers)