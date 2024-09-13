import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PaymentsTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get('/api/admin/transactions')
      .then(response => setTransactions(response.data))
      .catch(error => console.error('Error fetching transactions:', error));
  }, []);

  return (
    <div>
      <h2>Payments & Transactions</h2>
      <table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.status}</td>
              <td>{new Date(transaction.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentsTransactions;
