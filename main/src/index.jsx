import React, { useState } from 'react';
import ReactDOM from 'react-dom';//导入single-spa
import Router from './router';
import Container from './Container';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Container/>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)