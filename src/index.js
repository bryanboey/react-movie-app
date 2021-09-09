import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom'
// import 'node_modules/react-modal-video/scss/modal-video.scss';
require("dotenv").config()

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
