import React from 'react';
import ReactDOM from 'react-dom';
import Stopwatch from './components/stopwatch'
import './styles/main.css'

ReactDOM.render(
    <React.StrictMode>
        <Stopwatch />
    </React.StrictMode>,
    document.getElementById('root')
);