import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Products from './components/Products';
import store from './store/store';
import Payment from './components/Payment';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <BrowserRouter>
  
  <Routes>
    <Route path="/" element={<App />}/>
    <Route path="/products" element={<Products/>}/>
    <Route path="/payment" element={<Payment/>}/>
  </Routes>
  </BrowserRouter>
  </Provider>
);

