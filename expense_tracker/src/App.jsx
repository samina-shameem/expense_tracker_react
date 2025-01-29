import React from 'react';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/AddTransactionList';

import './App.css';
import AddTransaction from './components/AddTransaction';

const App = () => {
  return (
    <div>
      <Header/>
      <div className='conationer'>
        <Balance/>
        <IncomeExpenses/>
        <TransactionList/>
        <AddTransactionList/>
      </div>
    </div>
  )
}

export default App
