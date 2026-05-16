import React from 'react';

function SummaryPanel({ expenses }) {
  const total = expenses.reduce((sum, item) => sum + item.amount, 0);

  const categories = {};

  expenses.forEach((expense) => {
    if (categories[expense.category]) {
      categories[expense.category] += expense.amount;
    } else {
      categories[expense.category] = expense.amount;
    }
  });

  return (
    <div className="summary">
      <h2>Total Expenses: ₹{total}</h2>

      <h3>Category Breakdown</h3>

      {Object.keys(categories).map((category) => (
        <p key={category}>
          {category}: ₹{categories[category]}
        </p>
      ))}
    </div>
  );
}

export default SummaryPanel;