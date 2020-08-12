import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './main/calculator.jsx'
import NumberProvider from './components/NumberProvider'



ReactDOM.render(
  <React.Fragment>
    
    <NumberProvider>
     <Calculator />
    </NumberProvider>

  </React.Fragment>,
  document.getElementById('root')
);


