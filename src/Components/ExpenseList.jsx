import React from 'react';

function ExpenseList({ expenses, deleteExpense }) {
  return (
    <div className="container">
      <div className="expense-list">
  <h2>Expense List</h2>

  {expenses.map((item) => (
    <div className="list-item expense" key={item.id}>
      <span>{item.name}</span>
      <span>₹{item.amount}</span>
    </div>
    
  ))}
  </div>
  </div>
  )
}

export default ExpenseList;