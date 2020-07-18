import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';

import './index.css';
import App from './components/App';
import rootReducer from './reducers';

const logger = function({dispatch , getState}){
  return function(next){
    return function(action){
      console.log('ACTION_TYPE' , action.type);
      next(action);
    }
  }
}

const store = createStore(rootReducer , applyMiddleware(logger));

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

