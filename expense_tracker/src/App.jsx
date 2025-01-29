import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';

import './App.css';

const App = () => {
  return (
    <div>
      <Header/>
      <div className='conationer'>
        <Balance/>
        <IncomeExpenses/>
      </div>
    </div>
  )
}

export default App
