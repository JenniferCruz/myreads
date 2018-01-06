import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import $ from 'jquery'
window.jQuery = $;
global.Tether = require('tether')
import 'bootstrap/dist/css/bootstrap.min.css';
require('bootstrap/dist/js/bootstrap.min');
// require('bootstrap');

ReactDOM.render(<App />, document.getElementById('root'))
