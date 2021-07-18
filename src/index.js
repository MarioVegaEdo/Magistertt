import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import './StaticResources/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebaseConfig from './Firebase/firebase-config';
import {FirebaseAppProvider} from 'reactfire';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig} >
      <Suspense fallback={'Connecting to app...'} >
        <App />
      </Suspense>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
