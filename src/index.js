import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware  from 'redux-thunk';
import  { optionsReducer, selectedValueReducer } from "./redux_test/reducers";
import './index.css';
import App from './App';


const rootReducer = combineReducers({
  optionsReducer,
  selectedValueReducer
});

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <BrowserRouter>
  <Provider store={store}>
    <App />
    </Provider>
     </BrowserRouter>,
  document.getElementById('root')
);


