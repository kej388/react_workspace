import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyForm from './MyForm';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <MyForm />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
