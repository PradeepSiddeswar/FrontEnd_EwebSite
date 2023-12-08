// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Provider } from 'react-redux';
// import store from './store/store';
// import { messaging } from './firebase';

// messaging.useServiceWorker(registration);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//     <App />
//     </Provider>
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store/store';
// import { messaging } from './firebase';
import { messaging } from './Accounts/firebase';
// import Notify from './Accounts/Notify';

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/firebase-messaging-sw.js')
    .then((registration) => {
      messaging.useServiceWorker(registration);
    })
    .catch((error) => {
      console.error('Service worker registration failed:', error);
    });
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      {/* <Notify/> */}
    </Provider>
  </React.StrictMode>
);

reportWebVitals();

