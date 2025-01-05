"use client"

import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

interface Transaction {
  _id: string;
  location: string;
  amount: number;
  time: string;
  mode: string;
  type: string;
  __v: number;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ModeOfPaymentPieChart: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/getAllTrans');
        const data: Transaction[] = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Prepare data for PieChart
  const data = transactions.reduce((acc, transaction) => {
    const existingEntry = acc.find((entry) => entry.name === transaction.mode);
    if (existingEntry) {
      existingEntry.value += transaction.amount;
    } else {
      acc.push({ name: transaction.mode, value: transaction.amount });
    }
    return acc;
  }, [] as { name: string; value: number }[]);

  return (
    <div>
      <h1>Mode of Payment Pie Chart</h1>
      <PieChart width={800} height={400}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default ModeOfPaymentPieChart;