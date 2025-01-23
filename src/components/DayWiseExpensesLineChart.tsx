"use client"
import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';

interface Transaction {
  _id: string;
  location: string;
  amount: number;
  time: string;
  mode: string;
  type: string;
  __v: number;
}

  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const DayWiseExpensesLineChart: React.FC = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/getAllTrans`);
        const data: Transaction[] = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Prepare data for LineChart
  const data = transactions.reduce((acc, transaction) => {
    const date = new Date(transaction.time).toLocaleDateString(); // Format date as "MM/dd/yyyy"
    const existingEntry = acc.find((entry) => entry.date === date);

    if (existingEntry) {
      existingEntry.total += transaction.amount;
    } else {
      acc.push({ date, total: transaction.amount });
    }

    return acc;
  }, [] as { date: string; total: number }[]);

  return (
    <div>
      <h1>Day Wise Expenses Line Chart</h1>
      <LineChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  );
};

export default DayWiseExpensesLineChart;