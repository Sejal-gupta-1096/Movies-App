import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {Provider} from 'react-redux';
import './index.css';
import App from './components/App';
import rootReducer from './reducers';

// const logger = function({dispatch , getState}){
//   return function(next){
//     return function(action){
//       //console.log('ACTION_TYPE' , action.type);
//       next(action);
//     }
//   }
// }

const store = createStore(rootReducer , applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
    
  document.getElementById('root')
);
