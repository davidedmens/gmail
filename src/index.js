import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reducer,{initialState} from './reducer';
import { StateProvider } from './StateProvider';
import { Provider } from 'react-redux';
import store from './store'; // Import the Redux store


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <App />
  </Provider>

);


