function IncomeList({ income }) {
  return (
  <div className="income-list">
  <h2>Income List</h2>

  {income.map((item) => (
    <div className="list-item income" key={item.id}>
      <span>{item.source}</span>
      <span>₹{item.amount}</span>
    </div>
  ))}
</div>
     
  );
}

export default IncomeList;