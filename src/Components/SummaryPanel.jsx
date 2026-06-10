function SummaryPanel({ income, expenses }) {
  const totalIncome = income.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  const totalExpense = expenses.reduce(
    (sum, item) => sum + item.amount,
    0
  );

  const savings = totalIncome - totalExpense;

  return (
    <div className="summary">
  <div className="summary-card">
    <h3>Total Income</h3>
    <p>₹{totalIncome}</p>
  </div>

  <div className="summary-card">
    <h3>Total Expense</h3>
    <p>₹{totalExpense}</p>
  </div>

  <div className="summary-card">
    <h3>Savings</h3>
    <p>₹{savings}</p>
  </div>
</div>
  );
}

export default SummaryPanel;