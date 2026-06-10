import { useState } from "react";
import IncomeForm from "./Components/IncomeForm";
import ExpenseForm from "./Components/ExpenseForm";
import IncomeList from "./Components/IncomeList";
import ExpenseList from "./Components/ExpenseList";
import SummaryPanel from "./Components/SummaryPanel";

function App() {
  const [income, setIncome] = useState([]);
  const [expenses, setExpenses] = useState([]);

  const addIncome = (item) => {
    setIncome([...income, item]);
  };

  const addExpense = (item) => {
    setExpenses([...expenses, item]);
  };

  return (
    <div className="container">
      <h1>Personal Finance Tracker</h1>

      <IncomeForm addIncome={addIncome} />

      <ExpenseForm addExpense={addExpense} />

      <SummaryPanel income={income} expenses={expenses} />

      <IncomeList income={income} />

      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;