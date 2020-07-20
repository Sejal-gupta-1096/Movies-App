import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import './index.css';
import AppWrapper from './components/App';
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
export const StoreContext = createContext();

class Provider extends React.Component{
  render(){
    return(
      <StoreContext.Provider value={this.props.store}>
        {this.props.children}
      </StoreContext.Provider>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <AppWrapper />
  </Provider>,
    
  document.getElementById('root')
);
