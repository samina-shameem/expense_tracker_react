import React from 'react';

const AddTransaction = () => {
  return (
    <div>
      <h3>Add new transaction</h3>
      <form >
        <div class="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)}  placeholder='Enter text...'/>
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount<br/>
          (negative - expense, positive-income)
          </label>
          <input type="number" placeholder='Enter amount....'/>
        </div>
        <button class="btn">Add transaction</button>
      </form>
      </div>
  )
}

export default AddTransaction;
