import React from 'react';

function ExpenseList({ expenses, deleteExpense }) {
  return (
    <div>
      <h2>Expense List</h2>

      {expenses.length === 0 ? (
        <p>No expenses added.</p>
      ) : (
        expenses.map((expense) => (
          <div className="card" key={expense.id}>
            <div>
              <h3>{expense.name}</h3>
              <p>{expense.category}</p>
            </div>

            <div>
              <p>₹{expense.amount}</p>
              <button onClick={() => deleteExpense(expense.id)}>
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default ExpenseList;