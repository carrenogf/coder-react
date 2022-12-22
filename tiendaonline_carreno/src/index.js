import React from 'react';
import ReactDOM from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import { CartContextProvider } from "./Context/CartContext";
import './index.css';
import reportWebVitals from './reportWebVitals';
import { router } from './router';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1smxKaccsxiQ4K8QhKrmsheDzRPJ7_bg",
  authDomain: "coder-ecomerce-8d868.firebaseapp.com",
  projectId: "coder-ecomerce-8d868",
  storageBucket: "coder-ecomerce-8d868.appspot.com",
  messagingSenderId: "627956897629",
  appId: "1:627956897629:web:0573e88f5b18b9878abab4"
};

// Initialize Firebase
initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartContextProvider>
      <RouterProvider router={router} />
    </CartContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
