import { useState } from "react";

function IncomeForm({ addIncome }) {
  const [source, setSource] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const income = {
      id: Date.now(),
      source,
      amount: Number(amount),
    };

    addIncome(income);

    setSource("");
    setAmount("");
  };

  return (
    <div className="container">
    <form onSubmit={handleSubmit}>
      <h2>Add Income</h2>

      <input
        type="text"
        placeholder="Income Source"
        value={source}
        onChange={(e) => setSource(e.target.value)}
      />

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <button>Add Income</button>
    </form>
    </div>
  );
}

export default IncomeForm;