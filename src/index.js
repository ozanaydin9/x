import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home/Home";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
          <Layout />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
