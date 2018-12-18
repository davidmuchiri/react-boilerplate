import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import '@babel/polyfill';
import DefaultErrorBoundary from './DefaultErrorBoundary';
import App from './App';
import './styles.css';

if (process.env.NODE_ENV === 'development') {
   const axe = require('react-axe');
   axe(React, ReactDOM, 1000);
}

ReactDOM.render(
   <StrictMode>
      <DefaultErrorBoundary>
         <App />
      </DefaultErrorBoundary>
   </StrictMode>,
   document.getElementById('app')
);
