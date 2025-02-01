import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  console.log(context);

  return (
    <div>
      <h3>History</h3>
      <ul className="list">
  {transactions.map(transaction => (
    <li key={transaction.id} className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{transaction.amount < 0 ? '-' : '+'}${Math.abs(transaction.amount)}</span>
      <button className="delete-btn">x</button>
    </li>
  ))}
</ul>
    </div>
  );
};

export default TransactionList;
