import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import RootReducer from './root/rootReducer'
import RootComponent from './root/rootComponent'

const middleware = store => dispatch => action => {
    console.log(action);
    dispatch(action)
};

const store = createStore(RootReducer, applyMiddleware(middleware));

ReactDOM.render(
  <Provider store={store}>
      <RootComponent />
  </Provider>,
  document.getElementById('fm')
);
