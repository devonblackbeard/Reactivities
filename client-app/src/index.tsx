import React from 'react';
import ReactDOM from 'react-dom';
import 'react-calendar/dist/Calendar.css';
import 'react-toastify/dist/ReactToastify.min.css';
import './app/layout/styles.css';
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';
import 'semantic-ui-css/semantic.min.css'
import { store, StoreContext } from './app/stores/store';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';


export const history = createBrowserHistory();


ReactDOM.render(
  <StoreContext.Provider value={store}>
    <Router history={history}>
     <App/>
    </Router>

  </StoreContext.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();