import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import App from './components/app.jsx';
import colorsMiddleware from './middleware/colors.js';
import colorsReducer from './reducers/colors.js';

const rootMiddleware = [
  colorsMiddleware,
];

const rootReducer = combineReducers({
  colors: colorsReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(
    ...rootMiddleware,
  ),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.querySelector('#root'),
);
