import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Test from './Test';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import counter from './utils/counter';

const store = createStore(counter);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <Test />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
