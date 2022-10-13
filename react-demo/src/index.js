import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import todoApp from './redux/reducers'
import App from './App';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
let store = createStore(todoApp);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
