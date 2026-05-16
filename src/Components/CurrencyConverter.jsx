import React, { useEffect, useState } from 'react';

function CurrencyConverter({ expenses }) {
  const [currency, setCurrency] = useState('USD');
  const [rate, setRate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const total = expenses.reduce((sum, item) => sum + item.amount, 0);

  useEffect(() => {
    const fetchRate = async () => {
      setLoading(true);
      setError('');

      try {
        const response = await fetch(
          `https://api.frankfurter.app/latest?from=INR&to=${currency}`
        );

        const data = await response.json();

        setRate(data.rates[currency]);
      } catch (err) {
        setError('Failed to fetch exchange rate');
      }

      setLoading(false);
    };

    fetchRate();
  }, [currency]);

  return (
    <div className="converter">
      <h2>Currency Converter</h2>

      <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="GBP">GBP</option>
        <option value="INR">INR</option>
      </select>

      {loading && <p>Loading exchange rate...</p>}

      {error && <p>{error}</p>}

      {rate && !loading && (
        <h3>
          Converted Total: {(total * rate).toFixed(2)} {currency}
        </h3>
      )}
    </div>
  );
}

export default CurrencyConverter;