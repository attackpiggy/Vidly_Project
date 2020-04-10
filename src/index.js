import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
//import Counters from "./components/counters"
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css'

import Movies from './components/movies';

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
