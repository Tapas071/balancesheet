"use client"
import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
} from '@shadcn/ui';

interface Transaction {
  _id: string;
  location: string;
  amount: number;
  time: string;
  mode: string;
  type: string;
  __v: number;
}

const PaymentsTable: React.FC = () => {
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

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Payment History</h2>
      <TableContainer className="rounded-md">
        <Table className="table-auto">
          <TableHead>
            <TableRow>
              <TableCell className="text-left font-semibold">Date/Time</TableCell>
              <TableCell className="text-left font-semibold">Amount</TableCell>
              <TableCell className="text-left font-semibold">Mode</TableCell>
              <TableCell className="text-left font-semibold">Type</TableCell>
              <TableCell className="text-left font-semibold">Location</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow key={transaction._id}>
                <TableCell>{new Date(transaction.time).toLocaleDateString()}</TableCell>
                <TableCell>{transaction.amount}</TableCell>
                <TableCell>{transaction.mode}</TableCell>
                <TableCell>{transaction.type}</TableCell>
                <TableCell>{transaction.location}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default PaymentsTable;