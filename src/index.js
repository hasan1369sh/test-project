import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.rtl.min.css'
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore({
   reducer: {
   },
});
root.render(
   <Provider store={store}>
   <ThemeProvider dir='rtl' >
	   <App />
   </ThemeProvider>
   </Provider>
);

 