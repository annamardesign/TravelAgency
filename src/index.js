import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store';
import { fetchPosts } from './redux/actions';
import './index.css';

store.dispatch(fetchPosts())

ReactDOM.render(
  <BrowserRouter>
  <Provider store={ store }>
    <App />
    </Provider>
     </BrowserRouter>,
  document.getElementById('root')
);


