import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import OurAuthProvider from './context/OurAuthProvider';
import AppProvider from './context/AppProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <OurAuthProvider>
      <AppProvider>
        <App />
      </AppProvider>
    </OurAuthProvider>
  </BrowserRouter>,
);
