import React from 'react';
import ReactDOM from 'react-dom';
import './styles/App.css';
import App from './App';
import { getCLS, getFCP, getFID, getLCP, getTTFB } from 'web-vitals';

ReactDOM.render(<App />, document.getElementById('root'));
getCLS(console.log);
getFCP(console.log);
getFID(console.log);
getLCP(console.log);
getTTFB(console.log);