import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDIzcFOy0KzOO0cN4m1kBEDeYilp9dBO70",
  authDomain: "coderhouse-ecommerce-e50c0.firebaseapp.com",
  projectId: "coderhouse-ecommerce-e50c0",
  storageBucket: "coderhouse-ecommerce-e50c0.appspot.com",
  messagingSenderId: "448607190606",
  appId: "1:448607190606:web:19a40b59f60586df038d1f"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

reportWebVitals();
