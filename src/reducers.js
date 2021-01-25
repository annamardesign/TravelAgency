  
import { CHANGE_SELECT, ADD_DROPDOWN_VALUE } from './constants.js';


let selectedValue = ''

let options= [
  {key: 1, 
   text: "Barcelona", 
   value: "barcelona"},

   {key: 2,
   text: "Madrid",
   value: "madrid"}
]

export const optionsReducer = (state=options, action={})=>{
  switch(action.type){
      case ADD_DROPDOWN_VALUE:
          return Object.assign({}, state, {options:action.payload});
      default:
      return state
  } 
}

export const selectedValueReducer = (state=selectedValue, action={}) => {
  console.log(action.type)
    switch(action.type){
        case CHANGE_SELECT:
          return action.payload
        default: 
          return Object.assign({}, state, {selectedValue:action.payload});
    }
}






