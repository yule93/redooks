import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import ToDosProvider from "./todoContext";

ReactDOM.render(
  <ToDosProvider>
    <App />
  </ToDosProvider>,
  document.getElementById('root')
);

